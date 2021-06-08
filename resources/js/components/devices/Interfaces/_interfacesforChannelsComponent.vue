<template>
    <v-main>
        <v-card
            class="pr-5 pt-1"
            flat
            color="white"
            v-if="deviceInterfaces != null"
            @contextmenu="show($event)"
        >
            <v-card-subtitle>
                <strong>
                    Porty na které je možné připárovat kanál
                </strong>
            </v-card-subtitle>

            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row>
                        <span
                            class="ml-6"
                            v-for="deviceInterface in deviceInterfaces"
                            :key="deviceInterface.key"
                        >
                            {{ deviceInterface.interface }}
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

                <v-list-item @click="openDeleteDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- DIALOG MENU -->

        <v-row justify="center">
            <v-dialog v-model="editDeviceData" persistent max-width="800">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace Interfaců </span>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <span class="ml-6">
                                <v-col cols="12">
                                    <v-combobox
                                        v-model="deviceInterfaces"
                                        :items="allInterfaces"
                                        item-text="interface"
                                        item-value="id"
                                        label="Vyberte interface / interfacy na které se následně bude párovat kanál"
                                        hint="Vyberte interface / interfacy na které se následně bude párovat kanál"
                                        clearable
                                        multiple
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
                            @click="closeDialog()"
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

            <v-dialog v-model="deleteDeviceData" persistent max-width="800">
                <v-card>
                    <v-card-title>
                        <span class="headline">Odebrání Interfaců </span>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <span class="ml-6">
                                <v-col cols="12">
                                    <h3>
                                        Vážně si přejete odebrat všechny porty
                                        ze zařízení?
                                    </h3>
                                </v-col>
                            </span>
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
                            @click="saveDeleteDeviceInfo()"
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
            allInterfaces: [],
            deviceInterfaces: null,
            editDeviceData: false,
            deleteDeviceData: false,
            showMenu: false,
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadInterfaces();
    },
    methods: {
        loadAllInterfaces() {
            axios.get("device/allInterfaces").then(response => {
                this.allInterfaces = response.data;
            });
        },
        show(e) {
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        loadInterfaces() {
            axios
                .post("device/currentInterfaces", {
                    deviceId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.deviceInterfaces = response.data.data;
                    } else {
                        this.deviceInterfaces = null;
                    }
                });
        },
        openEditWindowForDevice() {
            this.editDeviceData = true;
            this.loadAllInterfaces();
        },

        saveDeviceInfo() {
            axios
                .post("device/interfaces/edit", {
                    deviceId: this.$route.params.id,
                    interfaces: this.deviceInterfaces
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.editDeviceData = false;
                    this.loadInterfaces();
                });
        },
        closeDialog() {
            this.loadInterfaces();
            this.editDeviceData = false;
            this.deleteDeviceData = false;
        },

        openDeleteDialog() {
            this.deleteDeviceData = true;
        },

        saveDeleteDeviceInfo() {
            axios
                .post("device/interfaces/delete", {
                    deviceId: this.$route.params.id
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadInterfaces();
                    this.deleteDeviceData = false;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadInterfaces();
        }
    }
};
</script>
