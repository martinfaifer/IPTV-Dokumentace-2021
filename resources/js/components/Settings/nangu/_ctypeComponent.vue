<template>
    <v-main>
        <v-card flat class="pr-5">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
                    label="Vyhledat ctype"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn outlined color="green" @click="newCtype = true">
                    Přidat Ctype
                </v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="ctypes" :search="search">
                <template v-slot:item.akce="{ item }">
                    <v-icon @click="remove(item.id)" small color="red"
                        >mdi-delete</v-icon
                    >
                </template>
            </v-data-table>
        </v-card>

        <v-row justify="center">
            <v-dialog
                v-model="newCtype"
                persistent
                max-width="1000px"
                class="text-center"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline">Nový ctype</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="2">
                                    <v-text-field
                                        label="Ctype ID"
                                        type="number"
                                        v-model="ctypeId"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="4">
                                    <v-text-field
                                        label="Kodek"
                                        v-model="kodek"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="4">
                                    <v-text-field
                                        label="Rozlišení"
                                        v-model="resolution"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="2">
                                    <v-text-field
                                        label="Bitrate"
                                        type="number"
                                        v-model="bitrate"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        label="Popis"
                                        v-model="description"
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
                            @click="create()"
                        >
                            Vytvořit
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
            ctypeId: "",
            kodek: "",
            resolution: "",
            bitrate: "",
            description: "",
            newCtype: false,
            search: "",
            headers: [
                {
                    text: "Ctype ID",
                    align: "start",
                    value: "ctype_id"
                },
                { text: "Kodek", value: "kodek" },
                { text: "Rozlišení", value: "resolution" },
                { text: "Datový tok", value: "bitrate" },
                { text: "Popis", value: "description" },
                { text: "Akce", value: "akce" }
            ],
            ctypes: []
        };
    },
    components: {},
    created() {
        this.getCtypes();
    },
    methods: {
        async getCtypes() {
            await axios.get("ctype").then(response => {
                this.ctypes = response.data;
            });
        },
        close() {
            this.ctypeId = "";
            this.kodek = "";
            this.resolution = "";
            this.bitrate = "";
            this.description = "";
            this.newCtype = false;
        },
        async create() {
            await axios
                .post("ctype", {
                    ctypeId: this.ctypeId,
                    kodek: this.kodek,
                    resolution: this.resolution,
                    bitrate: this.bitrate,
                    description: this.description,
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.getCtypes();
                    this.close();
                });
        },
        async remove(id) {
            await axios
                .delete("streamer", {
                    data: {
                        id: id
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.getCtypes();
                });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
