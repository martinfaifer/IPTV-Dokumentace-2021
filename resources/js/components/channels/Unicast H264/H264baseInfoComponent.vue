<template>
    <v-main style="background-color: #F1F5F9">
        <v-container fluid class="pl-3">
            <div class="pr-5">
                <!-- Zobrazení názvu kanálu -->
                <v-row>
                    <v-col cols="12" sm="1" md="1" lg="1" v-if="logo != null">
                        <v-img
                            :lazy-src="logo"
                            max-height="64"
                            max-width="64"
                            :src="logo"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="11" md="11" lg="11">
                        <h2 class="pt-6">
                            {{ channelName }} - H264
                        </h2>
                    </v-col>
                </v-row>
                <v-divider inline> </v-divider>
            </div>

            <div v-if="exist === 'exist'">
                <v-row class="pt-4 pr-5">
                    <v-col>
                        <!-- component pro získání chunk store id -->
                        <h264info-component></h264info-component>
                    </v-col>
                </v-row>

                <v-row class="pt-4 pr-5">
                    <v-col>
                        <!-- transcoder component -->
                        <transcoder-component></transcoder-component>
                    </v-col>

                    <v-col>
                        <!-- transcoder chart component -->
                        <transcoderchart-component></transcoderchart-component>
                    </v-col>
                </v-row>

                <dohled-component></dohled-component>
            </div>
            <div v-else-if="exist === 'notexist'" class="pt-4 pr-5">
                <v-alert type="warning" @contextmenu="show($event)">
                    Tento formát není nastaven
                </v-alert>

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
                                <v-icon x-small>mdi-plus</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                Vytvořit H264 výstup
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-row justify="center">
                    <v-dialog
                        v-model="outputDialog"
                        persistent
                        max-width="1000px"
                    >
                        <v-card>
                            <v-card-title>
                                <span class="headline">Založení H264 </span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-combobox
                                                v-model="transcoder"
                                                label="Výber transcodéru"
                                                :items="transcoders"
                                                required
                                                clearable
                                            ></v-combobox>
                                        </v-col>

                                        <!-- kvality -->

                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field
                                                v-model="output1080"
                                                label="URL pro 1080p"
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field
                                                v-model="output720"
                                                label="URL pro 720p"
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="4">
                                            <v-text-field
                                                v-model="output576"
                                                label="URL pro 576p"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- <v-col cols="12">
                                            <v-checkbox
                                                v-model="addToTranscoder"
                                                label="Založení na transcodér a začít transcodovat"
                                            ></v-checkbox>
                                        </v-col> -->
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
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="savedata()"
                                >
                                    Uložit
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </div>

            <div v-else class=" mt-4">
                <span class="mt-12">
                    <i
                        style="color:#EAF0F1"
                        class="fas fa-spinner fa-spin fa-5x"
                    ></i>
                </span>
            </div>
        </v-container>
    </v-main>
</template>
<script>
import H264InfoComponent from "./H264InfoCoomponent";
import transcoderComponent from "./_unicastDeviceComponent";
import DohledComponent from "../Dohled/DohledH264Component";
import TranscoderChart from "../TranscoderChart/TranscoderChartComponent";
// import BroadcastDohledComponent from "../Dohled/DohledBroadcastComponent";

export default {
    data() {
        return {
            addToTranscoder: false,
            chunkStoreId: null,
            transcoder: null,
            transcoders: [],
            output1080: null,
            output720: null,
            output576: null,
            outputDialog: false,
            channelName: "",
            exist: "",
            showMenu: false,
            x: 0,
            y: 0,
            logo: null
        };
    },
    components: {
        "h264info-component": H264InfoComponent,
        "transcoder-component": transcoderComponent,
        "dohled-component": DohledComponent,
        "transcoderchart-component": TranscoderChart
        // "broadcastdohled-component": BroadcastDohledComponent
    },
    created() {
        this.loadChannelNameById();
        this.checkIfIs();
        this.loadChannelLogo();
    },
    methods: {
        async loadChannelLogo() {
            await axios
                .post("channel/logo", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data === "not_exist") {
                        this.logo = null;
                    } else {
                        this.logo = response.data;
                    }
                });
        },
        // async removeH264() {
        //     await axios
        //         .post("h264/delete", {
        //             channelId: this.$route.params.id
        //         })
        //         .then(response => {
        //             this.$store.state.alerts = response.data.alert;
        //             if (response.data.status === "success") {
        //                 this.$router
        //                     .push("/channel/" + response.data.channelId)
        //                     .catch(err => {});
        //             }
        //         });
        // },
        async createOutput() {
            await axios.get("device/transcoders").then(response => {
                this.transcoders = response.data;
                this.outputDialog = true;
            });
        },
        async savedata() {
            await axios
                .post("h264/create", {
                    channelId: this.$route.params.id,
                    addToTranscoder: this.addToTranscoder,
                    transcoder: this.transcoder,
                    output1080: this.output1080,
                    output720: this.output720,
                    output576: this.output576
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    // this.$route.push("/");
                    // this.$route.push("/channel/" + response.data.channelId + "/h264");
                    this.loadChannelNameById();
                    this.checkIfIs();
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
        async loadChannelNameById() {
            await axios
                .post("channel/name", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.channelName = response.data;
                });
        },
        async checkIfIs() {
            await axios
                .post("h264/check", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.exist = response.data;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChannelNameById();
            this.loadChannelLogo();
        }
    }
};
</script>
