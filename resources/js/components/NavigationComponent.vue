<template>
    <v-app>
        <v-card flat color="transparent">
            <!-- alerting v cele app-->
            <v-toolbar fixed dense flat class="ml-16">
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
                            color="#586876"
                            mini-variant
                            mini-variant-width="56"
                        >
                            <v-list dense nav>
                                <v-list-item link>
                                    <v-icon
                                        @click="componentType = 'channels'"
                                        :class="{
                                            'white--text':
                                                componentType === 'channels',
                                        }"
                                        >mdi-television-box</v-icon
                                    >
                                </v-list-item>
                                <v-list-item link>
                                    <v-icon
                                        @click="componentType = 'devices'"
                                        :class="{
                                            'white--text':
                                                componentType === 'devices',
                                        }"
                                        >mdi-devices</v-icon
                                    >
                                </v-list-item>
                                <v-list-item link>
                                    <v-icon
                                        @click="componentType = 'wiki'"
                                        :class="{
                                            'white--text':
                                                componentType === 'wiki',
                                        }"
                                        >mdi-wikipedia</v-icon
                                    >
                                </v-list-item>
                            </v-list>
                        </v-navigation-drawer>

                        <!-- zde bude dynamicka cast obsahu pro side menu  sekce channels / devaces -> ??? wiki ??? -->
                        <channelssidemenu-component
                            v-show="componentType === 'channels'"
                        ></channelssidemenu-component>
                        <!-- konec dynamicke casti obsahu -->
                    </v-row>
                </v-navigation-drawer>
                <!-- konec navigace -->

                <transition name="fade" mode="out-in">
                    <router-view class="ml-16"> </router-view>
                </transition>

                <div class="ml-16"></div>
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
    </v-app>
</template>

<script>
import ChannelsMenuComponent from "./channels/ChannelsMenuComponent";

export default {
    data() {
        return {
            componentType: "channels",
            alertMenu: null,
            drawer: true,
            mini: true,
            channels: null,
        };
    },

    components: {
        "channelssidemenu-component": ChannelsMenuComponent,
    },

    created() {
        this.loadchannels();
    },
    methods: {
        loadchannels() {
            axios.get("channels").then((response) => {
                this.channels = response.data;
            });
        },
    },
};
</script>
