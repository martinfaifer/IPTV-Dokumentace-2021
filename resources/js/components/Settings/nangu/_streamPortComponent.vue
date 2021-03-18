<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat výstup"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn outlined color="green" @click="newStreamOutput = true">
                    Nový výstup
                </v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="ports" :search="search">
                <template v-slot:item.akce="{ item }">
                    <v-icon @click="remove(item.id)" small color="red"
                        >mdi-delete</v-icon
                    >
                </template>
            </v-data-table>
        </v-card>

        <v-row justify="center">
            <v-dialog
                v-model="newStreamOutput"
                persistent
                max-width="1000px"
                class="text-center"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline">Nový port</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        label="Číslo portu"
                                        type="number"
                                        v-model="port_number"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        label="Popis portu"
                                        v-model="port_desc"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        label="Výstup"
                                        v-model="port_output"
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
            port_number: "",
            port_desc: "",
            port_output: "",
            newStreamOutput: false,
            search: "",
            headers: [
                {
                    text: "Port",
                    align: "start",
                    value: "port_nuber"
                },
                { text: "Výstup", value: "port_output" },
                { text: "Popis", value: "port_desc" },
                { text: "Akce", value: "akce" }
            ],
            ports: []
        };
    },
    components: {},
    created() {
        this.getPorts();
    },
    methods: {
        async getPorts() {
            await axios.get("stream/ports").then(response => {
                this.ports = response.data;
            });
        },
        remove(id) {
            axios
                .delete("stream/port", {
                    data: {
                        id: id
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.getPorts();
                });
        },
        close() {
            this.newStreamOutput = false;
            this.port_number = "";
            this.port_desc = "";
            this.port_output = "";
        },
        async create() {
            await axios.post("stream/port", {
                port_nuber: this.port_number,
                port_desc: this.port_desc,
                port_output: this.port_output
            }).then(response => {
                this.$store.state.alerts = response.data.alert;
                this.close();
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
