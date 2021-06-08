<template>
    <v-main style="background-color: #F1F5F9">
        <v-container fluid class="pl-3 pr-5">
            <div class="pr-5">
                <!-- Zobrazení názvu zařízení -->
                <h2>{{ deviceName }}</h2>
                <v-divider class="pr-5" inline> </v-divider>
            </div>

            <v-row class="pt-1 pr-5" v-if="deviceVendor === 'nVidia'">
                <v-col cols="12">
                    <!-- informace o transcoerech / hw usage -->
                    <transcoder-compoennt></transcoder-compoennt>
                </v-col>
            </v-row>

            <v-row class="pt-5 pr-5">
                <v-col cols="12">
                    <!-- component pro nacteni zobecných informací -->
                    <deviceinformation-component></deviceinformation-component>
                </v-col>
            </v-row>

            <v-row class="pt-1 pr-5">
                <v-col cols="12">
                    <!-- component pro nacteni zobecných informací -->
                    <interfaces-component></interfaces-component>
                </v-col>
            </v-row>

            <v-row class="pt-1 pr-5">
                <v-col cols="12">
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
            <v-row class="pt-1 pr-5">
                <v-col cols="12">
                    <!-- channels component -->
                    <channelsondevice-component></channelsondevice-component>
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
import TranscoderCompoennt from "./Transcoder/TranscoderComponent";

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
        "interfaces-component": InterfacesComponent,
        "transcoder-compoennt": TranscoderCompoennt
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
