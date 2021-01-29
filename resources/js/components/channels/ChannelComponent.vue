<template>
    <v-main>
        <div v-if="!this.$route.params.id" class="ml-12">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container class="ml-16">
                <!-- štítky component -->
                <tag-component></tag-component>
                <!-- konec štítků -->

                <!-- navigace na přepnutí detailů karnálu ( multicast, h264, h265 , informace z dohledu) -->
                <v-card flat class="ml-16 mt-3">
                    <v-tabs centered v-model="channelTab">
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab
                            link
                            v-bind:to="'/channel/' + this.$route.params.id"
                            href="multicast"
                            >Multicast</v-tab
                        >
                        <v-tab
                            link
                            v-bind:to="
                                '/channel/' + this.$route.params.id + '/h264'
                            "
                            href="#tab-2"
                            >H264</v-tab
                        >
                        <v-tab
                            link
                            v-bind:to="
                                '/channel/' + this.$route.params.id + '/h265'
                            "
                            href="#tab-3"
                            >H265</v-tab
                        >

                        <v-tab-item v-model="channelTab" class="ml-16 mt-6">
                            <!-- INCLUDE KOMPONENTŮ -->

                            <!-- multicast komponent -->
                            <multicast-component
                                v-if="
                                    this.$route.path ===
                                        '/channel/' + this.$route.params.id
                                "
                            ></multicast-component>

                            <!-- h264 komponent -->
                            <h264baseinfo-component
                                v-if="
                                    this.$route.path ===
                                        '/channel/' +
                                            this.$route.params.id +
                                            '/h264'
                                "
                            ></h264baseinfo-component>

                            <!-- h265 komponent -->
                            <h265baseinfo-component
                                v-if="
                                    this.$route.path ===
                                        '/channel/' +
                                            this.$route.params.id +
                                            '/h265'
                                "
                            ></h265baseinfo-component>
                            <!-- dohled API komponent -->
                            <dohled-component
                                v-if="
                                    this.$route.path ===
                                        '/channel/' +
                                            this.$route.params.id +
                                            '/dohled'
                                "
                            ></dohled-component>
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
        "default-component": DefaultComponent,
        "tag-component": TagComponent
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
