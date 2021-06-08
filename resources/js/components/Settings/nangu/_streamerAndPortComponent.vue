<template>
    <v-main>
        <v-card flat class="pr-5">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
                    label="Vyhledat vazbu"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn outlined color="green" @click="openCreateDialog()">
                    Nová vazba
                </v-btn>
                <v-btn
                    outlined
                    color="info"
                    class="ml-3"
                    @click="generateNewOutputs()"
                    :loading="loading"
                >
                    Spustit automatické vygenerování výstupů
                </v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="boundary" :search="search" dense>
                <template v-slot:item.akce="{ item }">
                    <v-icon @click="remove(item.id)" small color="red"
                        >mdi-delete</v-icon
                    >
                </template>
                <template v-slot:item.ottstring="{ item }">
                    <v-icon v-if="item.ottstring === false" color="red">
                        mdi-close
                    </v-icon>
                    <v-icon v-else color="green">
                        mdi-check
                    </v-icon>
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
                                </v-col>

                                <v-col cols="12" sm="12" md="6">
                                    <v-autocomplete
                                        v-model="port"
                                        :items="ports"
                                        label="Port"
                                        hide-no-data
                                        hide-selected
                                        item-text="port_desc"
                                        item-value="id"
                                        @change="loadPortInfo()"
                                    >
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        v-model="ctypes_mobile"
                                        :items="ctypesArr"
                                        label="Ctype pro Telefony"
                                        hide-no-data
                                        hide-selected
                                        item-text="ctype_id"
                                        item-value="id"
                                        multiple
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        v-model="ctypes_stb"
                                        :items="ctypesArr"
                                        label="Ctype pro STB"
                                        hide-no-data
                                        hide-selected
                                        item-text="ctype_id"
                                        item-value="id"
                                        multiple
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        v-model="ctypes_stb_h265"
                                        :items="ctypesArr"
                                        label="Ctype pro STB H265"
                                        hide-no-data
                                        hide-selected
                                        item-text="ctype_id"
                                        item-value="id"
                                        multiple
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        v-model="ctypes_samsung_tv"
                                        :items="ctypesArr"
                                        label="Ctype pro Samsung Tizen"
                                        hide-no-data
                                        hide-selected
                                        item-text="ctype_id"
                                        item-value="id"
                                        multiple
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        v-model="ctypes_android_tv"
                                        :items="ctypesArr"
                                        label="Ctype pro Android TV"
                                        hide-no-data
                                        hide-selected
                                        item-text="ctype_id"
                                        item-value="id"
                                        multiple
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        v-model="ctypes_pc"
                                        :items="ctypesArr"
                                        label="Ctype pro PC"
                                        hide-no-data
                                        hide-selected
                                        item-text="ctype_id"
                                        item-value="id"
                                        multiple
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-autocomplete
                                        v-model="ctypes_screenshoter"
                                        :items="ctypesArr"
                                        label="Ctype pro screenshoter"
                                        hide-no-data
                                        hide-selected
                                        item-text="ctype_id"
                                        item-value="id"
                                        multiple
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" sm="12" md="12">
                                    <v-checkbox
                                        v-model="ottstring"
                                        label="Přidat ott do URL"
                                    ></v-checkbox>
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
            ctypesArr: [],
            ctypes_mobile: [],
            ctypes_stb: [],
            ctypes_stb_h265: [],
            ctypes_screenshoter: [],
            ctypes_samsung_tv: [],
            ctypes_android_tv: [],
            ctypes_pc: [],
            ottstring: false,
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
                { text: "Public IP", value: "streamer_ip" },
                { text: "Port", value: "port_nuber" },
                { text: "Výstup", value: "port_output" },
                { text: "Ctype Mobile", value: "ctypes_mobile" },
                { text: "Ctype STB", value: "ctypes_stb" },
                { text: "Ctype STB H265", value: "ctypes_stb_h265" },
                { text: "Ctype Samsung", value: "ctypes_samsung_tv" },
                { text: "Ctype Android", value: "ctypes_android_tv" },
                { text: "Ctype PC", value: "ctypes_pc" },
                { text: "Ctype Screenshoter", value: "ctypes_screenshoter" },
                { text: "OTT", value: "ottstring" },
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

            axios.get("ctype").then(response => {
                this.ctypesArr = response.data;
            });

            this.newBound = true;
        },

        async loadStreamerInfo() {
            await axios
                .get("streamer/streamer/" + this.streamer)
                .then(response => {
                    this.streamerInfo = response.data;
                });
        },
        async loadPortInfo() {
            await axios.get("stream/port/" + this.port).then(response => {
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
            this.ctypes_mobile = [];
            this.ctypes_stb = [];
            this.ctypes_stb_h265 = [];
            this.ctypes_screenshoter = [];
            this.ctypes_samsung_tv = [];
            this.ctypes_android_tv = [];
            this.ctypes_pc = [];
            this.ottstring = false;
        },

        async saveNewBound() {
            await axios
                .post("streamer/port", {
                    portId: this.port,
                    streamerId: this.streamer,
                    ctypes_mobile: this.ctypes_mobile,
                    ctypes_stb: this.ctypes_stb,
                    ctypes_stb_h265: this.ctypes_stb_h265,
                    ctypes_screenshoter: this.ctypes_screenshoter,
                    ctypes_samsung_tv: this.ctypes_samsung_tv,
                    ctypes_android_tv: this.ctypes_android_tv,
                    ctypes_pc: this.ctypes_pc,
                    ottstring: this.ottstring
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.getBoundary();
                    this.close();
                });
        },
        async remove(id) {
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

        async generateNewOutputs() {
            this.loading = true;
            await axios.post("stream/port/generate").then(response => {
                this.$store.state.alerts = response.data.alert;
                this.loading = false;
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
