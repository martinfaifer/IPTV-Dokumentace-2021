<template>
    <v-main style="background-color: #F1F5F9">
        <div
            v-if="!this.$route.params.id"
            class="pl-12"
            style="background-color: #F1F5F9"
        >
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else style="background-color: #F1F5F9">
            <v-container fluid class="pl-16" style="background-color: #F1F5F9">
                <!-- štítky component -->
                <tag-component class="pr-5"></tag-component>
                <!-- konec štítků -->

                <!-- navigace na přepnutí detailů karnálu ( multicast, h264, h265 , informace z dohledu) -->
                <v-card flat class="pl-16 mt-3" color="#F1F5F9">
                    <v-tabs
                        centered
                        dense
                        v-model="channelTab"
                        background-color="#F1F5F9"
                    >
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab
                            class="body-2"
                            dense
                            link
                            v-bind:to="
                                '/channel/' +
                                    this.$route.params.id +
                                    '/multicast'
                            "
                            href="multicast"
                            >Multicast</v-tab
                        >
                        <v-tab
                            class="body-2"
                            link
                            v-bind:to="
                                '/channel/' + this.$route.params.id + '/h264'
                            "
                            href="#tab-2"
                            >H264</v-tab
                        >
                        <v-tab
                            class="body-2"
                            link
                            v-bind:to="
                                '/channel/' + this.$route.params.id + '/h265'
                            "
                            href="#tab-3"
                            >H265</v-tab
                        >
                        <!-- nangu nebo jine externi api -->
                        <v-tab
                            class="body-2"
                            link
                            v-bind:to="
                                '/channel/' + this.$route.params.id + '/nangu'
                            "
                            href="#tab-3"
                            >Nangu</v-tab
                        >

                        <v-tab
                            class="body-2"
                            link
                            v-bind:to="
                                '/channel/' + this.$route.params.id + '/storage'
                            "
                            href="#tab-4"
                            >Soubory</v-tab
                        >

                        <v-tab-item v-model="channelTab" class="pl-16">
                            <!-- INCLUDE KOMPONENTŮ -->

                            <!-- multicast komponent -->
                            <multicast-component
                                class="pr-5"
                                v-if="
                                    this.$route.path ===
                                        '/channel/' +
                                            this.$route.params.id +
                                            '/multicast' ||
                                        this.$route.path ===
                                            '/channel/' + this.$route.params.id
                                "
                            ></multicast-component>

                            <!-- h264 komponent -->
                            <h264baseinfo-component
                                class="pr-5"
                                v-if="
                                    this.$route.path ===
                                        '/channel/' +
                                            this.$route.params.id +
                                            '/h264'
                                "
                            ></h264baseinfo-component>

                            <!-- h265 komponent -->
                            <h265baseinfo-component
                                class="pr-5"
                                v-if="
                                    this.$route.path ===
                                        '/channel/' +
                                            this.$route.params.id +
                                            '/h265'
                                "
                            ></h265baseinfo-component>
                            <!-- dohled API komponent -->
                            <nanguchannel-component
                                class="pr-5"
                                v-if="
                                    this.$route.path ===
                                        '/channel/' +
                                            this.$route.params.id +
                                            '/nangu'
                                "
                            ></nanguchannel-component>
                            <channelstorage-component
                                class="pr-5"
                                v-if="
                                    this.$route.path ===
                                        '/channel/' +
                                            this.$route.params.id +
                                            '/storage'
                                "
                            ></channelstorage-component>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-container>
        </div>
    </v-main>
</template>
<script>
import DefaultComponent from "../Default/DefaultComponent";
import TagComponent from "../Tags/TagComponent";
import MulticastComponent from "./MulticastComponent.vue";
import H264baseInfoComponent from "./Unicast H264/H264baseInfoComponent";
import H265baseInfoComponent from "./Unicast H265/H265baseInfoComponent";
import ChannelStorageComponent from "./Storage/ChannelStorageComponent";
import NanguChannelComponent from "./Nangu/ChannelNanguComponent";
export default {
    data() {
        return {
            channelTab: null,
            channelName: "",
            componentType: "multicast"
        };
    },

    components: {
        "multicast-component": MulticastComponent,
        "h264baseinfo-component": H264baseInfoComponent,
        "h265baseinfo-component": H265baseInfoComponent,
        "channelstorage-component": ChannelStorageComponent,
        "default-component": DefaultComponent,
        "tag-component": TagComponent,
        "nanguchannel-component": NanguChannelComponent
    },
    created() {},
    methods: {
        OpenDialogForNewTag() {}
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
