<template>
    <v-main style="background-color: #F1F5F9">
        <v-container fluid class="pl-3" style="background-color: #F1F5F9">
            <div class="pr-5">
                <!-- Zobrazení názvu zařízení -->
                <h2>{{ thisCardNumber }}</h2>
                <v-divider class="pr-5" inline> </v-divider>
            </div>

            <v-row class="mt-6 pr-5" style="background-color: #F1F5F9">
                <v-col cols="12" sm="6" md="6" lg="6">
                    <carddevice-component></carddevice-component>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import CardDeviceComponent from "./CardDeviceComponent";

export default {
    data() {
        return {
            thisCardNumber: ""
        };
    },
    components: {
        "carddevice-component": CardDeviceComponent
    },
    created() {
        this.loadCardNumber();
    },
    methods: {
        loadCardNumber() {
            axios
                .post("card/number", {
                    cardId: this.$route.params.id
                })
                .then(response => {
                    this.thisCardNumber = response.data;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadCardNumber();
        }
    }
};
</script>
