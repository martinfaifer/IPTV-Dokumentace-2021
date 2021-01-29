<template>
    <v-main>
        <v-card
            class="mr-10"
            flat
            color="#F5F5F7"
            v-if="deviceInformations != null"
            @contextmenu="
                show(
                    $event,
                    deviceInformations.name,
                    deviceInformations.ip,
                    deviceInformations.login_user,
                    deviceInformations.login_password,
                    deviceInformations.category,
                    deviceInformations.vendor
                )
            "
        >
            <v-card-subtitle>
                <strong>
                    Informace o zařízení
                </strong>
            </v-card-subtitle>

            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row>
                        <span class="ml-6" v-if="deviceInformations.ip != null">
                            <strong>IP: </strong>
                            <a
                                target="_blank"
                                :href="'http://' + deviceInformations.ip"
                            >
                                {{ deviceInformations.ip }}
                            </a>
                        </span>
                        <span
                            class="ml-6"
                            v-if="deviceInformations.login_user != null"
                        >
                            <strong>Přístup: </strong>
                            {{ deviceInformations.login_user }} /
                            {{ deviceInformations.login_password }}
                        </span>
                        <span class="ml-6">
                            <strong>Kategorie zařízení:</strong>
                            {{ deviceInformations.category }}
                        </span>
                        <span class="ml-6">
                            <strong>Výrobce zařízení:</strong>
                            {{ deviceInformations.vendor }}
                        </span>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>

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
                <v-list-item @click="openEditWindowForDevice()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- DIALOG MENU -->

        <v-row justify="center">
            <v-dialog v-model="editDeviceData" persistent max-width="800">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace </span>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <span class="ml-6">
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        label="Název zařízení"
                                        v-model="name"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        label="IP"
                                        v-model="ip"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        label="Uživatel"
                                        v-model="login_user"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        label="Heslo"
                                        v-model="login_password"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-combobox
                                        dense
                                        label="Kategorie"
                                        v-model="category"
                                        :items="categories"
                                        item-text="name"
                                        item-value="name"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>

                                <v-col cols="12">
                                    <v-combobox
                                        dense
                                        label="Výrobce"
                                        v-model="vendor"
                                        :items="vendors"
                                        item-text="vendor"
                                        item-value="vendor"
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
                            @click="editDeviceData = false"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveDeviceInfo()"
                        >
                            Uložit
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
            alerts: [],
            deviceInformations: null,
            editDeviceData: false,
            showMenu: false,
            x: 0,
            y: 0,
            name,
            ip: "",
            login_user: "",
            login_password: "",
            category: "",
            vendor: "",
            categories: [],
            vendors: []
        };
    },

    created() {
        this.loadDeviceInformation();
    },
    methods: {
        show(e, name, ip, login_user, login_password, category, vendor) {
            this.name = name;
            this.ip = ip;
            this.login_user = login_user;
            this.login_password = login_password;
            this.category = category;
            this.vendor = vendor;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        loadDeviceInformation() {
            axios
                .post("device/info_sum", {
                    deviceId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.deviceInformations = response.data.data;
                    } else {
                        this.deviceInformations = null;
                    }
                });
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
        openEditWindowForDevice() {
            this.loadCategories();
            this.loadVendors();
            this.editDeviceData = true;
        },

        saveDeviceInfo() {
            axios
                .post("device/edit", {
                    deviceId: this.$route.params.id,
                    name: this.name,
                    ip: this.ip,
                    login_user: this.login_user,
                    login_password: this.login_password,
                    category: this.category,
                    vendor: this.vendor
                })
                .then(response => {
                    this.$store.state.alerts = response.data;
                    this.editDeviceData = false;
                    this.loadDeviceInformation();
                    this.name = "";
                    this.ip = "";
                    this.login_user = "";
                    this.login_password = "";
                    this.category = "";
                    this.vendor = "";
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadDeviceInformation();
        }
    }
};
</script>
