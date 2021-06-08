<template>
    <v-main>
        <v-card flat color="white" @contextmenu="show($event)" height="250">
            <v-card-subtitle>
                <strong>
                    Nangu
                </strong>
            </v-card-subtitle>
            <v-card-text>
                <v-container fluid>
                    <v-col cols="12">
                        <span class="ml-3">
                            <strong>
                                chunk store Id:
                            </strong>
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
                                <span>ID kanálu na Ingestoru</span>
                            </v-tooltip>
                        </span>
                    </v-col>

                    <v-col cols="12">
                        <span class="pl-3">
                            <strong>
                                nangu channel code:
                            </strong>
                            {{ channel_code }}
                            <!-- info -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn small icon>
                                        <v-icon small v-on="on">
                                            mdi-information
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Slouží pro vyhledání v API Nangu</span>
                            </v-tooltip>
                        </span>
                    </v-col>
                </v-container>
            </v-card-text>
        </v-card>

        <!-- menu -->
        <v-menu
            dense
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <v-list dense>
                <v-list-item @click="openEditDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit chunk store id
                    </v-list-item-title>
                </v-list-item>

                <v-list-item @click="openEditNanguDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit Nangu channel code
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-row justify="center">
            <v-dialog v-model="editDialog" persistent max-width="800px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace chunk store id</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        type="number"
                                        v-model="chunkStoreId"
                                        label="Chunk Store Id"
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
                        <v-btn color="green darken-1" text @click="saveData()">
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <v-row justify="center">
            <v-dialog
                v-model="editDialogChannelCode"
                persistent
                max-width="800px"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace Nangu channel code</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        v-model="channel_code"
                                        label="Nangu channel code"
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
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveDataNangu()"
                        >
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
    data() {
        return {
            channel_code: [],
            chunkStoreId: [],
            editDialog: false,
            editDialogChannelCode: false,
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadChunkStoreId();
        this.loadChunkStoreId();
        this.loadChannelCode();
    },
    methods: {
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
                .post("channel/chunkStoreId/show", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.chunkStoreId = response.data;
                });
        },
        loadChannelCode() {
            axios
                .post("channel/nangu/show_channel_code", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.channel_code = response.data;
                });
        },
        openEditDialog() {
            this.editDialog = true;
        },

        openEditNanguDialog() {
            this.editDialogChannelCode = true;
        },

        closeDialog() {
            this.editDialog = false;
            this.editDialogChannelCode = false;
        },

        async saveData() {
            await axios
                .post("channel/chunkStoreId/update", {
                    channelId: this.$route.params.id,
                    chunkStoreId: this.chunkStoreId
                })
                .then(response => {
                    this.loadChunkStoreId();
                    this.$store.state.alerts = response.data.alert;
                    this.editDialog = false;
                });
        },

        async saveDataNangu() {
            await axios
                .post("channel/nangu/update", {
                    channelId: this.$route.params.id,
                    channel_code: this.channel_code
                })
                .then(response => {
                    this.loadChunkStoreId();
                    this.$store.state.alerts = response.data.alert;
                    this.editDialogChannelCode = false;
                });
        },

        removeData() {}
    },
    watch: {
        $route(to, from) {
            this.loadChunkStoreId();
            this.loadChannelCode();
        }
    }
};
</script>
