<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat zdroj"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn outlined color="green" @click="NewSourceDialog = true">
                    Nový Zdroj
                </v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="sources" :search="search">
                <template v-slot:item.akce="{ item }">
                    <!-- mdi-play -->
                    <v-icon
                        @click="openEditDialog(item.id, item.zdroj)"
                        small
                        color="info"
                        >mdi-pencil</v-icon
                    >

                    <!-- mdi-stop -->
                    <v-icon @click="deleteSource(item.id)" small color="red"
                        >mdi-delete</v-icon
                    >
                </template>
            </v-data-table>
        </v-card>

        <v-row justify="center">
            <v-dialog v-model="NewSourceDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Nový zdroj</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        label="Zdroj"
                                        v-model="source"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="close()">
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveNewSource()"
                        >
                            Založit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editSourceDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace zdroje</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        label="Zdroj"
                                        v-model="source"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="close()">
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveEditSource()"
                        >
                            Upravit
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
            sourceId: null,
            source: null,
            NewSourceDialog: false,
            editSourceDialog: false,
            search: "",
            headers: [
                {
                    text: "Zdroj",
                    align: "start",
                    value: "zdroj"
                },
                { text: "Akce", value: "akce" }
            ],
            sources: []
        };
    },
    components: {},
    created() {
        this.getSources();
    },
    methods: {
        async getSources() {
            await axios.get("sources").then(response => {
                this.sources = response.data;
            });
        },
        close() {
            this.source = null;
            this.NewSourceDialog = false;
            this.editSourceDialog = false;
        },
        async saveNewSource() {
            await axios
                .post("source/create", {
                    source: this.source
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.source = null;
                    this.NewSourceDialog = false;
                    this.getSources();
                });
        },
        async saveEditSource() {
            await axios
                .patch("source/update", {
                    sourceId: this.sourceId,
                    source: this.source
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.source = null;
                    this.sourceId = null;
                    this.editSourceDialog = false;
                    this.getSources();
                });
        },
        openEditDialog(sourceId, source) {
            this.sourceId = sourceId;
            this.source = source;
            this.editSourceDialog = true;
        },
        async deleteSource(sourceId) {
            await axios
                .delete("source/delete", {
                    data: {
                        sourceId: sourceId
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.sourceId = null;
                    this.getSources();
                });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
