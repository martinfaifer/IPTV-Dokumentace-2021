<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat vazbu"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn outlined color="green" @click="openCreateDialog()">
                    Nová vazba
                </v-btn>
                <v-btn outlined color="info" class="ml-3" @click="generateNewOutputs()" :loading="loading">
                    Spustit automatické vygenerování výstupů
                </v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="boundary" :search="search">
                <template v-slot:item.akce="{ item }">
                    <v-icon @click="remove(item.id)" small color="red"
                        >mdi-delete</v-icon
                    >
                </template>
            </v-data-table>
        </v-card>

        <!-- create dialog -->
        <v-row justify="center">
            <v-dialog
                v-model="newBound"
                persistent
                max-width="1000px"
                class="text-center"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline">Nová vazba</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6">
                                    <v-autocomplete
                                        v-model="streamer"
                                        :items="streamers"
                                        hide-no-data
                                        hide-selected
                                        label="Streamer"
                                        item-text="streamer_name"
                                        item-value="id"
                                        @change="loadStreamerInfo()"
                                    >
                                    </v-autocomplete>
                                    <small
                                        v-if="streamerInfo != null"
                                        class="blue--text"
                                        ><strong>{{
                                            streamerInfo.streamer_ip
                                        }}</strong></small
                                    >
                                </v-col>

                                <v-col cols="12" sm="12" md="6">
                                    <v-autocomplete
                                        v-model="port"
                                        :items="ports"
                                        label="Služba"
                                        hide-no-data
                                        hide-selected
                                        item-text="port_desc"
                                        item-value="id"
                                        @change="loadPortInfo()"
                                    >
                                    </v-autocomplete>
                                    <small
                                        v-if="portInfo != null"
                                        class="blue--text"
                                        ><strong
                                            >číslo portu:
                                            {{ portInfo.port_nuber }}</strong
                                        ></small
                                    >
                                    <small
                                        v-if="portInfo != null"
                                        class="blue--text"
                                        ><strong
                                            >výstup:
                                            {{ portInfo.port_output }}</strong
                                        ></small
                                    >
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
                            @click="saveNewBound()"
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
            loading: false,
            portInfo: null,
            streamerInfo: null,
            streamer: null,
            streamers: [],
            port: null,
            ports: [],
            newBound: false,
            search: "",
            headers: [
                {
                    text: "Streamer",
                    align: "start",
                    value: "streamer_name"
                },
                { text: "Streamer IP", value: "streamer_ip" },
                { text: "Port", value: "port_nuber" },
                { text: "Výstup", value: "port_output" },
                { text: "Akce", value: "akce" }
            ],
            boundary: []
        };
    },
    components: {},
    created() {
        this.getBoundary();
    },
    methods: {
        async getBoundary() {
            await axios.get("streamer/ports").then(response => {
                this.boundary = response.data;
            });
        },
        async openCreateDialog() {
            axios.get("streamer/streamers").then(response => {
                this.streamers = response.data;
            });

            axios.get("stream/ports").then(response => {
                this.ports = response.data;
            });

            this.newBound = true;
        },

        loadStreamerInfo() {
            axios.get("streamer/streamer/" + this.streamer).then(response => {
                this.streamerInfo = response.data;
            });
        },
        loadPortInfo() {
            axios.get("stream/port/" + this.port).then(response => {
                this.portInfo = response.data;
            });
        },
        close() {
            this.port = null;
            this.portInfo = null;
            this.ports = [];
            this.streamerInfo = null;
            this.streamer = null;
            this.streamers = [];
            this.newBound = false;
        },

        async saveNewBound() {
            await axios
                .post("streamer/port", {
                    portId: this.port,
                    streamerId: this.streamer
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.getBoundary();
                    this.close();
                });
        },
        remove(id) {
            axios
                .delete("streamer/port", {
                    data: {
                        id: id
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.getBoundary();
                });
        },
        
        generateNewOutputs() {
            this.loading = true;
            axios.post('stream/port/generate').then(response => {
                this.$store.state.alerts = response.data.alert;
                this.loading = false;
            })
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
