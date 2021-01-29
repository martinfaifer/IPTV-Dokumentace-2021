<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="device != null">
            <v-card-subtitle>
                <strong>
                    Zařízení s vazbou na kartu
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row v-if="device != null">
                        <span class="ml-6">
                            {{ device.name }}
                            <!-- info -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn small icon>
                                        <v-icon small v-on="on">
                                            mdi-information
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Rychlá informace o zařízení</span>
                            </v-tooltip>
                            <!-- hyperlink na device -->
                            <v-tooltip bottom v-if="device.ip != null">
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :href="'http://' + device.ip"
                                        target="_blank"
                                    >
                                        <v-icon small v-on="on">
                                            mdi-earth
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Přímý proklik na zařízení</span>
                            </v-tooltip>
                            <!-- hyperlink v ramci doku -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :to="'/device/' + device.id"
                                        target="_blank"
                                    >
                                        <v-icon small v-on="on">
                                            mdi-arrow-right
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span
                                    >Proklik na zařízení v rámci
                                    dokumentace</span
                                >
                            </v-tooltip>
                        </span>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            device: null
        };
    },
    created() {
        this.loadDevice();
    },
    methods: {
        loadDevice() {
            axios
                .post("card/device", {
                    cardId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.device = response.data.data;
                    } else {
                        this.device = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadDevice();
        }
    }
};
</script>
