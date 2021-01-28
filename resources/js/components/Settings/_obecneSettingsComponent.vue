<template>
    <v-main>
        <div>
            <v-container class="ml-16">
                <v-card flat class="ml-16">
                    <v-container class="ml-16 mt-6">
                        <!-- INCLUDE KOMPONENTŮ -->
                        <default-component></default-component>
                    </v-container>
                </v-card>
            </v-container>
        </div>
    </v-main>
</template>
<script>
import DefaultComponent from "./SettingsComponent";
export default {
    data() {
        return {
            deviceName: ""
        };
    },

    components: {
        "default-component": DefaultComponent
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
