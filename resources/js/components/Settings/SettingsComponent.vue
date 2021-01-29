<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div>
                <!-- <h2>{{ this.$route.params.name }}</h2>
                <v-divider class="mr-10" inline> </v-divider> -->
            </div>

            <v-row class="mt-4 mr-10">
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

                    <!-- <iptvpakcages-component
                        v-if="this.$route.params.name === 'iptv_package'"
                    ></iptvpakcages-component> -->

                    <!-- zařízení -->
                    <dvbs-component v-if="this.$route.params.name === 'dvb'">
                    </dvbs-component>
                    <satelits-component
                        v-if="this.$route.params.name === 'satelit'"
                    ></satelits-component>
                    <category-component
                        v-if="this.$route.params.name === 'category'"
                    ></category-component>
                </v-col>
            </v-row>

            <!-- kanály na zarizení -->
            <v-row class="mt-4">
                <v-col> </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import TagComponent from "./TagComponent";
import UsersComponent from "./UsersComponent";
import ApiComponent from "./ApiComponent";
// import IptvPakcagesComponent from "./IptvPackagesComponent";
import MulticastSourcesComponent from "./MulticastSourcesComponent";

// devices
import DvbsComponent from "./Devices/DvbComponent";
import SatelitsComponent from "./Devices/SatelitsComponent";
import CategoryComponent from "./Devices/CategoryComponent";
export default {
    data() {
        return {};
    },
    components: {
        "tag-component": TagComponent,
        "users-component": UsersComponent,
        "api-component": ApiComponent,
        // "iptvpakcages-component": IptvPakcagesComponent,
        "dvbs-component": DvbsComponent,
        "satelits-component": SatelitsComponent,
        "category-component": CategoryComponent,
        "multicastsources-component": MulticastSourcesComponent
    },
    created() {
        this.redirectToTags();
    },
    methods: {
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
