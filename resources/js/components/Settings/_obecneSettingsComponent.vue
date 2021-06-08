<template>
    <v-main style="background-color: #F1F5F9">
        <v-container fluid class="pl-16" style="background-color: #F1F5F9">
            <v-card flat class="pl-16" color="#F1F5F9">
                <v-container
                    fluid
                    class="pl-16 pt-6 pr-5"
                    style="background-color: #F1F5F9"
                >
                    <!-- INCLUDE KOMPONENTŮ -->
                    <default-component></default-component>
                </v-container>
            </v-card>
        </v-container>
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
