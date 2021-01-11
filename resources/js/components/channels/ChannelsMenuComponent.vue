<template>
    <v-main>
        <v-list dense nav class="ml-12" color="#F5F5F7">
            <v-list-item
                class="pl-3"
                link
                v-for="channel in channels"
                :key="channel.id"
                :to="'/channel/' + channel.id"
                @contextmenu="show($event, channel.id)"
            >
                <v-list-item-title> {{ channel.nazev }}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-menu
            dense
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <v-list dense>
                <v-list-item @click="openDialogEditCurrentChannel">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat nový kanál
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat kanál
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- konec menu -->

        <!-- edit dialog -->

        <template>
            <v-row justify="center">
                <v-dialog v-model="editDialog" persistent max-width="1000px">
                    <v-card>
                        <v-card-title>
                            <span class="headline"
                                >Editace {{ editChannel.name }}</span
                            >
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <!-- menu na priklik mezi multicastem, H264 a H265 -->
                                <v-tabs centered v-model="channelTabForEdit">
                                    <v-tabs-slider></v-tabs-slider>
                                    <v-tab href="#tab-1">Multicast</v-tab>
                                    <v-tab href="#tab-2">H264</v-tab>
                                    <v-tab href="#tab-3">H265</v-tab>
                                    <!-- konec menu -->

                                    <v-tab-item
                                        v-model="channelTabForEdit"
                                        class="mt-2"
                                    >
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field
                                                    label="Název kanálu*"
                                                    v-model="editChannel.name"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <!-- zdroj -->
                                            <v-col cols="12" sm="6" md="4">
                                                <v-combobox
                                                    v-model="
                                                        editChannel.multicastZdroj
                                                    "
                                                    :items="
                                                        editMulticastSources
                                                    "
                                                    item-text="zdroj"
                                                    item-value="id"
                                                    label="Zdroj multicastu*"
                                                    hint="Vyhledejte zdroj příjmu"
                                                    clearable
                                                    required
                                                ></v-combobox>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field
                                                    label="Zdrojová multicastová adresa*"
                                                    v-model="
                                                        editChannel.multicast_ip
                                                    "
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field
                                                    label="Multicastová adresa k STB*"
                                                    v-model="editChannel.stb_ip"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <!-- konec zdroje -->
                                            <!-- defince zalozniho zdroje -->
                                            <v-col cols="12" sm="6" md="4">
                                                <v-combobox
                                                    v-model="
                                                        editChannel.backup_multicastZdroj
                                                    "
                                                    :items="
                                                        editMulticastSources
                                                    "
                                                    item-text="zdroj"
                                                    item-value="id"
                                                    label="Zdroj záložního multicastu"
                                                    hint="Vyhledejte založní zdroj příjmu"
                                                    clearable
                                                    required
                                                ></v-combobox>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field
                                                    label="Zdrojová záložní multicastová adresa"
                                                    v-model="
                                                        editChannel.backup_multicast_ip
                                                    "
                                                ></v-text-field>
                                            </v-col>
                                            <!-- konec zalozniho zdroje -->
                                            <!-- multiplexor -->
                                            <v-col cols="12">
                                                <v-combobox
                                                    v-model="
                                                        editChannel.multiplexor
                                                    "
                                                    :items="editMultiplexors"
                                                    item-text="name"
                                                    item-value="id"
                                                    label="Multiplexor"
                                                    hint="Vyhledejte multiplexor"
                                                    clearable
                                                    required
                                                ></v-combobox>
                                            </v-col>
                                            <!-- konec multiplexoru -->
                                            <!-- prijem -->
                                            <v-col cols="12" sm="6">
                                                <v-combobox
                                                    @change="
                                                        GetMoreInformationAboutThisDevice(
                                                            editChannel.prijem
                                                        )
                                                    "
                                                    v-model="editChannel.prijem"
                                                    :items="editPrijem"
                                                    item-text="name"
                                                    item-value="id"
                                                    label="Příjem*"
                                                    hint="Vyberte přijímač"
                                                    clearable
                                                ></v-combobox>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                v-if="
                                                    deviceInformation != null &&
                                                        deviceInformation.outputInterfaces !=
                                                            null
                                                "
                                            >
                                                <v-combobox
                                                    v-model="
                                                        editChannel.deviceInterfaceBelongsToChannel
                                                    "
                                                    :items="
                                                        deviceInformation.outputInterfaces
                                                    "
                                                    item-text="interface"
                                                    item-value="id"
                                                    label="Vyberte interface / interfacy, kde se kanál nalézá"
                                                    hint="Vyberte interface / interfacy, kde se kanál nalézá"
                                                    clearable
                                                    multiple
                                                ></v-combobox>
                                            </v-col>

                                            <!-- knec prijmu -->
                                            <!-- backup -->
                                            <v-col cols="12" sm="6">
                                                <v-combobox
                                                    v-model="
                                                        editChannel.backup_prijem
                                                    "
                                                    :items="editPrijem"
                                                    item-text="name"
                                                    item-value="id"
                                                    label="Záložní příjem"
                                                    hint="Vyberte záložní přijímač"
                                                    clearable
                                                ></v-combobox>
                                            </v-col>

                                            <v-col
                                                cols="12"
                                                sm="6"
                                                v-if="
                                                    backupdeviceInformation !=
                                                        null &&
                                                        backupdeviceInformation.outputInterfaces !=
                                                            null
                                                "
                                            >
                                                <v-combobox
                                                    v-model="
                                                        editChannel.backupdeviceInterface
                                                    "
                                                    :items="
                                                        backupdeviceInformation.outputInterfaces
                                                    "
                                                    item-text="interface"
                                                    item-value="id"
                                                    label="Vyberte interface / interfacy, kde se kanál nalézá"
                                                    hint="Vyberte interface / interfacy, kde se kanál nalézá"
                                                    clearable
                                                    multiple
                                                ></v-combobox>
                                            </v-col>

                                            <!-- konec backupu -->
                                            <v-col cols="12">
                                                <v-combobox
                                                    v-model="iptv_package"
                                                    :items="packages"
                                                    item-text="main_package"
                                                    item-value="id"
                                                    label="Vyberte IPTV balíček"
                                                    hint="Přiřazení kanálu k balíčku"
                                                    required
                                                    multiple
                                                    clearable
                                                ></v-combobox>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-checkbox
                                                    label="Založit do dohledu"
                                                    color="info"
                                                    hide-details
                                                ></v-checkbox>
                                            </v-col>
                                        </v-row>
                                    </v-tab-item>
                                </v-tabs>
                            </v-container>
                            <small>pole s * jsou nutná k vyplnění</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="editDialog = false"
                            >
                                Zavřít
                            </v-btn>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="editDialog = false"
                            >
                                Uložit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
        <!-- konec edit dialogu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            channelTabForEdit: null,
            channels: null,
            channelId: null,
            showMenu: false,
            x: 0,
            y: 0,
            editDialog: false,
            editChannel: [],
            packages: [],
            iptv_package: "",
            editPrijem: [],
            editMultiplexors: [],
            editMulticastSources: [],
            deviceInformation: null,
            backupdeviceInformation: null
        };
    },

    created() {
        this.loadchannels();
    },
    methods: {
        loadchannels() {
            axios.get("channels").then(response => {
                this.channels = response.data;
            });
        },
        show(e, channelId) {
            this.channelId = channelId;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        openDialogEditCurrentChannel() {
            axios
                .post("channel", {
                    channelId: this.channelId
                })
                .then(response => {
                    this.editChannel = response.data;
                    this.getIptvPackages();
                    this.getPrijemDevices();
                    this.getMultiplexors();
                    this.getMulticastSources();
                    this.GetMoreInformationAboutThisDevice(
                        response.data.prijemId
                    );
                    this.editDialog = true;
                });
        },
        getIptvPackages() {
            axios.get("packages").then(response => {
                this.packages = response.data;
            });
        },
        getPrijemDevices() {
            axios.get("devices/withoutMultiplexor").then(response => {
                this.editPrijem = response.data;
            });
        },
        getMultiplexors() {
            axios.get("devices/multiplexors").then(response => {
                this.editMultiplexors = response.data;
            });
        },
        getMulticastSources() {
            axios.get("sources").then(response => {
                this.editMulticastSources = response.data;
            });
        },
        // fn pro vyhledání informací o zdroji
        // napríklad -> pokud bude zdroj poIp nebudou se nabízet zadne dalsi informace o zařízení
        // pokud bude napriklad zdroj Blankom zobrazí se informace o umístení kanalu
        GetMoreInformationAboutThisDevice(data) {
            axios
                .post("device/info", {
                    deviceId: data.id
                })
                .then(response => {
                    this.deviceInformation = response.data;
                });
            // console.log(data.id);
        }
    }
};
</script>
