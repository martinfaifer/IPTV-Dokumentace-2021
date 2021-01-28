<template>
    <v-main>
        <div v-if="interfaces != null">
            <v-row>
                <!-- PRVNÍ INPUT RF1 class="mr-10" -->
                <v-col>
                    <v-card
                        flat
                        color="#F5F5F7"
                        width="350"
                        @contextmenu="
                            show(
                                $event,
                                1,
                                interfaces.rf1_dvb,
                                interfaces.rf1_sat,
                                interfaces.rf1_freq,
                                interfaces.rf1_pol,
                                interfaces.rf1_symbolRate,
                                interfaces.rf1_fec,
                                interfaces.rf1_lnb,
                                interfaces.rf1_lnb22k,
                                interfaces.CI1
                            )
                        "
                    >
                        <v-card-subtitle>
                            <strong>
                                RF 1
                            </strong>
                        </v-card-subtitle>

                        <v-card-text class="subtitle-1">
                            <v-container>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <strong>
                                                DVB:
                                            </strong>
                                            {{
                                                interfaces.rf1_dvb
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <strong>
                                                Satelit:
                                            </strong>
                                            {{
                                                interfaces.rf1_sat
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <strong>
                                                Frekvence:
                                            </strong>
                                            {{
                                                interfaces.rf1_freq
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Polarizace:</strong>
                                            {{
                                                interfaces.rf1_pol
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Symbol rate:</strong>
                                            {{
                                                interfaces.rf1_symbolRate
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>FEC:</strong>
                                            {{
                                                interfaces.rf1_fec
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>LNB:</strong>
                                            {{
                                                interfaces.rf1_lnb
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>LNB22k:</strong>
                                            {{
                                                interfaces.rf1_lnb22k
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>CI:</strong>
                                            {{
                                                interfaces.CI1
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>

                <!-- DRUHÝ INPUT RF2 -->

                <v-col>
                    <v-card
                        flat
                        color="#F5F5F7"
                        width="350"
                        @contextmenu="
                            show(
                                $event,
                                2,
                                interfaces.rf2_dvb,
                                interfaces.rf2_sat,
                                interfaces.rf2_freq,
                                interfaces.rf2_pol,
                                interfaces.rf2_symbolRate,
                                interfaces.rf2_fec,
                                interfaces.rf2_lnb,
                                interfaces.rf2_lnb22k,
                                interfaces.CI2
                            )
                        "
                    >
                        <v-card-subtitle>
                            <strong>
                                RF 2
                            </strong>
                        </v-card-subtitle>

                        <v-card-text>
                            <v-container>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>DVB:</strong>
                                            {{
                                                interfaces.rf2_dvb
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Satelit:</strong>
                                            {{
                                                interfaces.rf2_sat
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Frekvence:</strong>
                                            {{
                                                interfaces.rf2_freq
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Polarizace:</strong>
                                            {{
                                                interfaces.rf2_pol
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Symbol rate:</strong>
                                            {{
                                                interfaces.rf2_symbolRate
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>FEC:</strong>
                                            {{
                                                interfaces.rf2_fec
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>LNB:</strong>
                                            {{
                                                interfaces.rf2_lnb
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>LNB22k:</strong>
                                            {{
                                                interfaces.rf2_lnb22k
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>CI:</strong>
                                            {{
                                                interfaces.CI2
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>

                <!-- TŘETÍ INPUT RF3 -->

                <v-col>
                    <v-card
                        flat
                        color="#F5F5F7"
                        width="350"
                        @contextmenu="
                            show(
                                $event,
                                3,
                                interfaces.rf3_dvb,
                                interfaces.rf3_sat,
                                interfaces.rf3_freq,
                                interfaces.rf3_pol,
                                interfaces.rf3_symbolRate,
                                interfaces.rf3_fec,
                                interfaces.rf3_lnb,
                                interfaces.rf3_lnb22k,
                                interfaces.CI3
                            )
                        "
                    >
                        <v-card-subtitle>
                            <strong>
                                RF 3
                            </strong>
                        </v-card-subtitle>

                        <v-card-text>
                            <v-container>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>DVB:</strong>
                                            {{
                                                interfaces.rf3_dvb
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Satelit:</strong>
                                            {{
                                                interfaces.rf3_sat
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Frekvence:</strong>
                                            {{
                                                interfaces.rf3_freq
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Polarizace:</strong>
                                            {{
                                                interfaces.rf3_pol
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Symbol rate:</strong>
                                            {{
                                                interfaces.rf3_symbolRate
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>FEC:</strong>
                                            {{
                                                interfaces.rf3_fec
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>LNB:</strong>
                                            {{
                                                interfaces.rf3_lnb
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>LNB22k:</strong>
                                            {{
                                                interfaces.rf3_lnb22k
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>CI:</strong>
                                            {{
                                                interfaces.CI3
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>

                <!-- ČTVRTÝ INPUT RF4 -->

                <v-col>
                    <v-card
                        flat
                        color="#F5F5F7"
                        width="350"
                        @contextmenu="
                            show(
                                $event,
                                4,
                                interfaces.rf4_dvb,
                                interfaces.rf4_sat,
                                interfaces.rf4_freq,
                                interfaces.rf4_pol,
                                interfaces.rf4_symbolRate,
                                interfaces.rf4_fec,
                                interfaces.rf4_lnb,
                                interfaces.rf4_lnb22k,
                                interfaces.CI4
                            )
                        "
                    >
                        <v-card-subtitle>
                            <strong>
                                RF 4
                            </strong>
                        </v-card-subtitle>

                        <v-card-text>
                            <v-container>
                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>DVB:</strong>
                                            {{
                                                interfaces.rf4_dvb
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Satelit:</strong>
                                            {{
                                                interfaces.rf4_sat
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Frekvence:</strong>
                                            {{
                                                interfaces.rf4_freq
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Polarizace:</strong>
                                            {{
                                                interfaces.rf4_pol
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>Symbol rate:</strong>
                                            {{
                                                interfaces.rf4_symbolRate
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>FEC:</strong>
                                            {{
                                                interfaces.rf4_fec
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>LNB:</strong>
                                            {{
                                                interfaces.rf4_lnb
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>LNB22k:</strong>
                                            {{
                                                interfaces.rf4_lnb22k
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item dense>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            ><strong>CI:</strong>
                                            {{
                                                interfaces.CI4
                                            }}</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>
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
                                <span class="headline"
                                    >Editace RF{{ interfaceId }}</span
                                >
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
                                            <v-text-field
                                                dense
                                                label="LNB"
                                                v-model="lnb"
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field
                                                dense
                                                label="LNB 22k"
                                                v-model="lnb22k"
                                                required
                                            ></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-combobox
                                                dense
                                                label="CI"
                                                :items="cards"
                                                item-text="card_number"
                                                item-value="card_number"
                                                v-model="ci"
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
            interfaceId: "",
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
            lnb: "",
            lnb22k: "",
            ci: "",
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
        show(
            e,
            interfaceId,
            dvb,
            sat,
            freq,
            polarizace,
            symbolrate,
            fec,
            lnb,
            lnb22k,
            ci
        ) {
            (this.interfaceId = interfaceId), (this.sat = sat);
            this.dvb = dvb;
            this.freq = freq;
            this.polarizace = polarizace;
            this.symbolrate = symbolrate;
            this.fec = fec;
            this.lnb = lnb;
            this.lnb22k = lnb22k;
            this.ci = ci;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },

         async loadCards() {
            await axios.get("cards").then(response => {
                this.cards = response.data;
            });
        },

        async loadDeviceTemplate() {
            await axios
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

        async getSatelits() {
            await axios.get("satelits").then(response => {
                if (response.data.status === "success") {
                    this.satelits = response.data.data;
                } else {
                    this.satelits = null;
                }
            });
        },

        async getDVBS() {
            await axios.get("dvb").then(response => {
                if (response.data.status === "success") {
                    this.dvbs = response.data.data;
                } else {
                    this.dvbs = null;
                }
            });
        },

        async getPolarizace() {
            await axios.get("polarizace").then(response => {
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
        async saveInterface() {
            await axios
                .post("device/blankom/interface", {
                    deviceId: this.$route.params.id,
                    interfaceId: this.interfaceId,
                    sat: this.sat,
                    dvb: this.dvb,
                    freq: this.freq,
                    polarizace: this.polarizace,
                    symbolrate: this.symbolrate,
                    fec: this.fec,
                    lnb: this.lnb,
                    lnb22k: this.lnb22k,
                    ci: this.ci
                })
                .then(response => {
                    this.$store.state.alerts = response.data;
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
