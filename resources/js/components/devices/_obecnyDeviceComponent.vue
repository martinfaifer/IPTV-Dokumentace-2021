<template>
    <v-main>
        <v-container fluid class="ml-3" >
            <div>
                <!-- Zobrazení názvu zařízení -->
                <h2>{{ deviceName }}</h2>
                <v-divider class="mr-10" inline> </v-divider>
            </div>

            <v-row class=" mt-6">
                <v-col>
                    <!-- component pro nacteni zobecných informací -->
                    <deviceinformation-component></deviceinformation-component>
                </v-col>
            </v-row>

            <v-row class=" mt-4">
                <v-col>
                    <!-- component pro nacteni zobecných informací -->
                    <interfaces-component></interfaces-component>
                </v-col>
            </v-row>

            <v-row class="mt-4">
                <v-col>
                    <!-- sablona component -->
                    <blankominputs-component
                        v-if="deviceVendor === 'Blankom'"
                    ></blankominputs-component>
                    <fteinputs-component
                        v-if="deviceVendor === 'FTE'"
                    ></fteinputs-component>
                    <powervu-component
                        v-if="deviceVendor === 'Cisco'"
                    ></powervu-component>
                </v-col>
            </v-row>

            <!-- kanály na zarizení -->
            <v-row class="mt-4">
                <v-col>
                    <!-- channels component -->
                    <channelsondevice-component></channelsondevice-component>
                </v-col>
            </v-row>

            <v-row class="mt-4">
                <v-col>
                    <!-- kalendar component -->
                </v-col>
                <v-col>
                    <!-- note component -->
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import BlankomInputsComponent from "./Interfaces/_blankomInterfacesComponent";
import FteInputsComponent from "./Interfaces/_fteInterfacesComponent";
import PowerVuComponent from "./Interfaces/_powerVuInterfacesComponent";
import InterfacesComponent from "./Interfaces/_interfacesforChannelsComponent";

import deviceInformationComponent from "./_deviceInfoComponent";
import deviceTemplateComponent from "./_deviceTemplateComponent";
import channelsOnDeviceComponent from "./_channelsOnDeviceComponent";

export default {
    data() {
        return {
            deviceName: "",
            deviceInformations: "",
            deviceVendor: ""
        };
    },
    components: {
        "deviceinformation-component": deviceInformationComponent,
        "devicetemplate-component": deviceTemplateComponent,
        "channelsondevice-component": channelsOnDeviceComponent,
        "blankominputs-component": BlankomInputsComponent,
        "fteinputs-component": FteInputsComponent,
        "powervu-component": PowerVuComponent,
        "interfaces-component": InterfacesComponent
    },
    created() {
        this.loadDeviceNameById();
        this.loadDeviceVendor();
    },
    methods: {
        loadDeviceNameById() {
            axios
                .post("device/name", {
                    deviceId: this.$route.params.id
                })
                .then(response => {
                    this.deviceName = response.data;
                });
        },

        loadDeviceVendor() {
            axios
                .post("device/vendor", {
                    deviceId: this.$route.params.id
                })
                .then(response => {
                    this.deviceVendor = response.data;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadDeviceNameById();
            this.loadDeviceVendor();
        }
    }
};
</script>
