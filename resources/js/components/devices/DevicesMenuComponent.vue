<template>
    <v-main>
        <v-list dense nav>
            <v-list-group
                v-for="device in devices"
                :key="device.category"
                no-action
                sub-group
                :value="false"
            >
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon small>{{ device.category_icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title @contextmenu="showCreateMenu($event)">{{
                        device.category
                    }}</v-list-item-title>
                </template>

                <v-list-item
                    v-for="subDevice in device.devices"
                    :key="subDevice.id"
                    link
                    :to="'/device/' + subDevice.id"
                    @contextmenu="show($event, subDevice.id)"
                >
                    <v-list-item-icon>
                        <v-icon small> {{ device.category_icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        {{ subDevice.name }}
                    </v-list-item-title>
                </v-list-item>
            </v-list-group>
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

        <v-menu
            dense
            v-model="showMenuCreateMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <v-list dense>
                <v-list-item @click="createDeviceDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat nové zařízení
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
                        <span class="headline">Editace zařízení</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        label="Název zařízení*"
                                        v-model="editDeviceData.name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editDeviceData.ip"
                                        label="IP"
                                    ></v-text-field>
                                </v-col>

                                 <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="editDeviceData.controller_ip"
                                        label="IP kontroleru pokud zařízení má"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        label="Uživatelské jméno"
                                        hint="slouží pro přístup do zařízení"
                                        v-model="editDeviceData.login_user"
                                        persistent-hint
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
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
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        label="Název zařízení*"
                                        v-model="deviceName"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="deviceIp"
                                        label="IP"
                                    ></v-text-field>
                                </v-col>
                                
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        v-model="controller_ip"
                                        label="IP kontroleru pokud zařízení má"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        label="Uživatelské jméno"
                                        hint="slouží pro přístup do zařízení"
                                        v-model="deviceUser"
                                        persistent-hint
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
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
                                <v-col
                                    cols="12"
                                    v-if="
                                        vendor.vendor === 'nVidia' &&
                                            category.name === 'Transcoder'
                                    "
                                >
                                    <v-checkbox
                                        v-model="addToTranscoderController"
                                        label="Přidat zařízení do kontroleru"
                                    ></v-checkbox>
                                </v-col>

                                <v-col cols="12" v-if="addToTranscoderController === true">
                                    <v-text-field
                                        label="IP transcoderu"
                                        v-model="transcoderIp"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>položky označeny * jsou povinné</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close()">
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
            addToTranscoderController: false,
            editDeviceData: null,
            editDeviceDialog: false,
            interfaces: null,
            transcoderIp: null,
            allInterfaces: [],
            categories: [],
            vendors: [],
            deviceDialog: false,
            devices: null,
            deviceId: null,
            showMenu: false,
            showMenuCreateMenu: false,
            deviceName: "",
            deviceUser: "",
            category: "",
            vendor: "",
            devicePassword: "",
            deviceIp: "",
            controller_ip: "",
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadDevices();
    },
    methods: {
        removeDeviceFromSystem() {
            axios
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
        openEditDeviceDialog() {
            axios
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

        saveEditDialog() {
            axios
                .post("device/baseEdit", {
                    deviceId: this.deviceId,
                    name: this.editDeviceData.name,
                    ip: this.editDeviceData.ip,
                    controller_ip: this.editDeviceData.controller_ip,
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
        loadAllInterfaces() {
            axios.get("device/allInterfaces").then(response => {
                this.allInterfaces = response.data;
            });
        },

        createDeviceDialog() {
            this.deviceDialog = true;
            this.loadCategories();
            this.loadVendors();
            this.loadAllInterfaces();
        },

        loadCategories() {
            axios.get("device/categories").then(response => {
                if (response.data.status === "success") {
                    this.categories = response.data.data;
                } else {
                    this.categories = null;
                }
            });
        },
        loadVendors() {
            axios.get("vendors").then(response => {
                if (response.data.status === "success") {
                    this.vendors = response.data.data;
                } else {
                    this.vendors = null;
                }
            });
        },

        loadDevices() {
            axios.get("device/byCytagories").then(response => {
                this.devices = response.data;
            });
        },
        saveDialog() {
            axios
                .post("device/create", {
                    deviceName: this.deviceName,
                    deviceUser: this.deviceUser,
                    devicePassword: this.devicePassword,
                    vendor: this.vendor,
                    category: this.category,
                    deviceIp: this.deviceIp,
                    controller_ip: this.controller_ip,
                    interfaces: this.interfaces,
                    addToTranscoderController: this.addToTranscoderController,
                    transcoderIp: this.transcoderIp
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.close();

                    if (response.data.status === "success") {
                        this.loadDevices();
                        this.$router.push("/device/" + response.data.deviceId);
                    }
                });
        },
        close() {

            this.deviceName = "";
            this.deviceUser = "";
            this.devicePassword = "";
            this.vendor = "";
            this.category = "";
            this.deviceIp = "";
            this.interfaces = null;
            this.addToTranscoderController = false;
            this.transcoderIp = null;
            this.deviceDialog = false;
        },
        show(e, deviceId) {
            this.deviceId = deviceId;
            e.preventDefault();
            this.showMenu = false;
            this.showMenuCreateMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        showCreateMenu(e) {
            e.preventDefault();
            this.showMenu = false;
            this.showMenuCreateMenu = true;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenuCreateMenu = true;
            });
        }
    }
};
</script>
