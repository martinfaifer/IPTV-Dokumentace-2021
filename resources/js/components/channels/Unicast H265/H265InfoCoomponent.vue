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
    },
    methods: {
        openDialog() {
            axios
                .post("h265/channel/kvalityForEdit", {
                    channelId: this.$route.params.id,
                    type: "h265"
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
        savedata() {
            axios
                .post("h265/channel/kvality/update", {
                    channelId: this.$route.params.id,
                    p1080: this.kvalityForDialog.p1080,
                    p720: this.kvalityForDialog.p720
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;

                    this.loadChunkStoreId();
                    this.loadOutputKvality();

                    this.editDataDialog = false;
                });
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
                    type: "h265"
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
                    type: "h265"
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
        }
    }
};
</script>
