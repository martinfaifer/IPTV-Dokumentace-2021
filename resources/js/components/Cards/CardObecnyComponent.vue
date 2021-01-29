<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div>
                <!-- Zobrazení názvu zařízení -->
                <h2>{{ thisCardNumber }}</h2>
                <v-divider class="mr-10" inline> </v-divider>
            </div>

            <v-row class=" mt-6">
                <v-col>
                    <carddevice-component class="mr-10"></carddevice-component>
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
