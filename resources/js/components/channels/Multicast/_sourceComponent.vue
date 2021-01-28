<template>
    <v-main>
        <v-col>
            <v-card
                flat
                color="#F5F5F7"
                v-if="prijem != null"
                @contextmenu="show($event)"
            >
                <v-card-subtitle>
                    <strong>
                        Příjem
                    </strong>
                </v-card-subtitle>
                <v-card-text class="ml-12 text--center">
                    <v-container>
                        <v-row v-if="prijem != null">
                            <v-col cols="12">
                                <span class="ml-6">
                                    {{ prijem.name }}
                                    <!-- info -->
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small icon>
                                                <v-icon small v-on="on">
                                                    mdi-information
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Rychlá informace o zařízení</span>
                                    </v-tooltip>
                                    <!-- hyperlink na device -->
                                    <v-tooltip bottom v-if="prijem.ip != null">
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                small
                                                icon
                                                link
                                                :href="'http://' + prijem.ip"
                                                target="_blank"
                                            >
                                                <v-icon small v-on="on">
                                                    mdi-earth
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Přímý proklik na zařízení</span>
                                    </v-tooltip>
                                    <!-- hyperlink v ramci doku -->
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                small
                                                icon
                                                link
                                                :to="'/device/' + prijem.id"
                                                target="_blank"
                                            >
                                                <v-icon small v-on="on">
                                                    mdi-arrow-right
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span
                                            >Proklik na zařízení v rámci
                                            dokumentace</span
                                        >
                                    </v-tooltip>
                                </span>
                                <span
                                    class="ml-6"
                                    v-if="prijem.interfaces != null"
                                >
                                    Vazba:
                                    <span
                                        v-for="prijemInterface in prijem.interfaces"
                                        :key="prijemInterface.id"
                                    >
                                        {{ prijemInterface.interface }} ,
                                    </span>
                                </span>
                            </v-col>

                            <v-col cols="12" v-if="prijem.path != null" class="mt-1">
                                <span class="ml-6">
                                    <strong>
                                        Absolutní cesta ke scriptu: 
                                    </strong>
                                    {{prijem.path}}
                                </span>
                            </v-col>

                            <v-col
                                cols="12"
                                v-if="childrenData != null"
                                class="mt-1"
                            >
                                <span class="ml-6">
                                    <strong> Tvorba multicastu: </strong
                                    >{{ childrenData.name }}
                                    <!-- info -->
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small icon>
                                                <v-icon small v-on="on">
                                                    mdi-information
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Rychlá informace o zařízení</span>
                                    </v-tooltip>
                                    <!-- hyperlink na device -->
                                    <v-tooltip
                                        bottom
                                        v-if="childrenData.ip != null"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                small
                                                icon
                                                link
                                                :href="
                                                    'http://' + childrenData.ip
                                                "
                                                target="_blank"
                                            >
                                                <v-icon small v-on="on">
                                                    mdi-earth
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Přímý proklik na zařízení</span>
                                    </v-tooltip>
                                    <!-- hyperlink v ramci doku -->
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                small
                                                icon
                                                link
                                                :to="
                                                    '/device/' + childrenData.id
                                                "
                                                target="_blank"
                                            >
                                                <v-icon small v-on="on">
                                                    mdi-arrow-right
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span
                                            >Proklik na zařízení v rámci
                                            dokumentace</span
                                        >
                                    </v-tooltip>
                                </span>
                            </v-col>
                        </v-row>
                        <v-row v-else>
                            <strong class="blue--text">
                                Není nadefinován
                            </strong>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>

            <!-- menu -->
            <v-menu
                dense
                v-model="showMenu"
                :position-x="x"
                :position-y="y"
                absolute
                offset-y
            >
                <v-list dense>
                    <v-list-item @click="openEditDialog()">
                        <v-list-item-icon>
                            <v-icon x-small>mdi-pencil</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Upravit
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="removeData()">
                        <v-list-item-icon>
                            <v-icon x-small>mdi-delete</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Odebrat
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-row justify="center" v-if="prijem != null">
                <v-dialog v-model="editDialog" persistent max-width="1000px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editace příjmu kanálu</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-combobox
                                            @change="
                                                GetMoreInformationAboutThisDevice(
                                                    prijem.name
                                                )
                                            "
                                            dense
                                            v-model="prijem.name"
                                            label="Zařízení na kterých je možné přijímat kanály"
                                            :items="items"
                                            required
                                            clearable
                                        ></v-combobox>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        class="mt-1"
                                        v-if="hasLinuxPath != null"
                                    >
                                        <span class="ml-6">
                                            <v-text-field
                                                label="Cesta ke scriptu"
                                                v-model="prijem.path"
                                            ></v-text-field>
                                        </span>
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
                                            v-model="prijem.interfaces"
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

                                    <v-col cols="12" v-if="hasChildren != null">
                                        <v-combobox
                                            v-model="children"
                                            :items="childrens"
                                            item-text="interface"
                                            item-value="id"
                                            label="Vyberte potomka."
                                            hint="Potomek"
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
                                @click="saveData()"
                            >
                                Uložit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
            <!--  -->
        </v-col>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            hasLinuxPath: null,
            linuxPath: null,
            channelToInterface: null,
            hasChildren: null,
            children: null,
            childrens: [],
            childrenData: null,
            deviceInformation: null,
            editDialog: false,
            items: [],
            prijem: [],
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadPrijem();
    },
    methods: {
        show(e) {
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        async openEditDialog() {
            await axios.get("device/prijem").then(response => {
                this.GetMoreInformationAboutThisDevice(this.prijem.name);
                this.items = response.data;
                this.editDialog = true;
            });
        },
        async saveData() {
            if (this.deviceInformation === null) {
                this.deviceInformation = null;
            } else {
                this.deviceInformation = this.deviceInformation.outputInterfaces;
            }

            await axios
                .post("device/prijem/edit", {
                    channelId: this.$route.params.id,
                    deviceName: this.prijem.name,
                    children: this.children,
                    channelToInterface: this.prijem.interfaces,
                    linuxPath: this.prijem.path,

                    checkIfDeviceHasInterface: this.deviceInformation
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.editDialog = false;
                        this.deviceInformation = [];
                        this.hasChildren = null;
                        this.loadPrijem();
                    } else {
                        this.editDialog = false;
                    }
                });
        },
        async GetMoreInformationAboutThisDevice(data) {
            await axios
                .post("device/info", {
                    deviceName: data
                })
                .then(response => {
                    if (response.data.status === "sat") {
                        this.deviceInformation = response.data.data;
                        this.hasChildren = null;
                        this.childrens = [];
                        this.hasLinuxPath = null;
                    } else if (response.data.status === "poIP") {
                        this.hasLinuxPath = null;
                        this.hasChildren = "children";
                        this.deviceInformation = null;
                        axios
                            .get("device/transcodersAndlinux")
                            .then(response => {
                                this.childrens = response.data;
                            });
                    } else if (response.data.status === "linux") {
                        this.hasLinuxPath = true;
                        this.deviceInformation = null;
                        this.hasChildren = null;
                        this.childrens = [];
                    } else {
                        this.hasLinuxPath = null;
                        this.deviceInformation = null;
                        this.hasChildren = null;
                        this.childrens = [];
                    }
                });
        },
        closeDialog() {
            this.editDialog = false;
            this.loadPrijem();
        },
        async removeData() {
            await axios
                .post("device/prijem/remove", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadPrijem();
                });
        },

        async loadPrijem() {
            await axios
                .post("prijem", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.prijem = response.data.data;
                        if (response.data.data.children != null) {
                            this.childrenData = response.data.data.children;
                        } else {
                            this.childrenData = null;
                        }
                    } else {
                        this.prijem = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadPrijem();
        }
    }
};
</script>
