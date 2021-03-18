<template>
    <v-main>
        <v-col>
            <v-card flat color="#F5F5F7" @contextmenu="show($event)">
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
                            Upravit
                        </v-list-item-title>
                    </v-list-item>

                    <!-- <v-list-item @click="removeData()">
                        <v-list-item-icon>
                            <v-icon x-small>mdi-delete</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Odebrat
                        </v-list-item-title>
                    </v-list-item> -->
                </v-list>
            </v-menu>

            <v-row justify="center">
                <v-dialog v-model="editDialog" persistent max-width="1000px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editace chunk store Id</span>
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
                                @click="saveData()"
                            >
                                Uložit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-col>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            chunkStoreId: [],
            editDialog: false,
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadChunkStoreId();
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
        openEditDialog() {
            this.editDialog = true;
        },

        closeDialog() {
            this.editDialog = false;
        },

        async saveData() {
            await axios.post('channel/chunkStoreId/update', {
                channelId: this.$route.params.id,
                chunkStoreId: this.chunkStoreId
            }).then(response => {
                this.loadChunkStoreId();
                this.$store.state.alerts = response.data.alert;
                this.editDialog = false;
            })
        },

        removeData() {}
    },
    watch: {
        $route(to, from) {
            this.loadChunkStoreId();
        }
    }
};
</script>
