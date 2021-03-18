<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat streamer"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn outlined color="green" @click="newStreamer = true">
                    Nový streamer
                </v-btn>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="streamers"
                :search="search"
            >
                <template v-slot:item.akce="{ item }">
                    <v-icon @click="remove(item.id)" small color="red"
                        >mdi-delete</v-icon
                    >
                </template>
            </v-data-table>
        </v-card>

        <v-row justify="center">
            <v-dialog
                v-model="newStreamer"
                persistent
                max-width="1000px"
                class="text-center"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline">Nový streamer</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        label="Název streameru"
                                        v-model="streamer_name"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        label="IP streameru"
                                        v-model="streamer_ip"
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
                        <v-btn color="green darken-1" text @click="create()">
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
            streamer_name: "",
            streamer_ip: "",
            newStreamer: false,
            search: "",
            headers: [
                {
                    text: "Streamer",
                    align: "start",
                    value: "streamer_name"
                },
                { text: "IP", value: "streamer_ip" },
                { text: "Akce", value: "akce" }
            ],
            streamers: []
        };
    },
    components: {},
    created() {
        this.getStreamers();
    },
    methods: {
        async getStreamers() {
            await axios.get("streamer/streamers").then(response => {
                this.streamers = response.data;
            });
        },
        close() {
            this.streamer_name = "";
            this.streamer_ip = "";
            this.newStreamer = false;
        },
        async create() {
            await axios
                .post("streamer/create", {
                    streamer_name: this.streamer_name,
                    streamer_ip: this.streamer_ip
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.getStreamers();
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
                    this.getStreamers();
                });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
