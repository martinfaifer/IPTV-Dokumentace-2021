<template>
    <v-main style="background-color: #F1F5F9">
        <div v-if="!this.$route.params.id" class="pl-16" style="background-color: #F1F5F9">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else style="background-color: #F1F5F9">
            <v-container fluid class="pl-16" style="background-color: #F1F5F9">
                <v-card flat class="pl-16">
                    <v-container fluid class="pl-16 pt-6" style="background-color: #F1F5F9">
                        <!-- INCLUDE KOMPONENTŮ -->

                        <!-- Device information component -->
                        <obecneCard-component></obecneCard-component>
                    </v-container>
                </v-card>
            </v-container>
        </div>
    </v-main>
</template>
<script>
import DefaultComponent from "../Default/DefaultComponent";

import ObecneCardComponent from "./CardObecnyComponent";
export default {
    data() {
        return {
            deviceName: ""
        };
    },

    components: {
        "default-component": DefaultComponent,
        "obecneCard-component": ObecneCardComponent
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
