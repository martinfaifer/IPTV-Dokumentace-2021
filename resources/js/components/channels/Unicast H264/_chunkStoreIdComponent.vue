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
                <v-list-item @click="editDataDialog = true">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravil Chunk store ID
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-row justify="center">
            <v-dialog
                v-model="editDataDialog"
                persistent
                max-width="1000px"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline">Změna Chunk Store ID </span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        label="Chunk store ID"
                                        v-model="chunkStoreId"
                                        type="number"
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
    data() {
        return {
            editDataDialog: false,
            chunkStoreId: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadChunkStoreId();
    },
    methods: {
        savedata() {
            axios
                .post("unicast/chunkStoreId/edit", {
                    channelId: this.$route.params.id,
                    chunkStoreId: this.chunkStoreId
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.loadChunkStoreId();
                    }

                    this.editDataDialog = false;
                });
        },
        closeDialog() {
            editDataDialog = false;
            this.loadChunkStoreId();
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
        }
    },
    watch: {
        $route(to, from) {
            this.loadChunkStoreId();
        }
    }
};
</script>
