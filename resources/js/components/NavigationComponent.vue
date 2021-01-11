<template>
    <v-app>
        <v-card flat color="transparent">
            <v-toolbar fixed dense flat class="ml-16">
                <v-spacer></v-spacer>

                <!-- search -->
                <search-compoennt class="ml-16"></search-compoennt>
                <!-- search bar -->

                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer
                ><v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-icon @click="alertMenu = true" color="red">
                    mdi-bell-ring-outline
                </v-icon>
            </v-toolbar>
            <!-- konec alertingu -->
            <v-row>
                <!--  Navigace -->
                <v-navigation-drawer fixed>
                    <v-row class="fill-height" no-gutters>
                        <!-- hlavní navigace, která neměnná -->
                        <v-navigation-drawer
                            fixed
                            color="#253341"
                            mini-variant
                            mini-variant-width="56"
                        >
                            <v-list dense>
                                <v-list-item>
                                    <v-menu transition="scroll-y-transition">
                                        <template v-slot:activator="{ on }">
                                            <v-icon color="white" v-on="on">
                                                mdi-account
                                            </v-icon>
                                        </template>
                                        <v-list
                                            width="250px"
                                            class="text-center subtitle-2"
                                        >
                                            <v-list-item
                                                @click="
                                                    editPasswordDialog = true
                                                "
                                            >
                                                Editace <v-spacer></v-spacer
                                                ><v-icon
                                                    color="grey"
                                                    right
                                                    small
                                                    >mdi-account-cog-outline</v-icon
                                                >
                                            </v-list-item>
                                            <v-list-item link to="/settings">
                                                Nastavení<v-spacer></v-spacer
                                                ><v-icon
                                                    color="grey"
                                                    right
                                                    small
                                                    >mdi-settings</v-icon
                                                >
                                            </v-list-item>
                                            <v-divider></v-divider>
                                            <v-list-item @click="logOut()">
                                                Odhlásit se <v-spacer></v-spacer
                                                ><v-icon
                                                    color="grey"
                                                    right
                                                    small
                                                    >mdi-lock</v-icon
                                                >
                                            </v-list-item>

                                            <v-divider></v-divider>
                                            <v-list-item
                                                href="http://iptvdohled.grapesc.cz/#/"
                                                target="_blink"
                                            >
                                                IPTV Dohled<v-spacer></v-spacer
                                                ><v-icon
                                                    color="grey"
                                                    right
                                                    small
                                                    >mdi-television</v-icon
                                                >
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>

                                    <v-btn icon @click.stop="mini = !mini">
                                        <v-icon>mdi-chevron-left</v-icon>
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                            <v-divider></v-divider>
                            <v-list dense nav>
                                <v-list-item link v-bind:to="'/channel'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-icon
                                                v-on="on"
                                                @click="
                                                    componentType = 'channels'
                                                "
                                                :class="{
                                                    'white--text':
                                                        componentType ===
                                                        'channels'
                                                }"
                                                >mdi-television-box</v-icon
                                            >
                                        </template>
                                        <span>Přehled kanálů</span>
                                    </v-tooltip>
                                </v-list-item>
                                <v-list-item link v-bind:to="'/device'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-icon
                                                v-on="on"
                                                @click="
                                                    componentType = 'devices'
                                                "
                                                :class="{
                                                    'white--text':
                                                        componentType ===
                                                        'devices'
                                                }"
                                                >mdi-devices</v-icon
                                            >
                                        </template>
                                        <span>Přehled zařízení</span>
                                    </v-tooltip>
                                </v-list-item>

                                <v-list-item link v-bind:to="'/cards'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-icon
                                                v-on="on"
                                                @click="componentType = 'cards'"
                                                :class="{
                                                    'white--text':
                                                        componentType ===
                                                        'cards'
                                                }"
                                                >mdi-card-text-outline</v-icon
                                            >
                                        </template>
                                        <span>Přehled karet</span>
                                    </v-tooltip>
                                </v-list-item>

                                <v-list-item link v-bind:to="'/wiki'">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-icon
                                                v-on="on"
                                                @click="componentType = 'wiki'"
                                                :class="{
                                                    'white--text':
                                                        componentType === 'wiki'
                                                }"
                                                >mdi-wikipedia</v-icon
                                            >
                                        </template>
                                        <span>Wiki</span>
                                    </v-tooltip>
                                </v-list-item>
                            </v-list>
                        </v-navigation-drawer>
                        <!-- zde bude dynamicka cast obsahu pro side menu  sekce channels / devices -> ??? wiki ??? -->
                        <channelssidemenu-component
                            v-show="componentType === 'channels'"
                        ></channelssidemenu-component>
                        <!-- konec dynamicke casti obsahu -->

                        <devicessidemenu-component
                            v-show="componentType === 'devices'"
                        ></devicessidemenu-component>
                    </v-row>
                </v-navigation-drawer>
                <!-- konec navigace -->

                <transition name="fade" mode="out-in">
                    <router-view class="ml-16"> </router-view>
                </transition>
            </v-row>
        </v-card>

        <!-- alerting side menu -->
        <v-navigation-drawer
            v-model="alertMenu"
            right
            color="transparent"
            fixed
            temporary
        >
            <div>
                <div id="alerty" class="pl-2 pr-2">
                    <v-alert
                        dense
                        border="left"
                        type="error"
                        class="body-2 mt-2"
                    >
                        <strong>Alert z dohledu</strong>
                    </v-alert>
                </div>
            </div>
        </v-navigation-drawer>
        <!-- konec side menu pro alerting -->

        <!-- snackaber pro upozornění na problém s csrf -->

        <v-snackbar
            v-model="snackbar"
            :vertical="vertical"
            bottom
            right
            :timeout="-1"
            color="warning"
            class="text--center"
        >
            <strong>
                {{ text }}
            </strong>
        </v-snackbar>

        <!-- alerting v cele app-->
        <alert-component></alert-component>

        <!--  -->
    </v-app>
</template>

<script>
import AlertComponent from "./Alerts/AlertComponent";
import ChannelsMenuComponent from "./channels/ChannelsMenuComponent";
import DevicesMenuComponent from "./devices/DevicesMenuComponent";
import SearchCompoennt from "../components/SearchBar/SearchComponent";

export default {
    data() {
        return {
            snackbar: false,
            text: "Prosím reloadněte si stránku!",
            vertical: true,
            searchDialogInput: false,
            componentType: "",
            alertMenu: null,
            drawer: true,
            mini: true,
            channels: null,
            fav: true,
            menu: false,
            message: false,
            hints: true,
            user: null,
            isLoading: false,
            model: null,
            search: null,
            entries: []
        };
    },

    computed: {
        fields() {
            if (!this.model) return [];

            return Object.keys(this.model).map(key => {
                return {
                    key,
                    value: this.model[key] || "n/a"
                };
            });
        },
        items() {
            return this.entries.map(entry => {
                const result =
                    entry.result.length > this.result
                        ? entry.result.slice(0, this.result) + "..."
                        : entry.result;

                return Object.assign({}, entry, { result });
            });
        }
    },

    components: {
        "alert-component": AlertComponent,
        "channelssidemenu-component": ChannelsMenuComponent,
        "devicessidemenu-component": DevicesMenuComponent,
        "search-compoennt": SearchCompoennt
    },

    created() {
        this.getUser();
        this.loadWriteDataByUri();
    },
    methods: {
        logOut() {
            window.axios("logout").then(response => {
                this.$router.push("/login");
            });
        },
        getUser() {
            window.axios.get("user").then(response => {
                // overení pokud není problem s overením csrf tokenu

                if (response.status === 419) {
                    this.snackbar = true;
                } else {
                    // skrytí snackbaru
                    this.snackbar = false;
                    // není problem s csrf pokracujeme dále

                    if (response.data.status == "error") {
                        this.logOut();
                    } else {
                        this.user = response.data.data;
                    }
                }
            });
        },

        loadWriteDataByUri() {
            if (this.$route.path.match("/channel.*")) {
                this.componentType = "channels";
            }

            if (this.$route.path.match("/device.*")) {
                this.componentType = "devices";
            }

            if (this.$route.path.match("/cards.*")) {
                this.componentType = "cards";
            }

            if (this.$route.path.match("/wiki.*")) {
                this.componentType = "wiki";
            }
        },
    },

    mounted() {
        this.interval = setInterval(
            function() {
                this.getUser();
            }.bind(this),
            60000
        );
    },

    watch: {
        $route(to, from) {
            this.loadWriteDataByUri();
        }
    }
};
</script>
