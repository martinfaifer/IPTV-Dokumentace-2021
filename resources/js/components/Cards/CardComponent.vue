<template>
    <v-main>
        <div v-if="!this.$route.params.id" class="ml-12">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container fluid class="ml-16">
                <v-card flat class="ml-16">
                    <v-container fluid class="ml-16 mt-6">
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
