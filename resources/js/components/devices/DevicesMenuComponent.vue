<template>
    <v-main>
        <v-list dense nav class="ml-12" color="#F5F5F7">
            <v-list-item
                class="pl-3"
                link
                v-for="device in devices"
                :key="device.id"
                :to="'/device/' + device.id"
                @contextmenu="show($event, device.id)"
            >
                <v-list-item-title> {{ device.name }}</v-list-item-title>
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
                <v-list-item @click="openEditDeviceDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit zařízení
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="createDeviceDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat nové zařízení
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click="removeDeviceFromSystem()">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat zařízení
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- konec menu -->

        <!-- edit dialog -->

        <v-row justify="center" v-if="editDeviceData != null">
            <v-dialog v-model="editDeviceDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Upravení zařízení</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                        label="Název zařízení*"
                                        v-model="editDeviceData.name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                        v-model="editDeviceData.ip"
                                        label="IP"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                        label="Uživatelské jméno"
                                        hint="slouží pro přístup do zařízení"
                                        v-model="editDeviceData.login_user"
                                        persistent-hint
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                        label="Uživatelské heslo"
                                        hint="slouží pro přístup do zařízení"
                                        persistent-hint
                                        v-model="editDeviceData.login_password"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox
                                        label="Kategorie*"
                                        :items="categories"
                                        v-model="editDeviceData.category"
                                        item-text="name"
                                        item-value="name"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox
                                        v-model="editDeviceData.haveInterface"
                                        :items="allInterfaces"
                                        item-text="interface"
                                        item-value="id"
                                        label="Vyberte interface / interfacy na které se následně bude párovat kanál"
                                        hint="Vyberte interface / interfacy na které se následně bude párovat kanál"
                                        clearable
                                        multiple
                                    ></v-combobox>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox
                                        dense
                                        v-model="editDeviceData.vendor"
                                        label="Výrobce*"
                                        :items="vendors"
                                        item-text="vendor"
                                        item-value="vendor"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>položky označeny * jsou povinné</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="closeEditDialog()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveEditDialog()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <!-- konec edit dialogu -->

        <!-- create dialog -->

        <v-row justify="center">
            <v-dialog v-model="deviceDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Založení zařízení</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                        label="Název zařízení*"
                                        v-model="deviceName"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                        v-model="deviceIp"
                                        label="IP"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                        label="Uživatelské jméno"
                                        hint="slouží pro přístup do zařízení"
                                        v-model="deviceUser"
                                        persistent-hint
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field
                                        label="Uživatelské heslo"
                                        hint="slouží pro přístup do zařízení"
                                        persistent-hint
                                        v-model="devicePassword"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox
                                        label="Kategorie*"
                                        :items="categories"
                                        v-model="category"
                                        item-text="name"
                                        item-value="name"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox
                                        v-model="interfaces"
                                        :items="allInterfaces"
                                        item-text="interface"
                                        item-value="id"
                                        label="Vyberte interface / interfacy na které se následně bude párovat kanál"
                                        hint="Vyberte interface / interfacy na které se následně bude párovat kanál"
                                        clearable
                                        multiple
                                    ></v-combobox>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox
                                        dense
                                        v-model="vendor"
                                        label="Výrobce*"
                                        :items="vendors"
                                        item-text="vendor"
                                        item-value="vendor"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>položky označeny * jsou povinné</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="deviceDialog = false"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveDialog()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- konec create dialogu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            editDeviceData: null,
            editDeviceDialog: false,
            interfaces: null,
            allInterfaces: [],
            categories: [],
            vendors: [],
            deviceDialog: false,
            devices: null,
            deviceId: null,
            showMenu: false,
            deviceName: "",
            deviceUser: "",
            category: "",
            vendor: "",
            devicePassword: "",
            deviceIp: "",
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadDevices();
    },
    methods: {
        async removeDeviceFromSystem() {
            await axios
                .post("device/remove", {
                    deviceId: this.deviceId
                })
                .then(response => {
                    // zobrazení alertu
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        if (this.$router.match("/device/" + this.deviceId)) {
                            this.loadDevices();
                            this.$router.push("/device/").catch(err => {});
                        } else {
                            this.loadDevices();
                        }
                    }
                });
        },
        async openEditDeviceDialog() {
            await axios
                .post("device/getInfoForBaseEdit", {
                    deviceId: this.deviceId
                })
                .then(response => {
                    this.editDeviceData = response.data;
                    this.loadCategories();
                    this.loadVendors();
                    this.loadAllInterfaces();
                    this.editDeviceDialog = true;
                });
        },
        closeEditDialog() {
            this.deviceDialog = false;
            this.editDeviceData = null;
            this.allInterfaces = [];
            this.categories = [];
            this.vendors = [];
        },

        async saveEditDialog() {
            await axios
                .post("device/baseEdit", {
                    deviceId: this.deviceId,
                    name: this.editDeviceData.name,
                    ip: this.editDeviceData.ip,
                    login_password: this.editDeviceData.login_password,
                    login_user: this.editDeviceData.login_user,

                    category: this.editDeviceData.category,
                    vendor: this.editDeviceData.vendor,
                    haveInterface: this.editDeviceData.haveInterface
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;

                    if (response.data.status === "success") {
                        this.deviceDialog = false;
                        this.editDeviceData = null;
                        this.allInterfaces = [];
                        this.categories = [];
                        this.vendors = [];
                        this.loadDevices();
                        this.$router.push("/device/").catch(err => {});
                        this.$router
                            .push("/device/" + response.data.deviceId)
                            .catch(err => {});
                    }
                });
        },
        async loadAllInterfaces() {
            await axios.get("device/allInterfaces").then(response => {
                this.allInterfaces = response.data;
            });
        },

        createDeviceDialog() {
            this.deviceDialog = true;
            this.loadCategories();
            this.loadVendors();
            this.loadAllInterfaces();
        },

        async loadCategories() {
            await axios.get("device/categories").then(response => {
                if (response.data.status === "success") {
                    this.categories = response.data.data;
                } else {
                    this.categories = null;
                }
            });
        },
        async loadVendors() {
            await axios.get("vendors").then(response => {
                if (response.data.status === "success") {
                    this.vendors = response.data.data;
                } else {
                    this.vendors = null;
                }
            });
        },

        async loadDevices() {
            await axios.get("devices").then(response => {
                this.devices = response.data;
            });
        },
        async saveDialog() {
            await axios
                .post("device/create", {
                    deviceName: this.deviceName,
                    deviceUser: this.deviceUser,
                    devicePassword: this.devicePassword,
                    vendor: this.vendor,
                    category: this.category,
                    deviceIp: this.deviceIp,
                    interfaces: this.interfaces
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.deviceDialog = false;

                    if (response.data.status === "success") {
                        this.loadDevices();
                        this.$router.push("/device/" + response.data.deviceId);
                    }
                });
        },
        show(e, deviceId) {
            this.deviceId = deviceId;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        }
    }
};
</script>
