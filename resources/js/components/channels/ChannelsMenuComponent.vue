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
                <v-list-item @click="editChannelNameDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Změnit název kanálu
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="addMultiplexer()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat Multiplexer
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="addPrijem()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat příjem
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="addBackupPrijem()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat záložní příjem
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="addEvent()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-calendar</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat událost
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click="createNewChannelDialog()">
                    <v-list-item-icon>
                        <v-icon color="green" x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Založit nový kanál
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="removeChannel()">
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

        <!-- create dialogy -->
        <v-row justify="center">
            <v-dialog
                v-model="createMultiplexerDialog"
                persistent
                max-width="1000px"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline"
                            >Přidání multiplexoru ke kanálu</span
                        >
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-combobox
                                        dense
                                        v-model="multiplexer"
                                        label="Multiplexor"
                                        :items="editMultiplexors"
                                        item-text="name"
                                        item-value="id"
                                        required
                                        clearable
                                    ></v-combobox>
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
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveMultiplexerdata()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog
                v-model="createPrijemDialog"
                persistent
                max-width="1000px"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline"
                            >Přidání přijímače ke kanálu</span
                        >
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-combobox
                                        dense
                                        v-model="prijem"
                                        @change="
                                            GetMoreInformationAboutThisDevice(
                                                prijem
                                            )
                                        "
                                        label="Zařízení na kterých je možné přijímat kanály"
                                        :items="prijems"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    v-if="deviceInformation != null"
                                >
                                    <v-combobox
                                        v-if="
                                            deviceInformation.outputInterfaces !=
                                                null
                                        "
                                        v-model="prijemInterfaces"
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
                        <v-btn
                            color="green darken-1"
                            text
                            @click="savePrijemData()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog
                v-model="createBackupPrijemDialog"
                persistent
                max-width="1000px"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline"
                            >Přidání záložního přijímače ke kanálu</span
                        >
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-combobox
                                        dense
                                        v-model="backup"
                                        @change="
                                            GetMoreInformationAboutThisDevice(
                                                backup
                                            )
                                        "
                                        label="Zařízení na kterých je možné přijímat kanály"
                                        :items="prijems"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    v-if="deviceInformation != null"
                                >
                                    <v-combobox
                                        v-if="
                                            deviceInformation.outputInterfaces !=
                                                null
                                        "
                                        v-model="prijemInterfaces"
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
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveBackupPrijemData()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="createEventDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Přidání nové události</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        label="Den začátku události"
                                        type="date"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        label="Čas začátku události"
                                        type="time"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        label="Den konce události"
                                        type="date"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field
                                        label="Čas konce události"
                                        type="time"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        label="Popis události"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-switch
                                        v-model="vypadek"
                                        label="Kanál bude mít výpadek"
                                    ></v-switch>
                                </v-col>

                                <v-col cols="12" v-if="vypadek === true">
                                    <v-checkbox
                                        v-model="checkbox_create_to_dohled"
                                        label="
                                            Propsání události do dohledu
                                        "
                                    ></v-checkbox>
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
                        <v-btn color="green darken-1" text @click="saveEvent()">
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editChannelName" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Změna názvu kanálu</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        label="Název kanálu"
                                        v-model="channelName"
                                        required
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
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveChannelName()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- CREATE NEW CHANNEL  DIALOG-->

            <v-dialog v-model="createNewChannel" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Vytvoření nového kanálu</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        label="Název kanálu"
                                        v-model="channelName"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-combobox
                                        dense
                                        v-model="multicastZdroj"
                                        label="Zdroj multicastu"
                                        item-text="zdroj"
                                        item-value="id"
                                        :items="sources"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="multicast_ip"
                                        label="Multicastová IP"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="stb_ip"
                                        label="IP k STB"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-combobox
                                        dense
                                        v-model="backup_multicastZdroj"
                                        label="Záložní zdroj multicastu"
                                        item-text="zdroj"
                                        item-value="id"
                                        :items="sources"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="backup_multicast_ip"
                                        label="Multicastová IP"
                                        required
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
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveNewChannel()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!--  -->
        </v-row>

        <!-- konec create dialogu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            vypadek: false,
            checkbox_create_to_dohled: false,
            editChannelName: false,
            createNewChannel: false,
            createMultiplexerDialog: false,
            createPrijemDialog: false,
            createBackupPrijemDialog: false,
            createEventDialog: false,
            multiplexer: null,
            multiplexers: [],
            backup: null,
            prijem: "",
            prijems: [],
            event: null,
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
            backupdeviceInformation: null,
            deviceInformation: null,
            prijemInterfaces: null,
            backup_multicast_ip: null,
            backup_multicastZdroj: null,
            stb_ip: null,
            multicast_ip: null,
            multicastZdroj: null,
            sources: [],
            channelName: null
        };
    },

    created() {
        this.loadchannels();
    },
    methods: {
        saveChannelName() {
            axios
                .post("channel/name/edit", {
                    channelId: this.channelId,
                    channelName: this.channelName
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.editChannelName = false;
                        this.loadchannels();

                        this.$router.push("/").catch(err => {});
                        this.$router
                            .push("/channel/" + response.data.channelId)
                            .catch(err => {});
                    }
                });
        },
        editChannelNameDialog() {
            axios
                .post("channel/name", {
                    channelId: this.channelId
                })
                .then(response => {
                    this.channelName = response.data;
                    this.editChannelName = true;
                });
        },

        createNewChannelDialog() {
            axios.get("sources").then(response => {
                this.sources = response.data;
                this.createNewChannel = true;
            });
        },

        saveNewChannel() {
            axios
                .post("channel/create", {
                    channelName: this.channelName,
                    multicastZdroj: this.multicastZdroj,
                    multicast_ip: this.multicast_ip,
                    stb_ip: this.stb_ip,
                    backup_multicastZdroj: this.backup_multicastZdroj,
                    backup_multicast_ip: this.backup_multicast_ip
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.loadchannels();
                        this.createNewChannel = false;
                        this.channelName = null;
                        this.multicastZdroj = null;
                        this.multicast_ip = null;
                        this.stb_ip = null;
                        this.backup_multicastZdroj = null;
                        this.backup_multicast_ip = null;
                        this.$router
                            .push("/channel/" + response.data.channelId)
                            .catch(err => {});
                    }
                });
        },

        addEvent() {
            this.createEventDialog = true;
        },

        saveEvent() {
            this.createEventDialog = false;
        },
        addMultiplexer() {
            axios
                .post("channel/check", {
                    channelId: this.channelId,
                    param: "multiplexor"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        // je mozné pridat multiplerox
                        this.createMultiplexerDialog = true;
                        this.getMultiplexors();
                    } else {
                        this.$store.state.alerts = response.data.alert;
                    }
                });
        },

        GetMoreInformationAboutThisDevice(data) {
            axios
                .post("device/info", {
                    deviceName: data
                })
                .then(response => {
                    this.deviceInformation = response.data;
                });
        },

        addBackupPrijem() {
            axios
                .post("channel/check", {
                    channelId: this.channelId,
                    param: "backup"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.createBackupPrijemDialog = true;
                        this.getPrijemDevices();
                    } else {
                        this.$store.state.alerts = response.data.alert;
                    }
                });
        },

        addPrijem() {
            axios
                .post("channel/check", {
                    channelId: this.channelId,
                    param: "prijem"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        // je mozné pridat multiplerox
                        this.createPrijemDialog = true;
                        this.getPrijemDevices();
                    } else {
                        this.$store.state.alerts = response.data.alert;
                    }
                });
        },
        saveBackupPrijemData() {
            axios
                .post("device/backup/edit", {
                    channelId: this.channelId,
                    deviceName: this.backup,
                    channelToInterface: this.prijemInterfaces,
                    checkIfDeviceHasInterface: this.deviceInformation
                        .outputInterfaces
                })
                .then(response => {
                    this.backup = null;
                    this.channelToInterface = null;
                    this.$store.state.alerts = response.data.alert;
                    this.createBackupPrijemDialog = false;
                    if (response.data.status === "success") {
                        this.$router.push("/").catch(err => {});
                        this.$router
                            .push("/channel/" + response.data.channelId)
                            .catch(err => {});
                    }
                });
        },
        savePrijemData() {
            axios
                .post("device/prijem/edit", {
                    channelId: this.channelId,
                    deviceName: this.prijem,
                    channelToInterface: this.prijemInterfaces,
                    checkIfDeviceHasInterface: this.deviceInformation
                        .outputInterfaces
                })
                .then(response => {
                    this.prijem = null;
                    this.channelToInterface = null;
                    this.$store.state.alerts = response.data.alert;
                    this.createPrijemDialog = false;
                    if (response.data.status === "success") {
                        this.$router.push("/").catch(err => {});
                        this.$router
                            .push("/channel/" + response.data.channelId)
                            .catch(err => {});
                    }
                });
        },

        saveMultiplexerdata() {
            axios
                .post("channel/multiplexer/edit", {
                    channelId: this.channelId,
                    deviceName: this.multiplexer.name
                })
                .then(response => {
                    this.multiplexer = null;
                    this.$store.state.alerts = response.data.alert;
                    this.createMultiplexerDialog = false;
                    if (response.data.status === "success") {
                        this.$router.push("/").catch(err => {});
                        this.$router
                            .push("/channel/" + response.data.channelId)
                            .catch(err => {});
                    }
                });
        },

        closeDialog() {
            this.editChannelName = false;
            this.createNewChannel = false;
            this.createMultiplexerDialog = false;
            this.createPrijemDialog = false;
            this.createBackupPrijemDialog = false;
            this.createEventDialog = false;
            this.multiplexer = null;
            this.multiplexers = [];
            this.prijem = null;
            this.prijems = [];
            this.backup = null;
            this.event = null;
        },

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
            axios.get("device/prijem").then(response => {
                this.prijems = response.data;
            });
        },
        getMultiplexors() {
            axios.get("devices/multiplexors").then(response => {
                this.editMultiplexors = response.data;
            });
        },
        getMulticastSources() {
            axios.get("sources").then(response => {
                this.deviceInformation = response.data;
            });
        },

        removeChannel() {
            axios
                .post("channel/delete", {
                    channelId: this.channelId
                })
                .then(response => {
                        this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.loadchannels();
                        this.$router.push("/").catch(err => {});
                    }
                });
        }
    }
};
</script>
