<template>
    <v-main>
        <v-container fluid class="ml-3">
            <v-row class="mt-4 mr-15">
                <v-col cols="12">
                    <tag-component
                        v-if="this.$route.params.name === 'tag'"
                    ></tag-component>
                    <users-component
                        v-if="this.$route.params.name === 'accounts'"
                    ></users-component>

                    <multicastsources-component
                        v-if="this.$route.params.name === 'multicast_sources'"
                    ></multicastsources-component>

                    <api-component
                        v-if="this.$route.params.name === 'api'"
                    ></api-component>

                    <!-- zařízení -->
                    <dvbs-component v-if="this.$route.params.name === 'dvb'">
                    </dvbs-component>
                    <satelits-component
                        v-if="this.$route.params.name === 'satelit'"
                    ></satelits-component>
                    <category-component
                        v-if="this.$route.params.name === 'category'"
                    ></category-component>
                    <deviceinterfaces-component
                        v-if="this.$route.params.name === 'interfaces'"
                    ></deviceinterfaces-component>

                    <channellogos-component
                        v-if="this.$route.params.name === 'channelLogos'"
                    ></channellogos-component>

                    <nangustreamers-component
                        v-if="this.$route.params.name === 'streamers'"
                    ></nangustreamers-component>

                    <nangastreamports-component
                        v-if="this.$route.params.name === 'stream_ports'"
                    ></nangastreamports-component>

                    <nangustreamerport-component v-if="this.$route.params.name === 'streamer_and_ports_bound'"></nangustreamerport-component>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import TagComponent from "./TagComponent";
import UsersComponent from "./UsersComponent";
import ApiComponent from "./ApiComponent";
import MulticastSourcesComponent from "./MulticastSourcesComponent";

// devices
import DvbsComponent from "./Devices/DvbComponent";
import SatelitsComponent from "./Devices/SatelitsComponent";
import CategoryComponent from "./Devices/CategoryComponent";
import DeviceInterfacesComponent from "./Devices/_DeviceInterfacesComponent";

// storage
import ChannelLogosComponent from "./Storage/StorageImageComponent";

// nangu
import NanguStreamersComponent from "./nangu/_streamers";
import NanguStreamPortsComponent from "./nangu/_streamPortComponent";
import NanguStreamerPortComponent from "./nangu/_streamerAndPortComponent";

export default {
    computed: {
        user() {
            return this.$store.state.user;
        }
    },

    data() {
        return {};
    },
    components: {
        "tag-component": TagComponent,
        "users-component": UsersComponent,
        "api-component": ApiComponent,
        "dvbs-component": DvbsComponent,
        "satelits-component": SatelitsComponent,
        "category-component": CategoryComponent,
        "multicastsources-component": MulticastSourcesComponent,
        "deviceinterfaces-component": DeviceInterfacesComponent,
        "channellogos-component": ChannelLogosComponent,
        "nangustreamers-component": NanguStreamersComponent,
        "nangastreamports-component": NanguStreamPortsComponent,
        "nangustreamerport-component": NanguStreamerPortComponent
    },
    created() {
        this.redirectToTags();
        this.checkIfIsAdmin();
    },
    methods: {
        checkIfIsAdmin() {
            if (this.user.user_role != "admin") {
                this.$router.push("/channel");
            }
        },

        redirectToTags() {
            if (this.$route.path === "/settings") {
                this.$router.push("/settings/tag");
            }
        }
    },
    watch: {
        $route(to, from) {
            this.redirectToTags();
        }
    }
};
</script>
