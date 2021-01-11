<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="prijem != null">
            <v-card-subtitle>
                <strong>
                    Příjem
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row v-if="prijem != null">
                        <span class="ml-6">
                            {{ prijem.name }}
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
                            <v-tooltip bottom v-if="prijem.ip != null">
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :href="'http://' + prijem.ip"
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
                                        :to="'/device/' + prijem.id"
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
                        <span class="ml-6" v-if="prijem.interfaces != null">
                            Vazba:
                            <span
                                v-for="prijemInterface in prijem.interfaces"
                                :key="prijemInterface"
                            >
                                {{ prijemInterface }} , 
                            </span>
                        </span>
                    </v-row>
                    <v-row v-else>
                        <strong class="blue--text">
                            Není nadefinován
                        </strong>
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
            prijem: []
        };
    },
    created() {
        this.loadPrijem();
    },
    methods: {
        loadPrijem() {
            axios
                .post("prijem", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.prijem = response.data.data;
                    } else {
                        this.prijem = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadPrijem();
        }
    }
};
</script>
