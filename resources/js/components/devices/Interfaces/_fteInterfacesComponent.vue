<template>
    <v-main>
        <div v-if="interfaces != null" class="mr-10 mr-15">
            <v-row>
                <!-- FTE -->
                <v-col>
                    <v-card
                        flat
                        color="#F5F5F7"
                        @contextmenu="
                            show(
                                $event,
                                interfaces.dvb,
                                interfaces.sat,
                                interfaces.freq,
                                interfaces.polarizace,
                                interfaces.symbolRate,
                                interfaces.fec,
                                interfaces.CIA,
                                interfaces.CIB
                            )
                        "
                    >
                        <v-card-subtitle>
                            <strong>
                                Nastavení satelitu
                            </strong>
                        </v-card-subtitle>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <span class="ml-6">
                                        <strong>DVB: </strong>
                                        {{ interfaces.dvb }}
                                    </span>

                                    <span class="ml-6">
                                        <strong>Satelit: </strong>
                                        {{ interfaces.sat }}
                                    </span>

                                    <span class="ml-6">
                                        <strong>Frekvence: </strong>
                                        {{ interfaces.freq }}
                                    </span>

                                    <span class="ml-6">
                                        <strong>Polarizace: </strong>
                                        {{ interfaces.polarizace }}
                                    </span>

                                    <span class="ml-6">
                                        <strong>Symbol rate: </strong>
                                        {{ interfaces.symbolRate }}
                                    </span>

                                    <span class="ml-6">
                                        <strong>FEC: </strong>
                                        {{ interfaces.fec }}
                                    </span>
                                </v-row>

                                <v-row class="mt-6">
                                    <span class="ml-6">
                                        <strong>CI A: </strong>
                                        {{ interfaces.CIA }}
                                    </span>
                                </v-row>

                                <v-row class="mt-6">
                                    <span class="ml-6">
                                        <strong>CI B: </strong>
                                        {{ interfaces.CIB }}
                                    </span>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

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
                    <v-list-item @click="openEditWindowForInterface()">
                        <v-list-item-icon>
                            <v-icon x-small>mdi-pencil</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Upravit
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <!-- dialog pro ediatci interafacu -->

            <template>
                <v-row justify="center">
                    <v-dialog
                        v-model="editInterfaceSablonaData"
                        persistent
                        max-width="800"
                    >
                        <v-card>
                            <v-card-title>
                                <span class="headline">Editace </span>
                            </v-card-title>
                            <v-card-text>
                                <v-container fluid>
                                    <span class="ml-6">
                                        <v-col cols="12">
                                            <v-combobox
                                                dense
                                                label="DVB"
                                                v-model="dvb"
                                                :items="dvbs"
                                                item-text="dvb"
                                                item-value="dvb"
                                                required
                                                clearable
                                            ></v-combobox>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-combobox
                                                dense
                                                label="Satelit"
                                                :items="satelits"
                                                item-text="satelit"
                                                item-value="satelit"
                                                v-model="sat"
                                                required
                                                clearable
                                            ></v-combobox>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field
                                                dense
                                                label="Frekvence v MHz"
                                                v-model="freq"
                                                type="number"
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-combobox
                                                dense
                                                label="Polarizace"
                                                :items="polarizaces"
                                                item-text="polarizace"
                                                item-value="polarizace"
                                                v-model="polarizace"
                                                required
                                                clearable
                                            ></v-combobox>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field
                                                dense
                                                label="Symbol rate"
                                                v-model="symbolrate"
                                                type="number"
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field
                                                dense
                                                label="FEC"
                                                v-model="fec"
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-combobox
                                                dense
                                                label="CIA"
                                                :items="cards"
                                                item-text="card_number"
                                                item-value="card_number"
                                                v-model="cia"
                                                required
                                                clearable
                                            ></v-combobox>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-combobox
                                                dense
                                                label="CIB"
                                                :items="cards"
                                                item-text="card_number"
                                                item-value="card_number"
                                                v-model="cib"
                                                required
                                                clearable
                                            ></v-combobox>
                                        </v-col>
                                    </span>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="editInterfaceSablonaData = false"
                                >
                                    Zavřít
                                </v-btn>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="saveInterface()"
                                >
                                    Uložit
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </template>
        </div>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            cards: [],
            polarizaces: [],
            satelits: [],
            dvbs: [],
            sat: "",
            dvb: "",
            freq: "",
            polarizace: "",
            interfaces: "",
            symbolrate: "",
            fec: "",
            cia: "",
            cib: "",
            editInterfaceSablonaData: false,
            showMenu: false,
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadDeviceTemplate();
    },

    methods: {
        show(e, dvb, sat, freq, polarizace, symbolrate, fec, cia, cib) {
            this.sat = sat;
            this.dvb = dvb;
            this.freq = freq;
            this.polarizace = polarizace;
            this.symbolrate = symbolrate;
            this.fec = fec;
            this.cia = cia;
            this.cib = cib;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },

        loadCards() {
            axios.get("cards").then(response => {
                this.cards = response.data;
            });
        },

        loadDeviceTemplate() {
            axios
                .post("device/template", {
                    deviceId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.interfaces = response.data.inputs[0];
                    } else {
                        this.interfaces = null;
                    }
                });
        },

        getSatelits() {
            axios.get("satelits").then(response => {
                if (response.data.status === "success") {
                    this.satelits = response.data.data;
                } else {
                    this.satelits = null;
                }
            });
        },

        getDVBS() {
            axios.get("dvb").then(response => {
                if (response.data.status === "success") {
                    this.dvbs = response.data.data;
                } else {
                    this.dvbs = null;
                }
            });
        },

        getPolarizace() {
            axios.get("polarizace").then(response => {
                this.polarizaces = response.data;
            });
        },

        openEditWindowForInterface() {
            this.getSatelits();
            this.getDVBS();
            this.getPolarizace();
            this.loadCards();
            this.editInterfaceSablonaData = true;
        },

        saveInterface() {
            axios
                .post("device/fte/interface", {
                    deviceId: this.$route.params.id,
                    sat: this.sat,
                    dvb: this.dvb,
                    freq: this.freq,
                    polarizace: this.polarizace,
                    interfaces: this.interfaces,
                    symbolrate: this.symbolrate,
                    fec: this.fec,
                    cia: this.cia,
                    cib: this.cib
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.editInterfaceSablonaData = false;
                    this.loadDeviceTemplate();
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadDeviceTemplate();
        }
    }
};
</script>
