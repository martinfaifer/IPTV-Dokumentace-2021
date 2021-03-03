<template>
    <v-main>
        <v-card
            flat
            color="#F5F5F7"
            v-if="chunkStoreId != '0'"
            @contextmenu="show($event)"
        >
            <v-card-subtitle>
                <strong>
                    Chunk store id
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row>
                        <span class="ml-6">
                            {{ chunkStoreId }}

                            <!-- info -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn small icon>
                                        <v-icon small v-on="on">
                                            mdi-information
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Informace o chunk Store id</span>
                            </v-tooltip>
                        </span>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-divider class="ml-6" width="95%"></v-divider>

            <v-card-subtitle>
                <strong>
                    Výstupní kvality
                </strong>
            </v-card-subtitle>

            <v-card-text
                class="ml-12 text--center"
                v-if="kvalityOutput != null"
            >
                <v-container fluid>
                    <v-list-item
                        v-for="output in kvalityOutput"
                        :key="output.output"
                    >
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <span>
                                    <strong> {{ output.format }}p: </strong>
                                </span>
                                <span class="ml-3">
                                    {{ output.output }}
                                </span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-container>
            </v-card-text>

            <v-divider class="ml-6" width="95%"></v-divider>

            <v-card-subtitle v-if="m3u8s != null">
                <strong>
                    Výstupy
                </strong>
            </v-card-subtitle>

            <v-card-text class="ml-1 text--center" v-if="m3u8s != null">
                <v-container fluid>
                    <v-list-item v-for="m3u8 in m3u8s" :key="m3u8">
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <span>
                                    <strong>
                                        <i>{{m3u8}}</i>
                                    </strong>
                                </span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                
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
                <v-list-item @click="openDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit výstupní kvality
                    </v-list-item-title>
                </v-list-item>
                <v-list-item v-if="dohled != null" @click="AnalyzeChannel()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-magnify</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Analyzovat kanál
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-row justify="center">
            <v-dialog v-model="editDataDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Upravení kvalit</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="chunkStoreId"
                                        label="Chunk Store Id"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p1080"
                                        label="URL pro 1080p"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p720"
                                        label="URL pro 720p"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p576"
                                        label="URL pro 720p"
                                    ></v-text-field>
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
        </v-row>
    </v-main>
</template>
<script>
export default {
    computed: {
        dohled() {
            return this.$store.state.dohledAccess;
        }
    },
    data() {
        return {
            m3u8s: [],
            editDataDialog: false,
            chunkStoreId: null,
            kvalityOutput: null,
            kvalityForDialog: [],
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadChunkStoreId();
        this.loadOutputKvality();
        this.loadM3u8Kvality();
    },
    methods: {
        loadM3u8Kvality() {
            axios
                .post("h264/channel/m3u8", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.m3u8s = response.data.data;
                    } else {
                        this.m3u8s = null;
                    }
                });
        },
        savedata() {
            axios
                .post("h264/channel/edit", {
                    channelId: this.$route.params.id,
                    kdekoliv: this.m3u8s.kdekoliv,
                    local: this.m3u8s.local,
                    mobile: this.m3u8s.mobile,
                    p1080: this.kvalityForDialog.p1080,
                    p720: this.kvalityForDialog.p720,
                    p576: this.kvalityForDialog.p576,
                    type: "h264",
                    chunkStoreId: this.chunkStoreId
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.editDataDialog = false;
                        this.loadChunkStoreId();
                        this.loadOutputKvality();
                        this.loadM3u8Kvality();
                    } else {
                        this.m3u8s = null;
                    }
                });
        },
        openDialog() {
            axios
                .post("h264/channel/kvalityForEdit", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    this.kvalityForDialog = response.data;
                });
            this.editDataDialog = true;
        },

        closeDialog() {
            this.editDataDialog = false;
            this.kvalityForDialog = [];
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

        loadChunkStoreId() {
            axios
                .post("unicast/chunkStoreId", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.chunkStoreId = response.data;
                });
        },
        loadOutputKvality() {
            axios
                .post("h264/channel/kvality", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.kvalityOutput = response.data.data;
                    } else {
                        this.kvalityOutput = null;
                    }
                });
        },
        AnalyzeChannel() {
            axios
                .post("channel/analyze", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChunkStoreId();
            this.loadOutputKvality();
            this.loadM3u8Kvality();
        }
    }
};
</script>
