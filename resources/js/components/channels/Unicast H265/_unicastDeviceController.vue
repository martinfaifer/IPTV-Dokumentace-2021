<template>
    <v-main>
        <v-card flat color="white" @contextmenu="show($event)" height="350">
            <v-card-subtitle>
                <strong>
                    Transcodér
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row v-if="transcoder != null">
                        <span class="ml-6">
                            {{ transcoder.name }}
                            <!-- hyperlink na device -->
                            <v-tooltip bottom v-if="transcoder.ip != null">
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :href="'http://' + transcoder.ip"
                                        target="_blank"
                                    >
                                        <v-icon small v-on="on">
                                            mdi-earth
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Přímý proklik na zařízení</span>
                            </v-tooltip>
                            <!-- hyperlink v ramci doku -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :to="'/device/' + transcoder.id"
                                        target="_blank"
                                    >
                                        <v-icon small v-on="on">
                                            mdi-arrow-right
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span
                                    >Proklik na zařízení v rámci
                                    dokumentace</span
                                >
                            </v-tooltip>
                        </span>

                        <v-col
                            cols="12"
                            v-if="transcoderStatus != null"
                            class="ml-3"
                        >
                            <span
                                v-if="
                                    transcoderStatus.streamStatus === 'active'
                                "
                            >
                                Stav streamu z transcoderu:
                                <span class="green--text">
                                    <strong>
                                        Transcoduje
                                    </strong>
                                </span>

                                <!-- akce na zastavení transcodinku -->
                                <v-tooltip bottom v-if="transcoder.ip != null">
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            icon
                                            @click="
                                                openInformationDialog('stop')
                                            "
                                        >
                                            <v-icon small color="red" v-on="on">
                                                mdi-stop
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Zastavení transcódování kanálu</span>
                                </v-tooltip>
                            </span>

                            <span
                                v-else-if="
                                    transcoderStatus.streamStatus === 'STOP'
                                "
                            >
                                <span class="blue--text">
                                    <strong>
                                        Transcoding je zastaven
                                    </strong>
                                </span>

                                <!-- akce na spustení transcodinku -->
                                <v-tooltip bottom v-if="transcoder.ip != null">
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                            icon
                                            @click="
                                                openInformationDialog('start')
                                            "
                                        >
                                            <v-icon
                                                small
                                                color="green"
                                                v-on="on"
                                            >
                                                mdi-play
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Spuštění transcódování kanálu</span>
                                </v-tooltip>
                            </span>

                            <span v-else>
                                <span class="red--text">
                                    <strong>
                                        Problém s transcodingem
                                    </strong>
                                </span>
                            </span>
                        </v-col>
                        <v-col cols="12" class="ml-3" v-else>
                            <span>
                                <span class="red--text">
                                    <strong>
                                        Napodařilo se získat vzdálenou kontrolu
                                    </strong>
                                </span>
                            </span>
                        </v-col>
                        <v-col v-if="transcoderData != null" class="mr-6">
                            <v-row
                                class="justify-center body-2 mt-3"
                                v-if="transcoderData != null"
                            >
                                <v-col sm="12" md="3" lg="3">
                                    <div v-if="ramPercent < '75'">
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="ramPercent"
                                            color="green"
                                        >
                                            <small>
                                                <strong>
                                                    Volná RAM
                                                    {{ ramUsage.free }}
                                                </strong>
                                            </small>
                                        </v-progress-circular>
                                    </div>
                                    <div
                                        v-if="
                                            ramPercent >= '75' &&
                                                ramPercent < '88'
                                        "
                                    >
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="ramPercent"
                                            color="orange"
                                        >
                                            <small>
                                                <strong>
                                                    Volná RAM
                                                    {{ ramUsage.free }}
                                                </strong>
                                            </small>
                                        </v-progress-circular>
                                    </div>
                                    <div v-if="ramPercent >= '88'">
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="ramPercent"
                                            color="red"
                                        >
                                            <small>
                                                <strong>
                                                    Volná RAM
                                                    {{ ramUsage.free }}
                                                </strong>
                                            </small>
                                        </v-progress-circular>
                                    </div>
                                </v-col>

                                <v-col
                                    sm="12"
                                    md="3"
                                    lg="3"
                                    v-for="encoder in gpuStat.gpu"
                                    v-bind:key="encoder.id"
                                    v-show="encoder.encoder_util"
                                >
                                    <div v-if="encoder.encoder_util <= '75 %'">
                                        <v-progress-circular
                                            class="mt-2 "
                                            :size="130"
                                            :width="2"
                                            :value="encoder.encoder_util"
                                            color="green"
                                        >
                                            <strong>
                                                Encoder
                                                {{ encoder.encoder_util }}
                                            </strong>
                                        </v-progress-circular>
                                    </div>
                                    <div
                                        v-if="
                                            encoder.encoder_util > '75 %' &&
                                                encoder.encoder_util < '88 %'
                                        "
                                    >
                                        <v-progress-circular
                                            class="mt-2 "
                                            :size="130"
                                            :width="2"
                                            :value="encoder.encoder_util"
                                            color="orange"
                                            ><strong>
                                                Encoder
                                                {{ encoder.encoder_util }}
                                            </strong></v-progress-circular
                                        >
                                    </div>
                                    <div v-if="encoder.encoder_util >= '88 %'">
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="encoder.encoder_util"
                                            color="red"
                                            ><strong>
                                                Encoder
                                                {{ encoder.encoder_util }}
                                            </strong></v-progress-circular
                                        >
                                    </div>
                                </v-col>
                                <!-- Decoder -->
                                <v-col
                                    sm="12"
                                    md="3"
                                    lg="3"
                                    v-for="decoder in gpuStat.gpu"
                                    v-bind:key="decoder.id"
                                    v-show="decoder.decoder_util"
                                >
                                    <div v-if="decoder.decoder_util <= '75 %'">
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="decoder.decoder_util"
                                            color="green"
                                        >
                                            <strong>
                                                Decoder
                                                {{ decoder.decoder_util }}
                                            </strong>
                                        </v-progress-circular>
                                    </div>
                                    <div
                                        v-if="
                                            decoder.decoder_util > '75 %' &&
                                                decoder.decoder_util < '88 %'
                                        "
                                    >
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="decoder.decoder_util"
                                            color="orange"
                                        >
                                            <strong>
                                                Decoder
                                                {{ decoder.decoder_util }}
                                            </strong></v-progress-circular
                                        >
                                    </div>
                                    <div v-if="decoder.decoder_util >= '88 %'">
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="decoder.decoder_util"
                                            color="red"
                                        >
                                            <strong>
                                                Decoder
                                                {{ decoder.decoder_util }}
                                            </strong></v-progress-circular
                                        >
                                    </div>
                                </v-col>
                                <v-col
                                    sm="12"
                                    md="3"
                                    lg="3"
                                    v-for="gpu in gpuStat.gpu"
                                    v-bind:key="gpu.id"
                                    v-show="gpu.gpu_util"
                                >
                                    <div v-if="gpu.gpu_util <= '75 %'">
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="gpu.gpu_util"
                                            color="green"
                                        >
                                            <strong>
                                                GPU {{ gpu.gpu_util }}
                                            </strong>
                                        </v-progress-circular>
                                    </div>
                                    <div
                                        v-if="
                                            gpu.gpu_util > '75 %' &&
                                                gpu.gpu_util < '88 %'
                                        "
                                    >
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="gpu.gpu_util"
                                            color="orange"
                                        >
                                            <strong>
                                                GPU {{ gpu.gpu_util }}
                                            </strong></v-progress-circular
                                        >
                                    </div>
                                    <div v-if="gpu.gpu_util >= '88 %'">
                                        <v-progress-circular
                                            class="mt-2"
                                            :size="130"
                                            :width="2"
                                            :value="gpu.gpu_util"
                                            color="red"
                                        >
                                            <strong>
                                                GPU {{ gpu.gpu_util }}
                                            </strong></v-progress-circular
                                        >
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row v-else>
                        <strong class="blue--text">
                            Není nadefinován transcoder
                        </strong>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>

        <v-menu
            dense
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <!-- menu -->
            <v-list dense>
                <v-list-item @click="createOutput()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Změnit zařízení
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-row justify="center">
            <v-dialog
                v-model="outputDialog"
                persistent
                max-width="1000px"
                v-if="transcoder != null"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline">Změna zařízení </span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-combobox
                                        v-model="transcoder.name"
                                        label="Výber transcodéru / H265 příjmu"
                                        :items="transcoders"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="closeDialog()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn color="green darken-1" text @click="savedata()">
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- information dialog pro interakci s transcoderem -->

            <v-dialog v-model="InformationDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline"
                            >Vážně si přejete provést tuto akci?
                        </span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12"> </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="closeInformationDialog()"
                        >
                            NE
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="sendInformationDialog()"
                        >
                            ANO
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            transcoderAction: null,
            InformationDialog: false,
            transcoderStatus: null,
            transcoders: [],
            transcoder: null,
            kvalityForDialog: [],
            showMenu: false,
            outputDialog: false,
            x: 0,
            y: 0,
            transcoderData: null,
            gpuStat: "",
            ramUsage: "",
            ramTotal: "",
            ramUsed: "",
            ramPercent: "",
            loadingInterval: null
        };
    },
    created() {
        this.loadTranscoder();
        this.loadStatusFromTramscoder();
    },
    mounted() {
        this.loadingInterval = setInterval(
            function() {
                this.loadTranscoder();
            }.bind(this),
            30000
        );
    },

    methods: {
        loadTranscoderData(trasncoderId) {
            axios
                .post("device/transcoderData", {
                    deviceId: trasncoderId
                })
                .then(response => {
                    if (response.data != null) {
                        this.transcoderData = "string";
                        if (response.data.gpu) {
                            if (
                                typeof response.data.gpu.fb_memory_usage !==
                                "undefined"
                            ) {
                                this.gpuStat = response.data;
                                if (
                                    typeof response.data.gpu.fb_memory_usage !==
                                    "undefined"
                                ) {
                                    this.ramUsage =
                                        response.data.gpu.fb_memory_usage;
                                    this.ramTotal = this.ramUsage.total.replace(
                                        " MiB",
                                        ""
                                    );
                                    this.ramUsed = this.ramUsage.used.replace(
                                        " MiB",
                                        ""
                                    );
                                    this.ramPercent =
                                        (this.ramUsed * 100) / this.ramTotal;
                                }
                            }
                        } else {
                            this.transcoderData = null;
                        }
                    }
                });
        },

        percent(used, total) {
            if (used && total) {
                let ramUsage = used;
                let ramTotal = total;
                let ramPercent;
                ramUsage = ramUsage.replace(" MiB", "");
                ramTotal = ramTotal.replace(" MiB", "");

                ramPercent = (parseInt(ramUsage) * 100) / parseInt(ramTotal);
                return parseInt(ramPercent);
            }
        },
        openInformationDialog(akce) {
            this.InformationDialog = true;
            this.transcoderAction = akce;
        },
        closeInformationDialog() {
            this.InformationDialog = false;
            this.transcoderAction = null;
        },
        async sendInformationDialog() {
            await axios
                .post("h265/transcoder/manageStream", {
                    channelId: this.$route.params.id,
                    transcoderAction: this.transcoderAction
                })
                .then(response => {
                    this.$store.state.alerts = response.data;
                    this.InformationDialog = false;
                    this.loadStatusFromTramscoder();
                });
        },
        createOutput() {
            axios.get("device/transcodersAndSatelits").then(response => {
                this.transcoders = response.data;
                this.outputDialog = true;
            });
        },

        savedata() {
            axios
                .patch("h265/transcoder/update", {
                    channelId: this.$route.params.id,
                    transcoder: this.transcoder.name
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadTranscoder();
                    this.outputDialog = false;
                });
        },

        closeDialog() {
            this.outputDialog = false;
        },

        show(e) {
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        loadTranscoder() {
            axios
                .post("h265/transcoder", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.transcoder = response.data.data;
                        this.loadTranscoderData(this.transcoder.id);
                    } else {
                        this.transcoder = null;
                    }
                });
        },

        loadStatusFromTramscoder() {
            axios
                .post("h265/transcoder/status", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.transcoderStatus = response.data;
                    } else {
                        this.transcoderStatus = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadTranscoder();
            this.loadStatusFromTramscoder();
        }
    }
};
</script>
