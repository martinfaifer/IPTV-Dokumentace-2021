<template>
    <v-main>
        <v-card flat color="#F5F5F7" @contextmenu="show($event)">
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
                            <!-- info -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn small icon>
                                        <v-icon small v-on="on">
                                            mdi-information
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Rychlá informace o zařízení</span>
                            </v-tooltip>
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
                                            @click="openInformationDialog('stop')"
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
                                            @click="openInformationDialog('start')"
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
            y: 0
        };
    },
    created() {
        this.loadTranscoder();
        this.loadStatusFromTramscoder();
    },
    methods: {
        openInformationDialog(akce) {
            this.InformationDialog = true;
            this.transcoderAction = akce;
        },
        closeInformationDialog() {
            this.InformationDialog = false;
            this.transcoderAction = null;
        },
        async sendInformationDialog() {
            await axios.post('h265/transcoder/manageStream', {
                channelId: this.$route.params.id,
                transcoderAction: this.transcoderAction
            }).then(response => {
                this.$store.state.alerts = response.data;
                this.InformationDialog = false;
                this.loadStatusFromTramscoder();
            })
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
