<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="multiplexor != null">
            <v-card-subtitle>
                <strong>
                    Multiplexer
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row v-if="multiplexor != null">
                        <span class="ml-6">
                            {{ multiplexor.name }}
                            <!-- info -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn small icon>
                                        <v-icon
                                            @click="show = !show"
                                            small
                                            v-on="on"
                                        >
                                            mdi-information
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>
                                    <v-container v-if="multiplexor.ip != null &&  multiplexor.login_user != null && multiplexor.login_password != null">
                                        <v-row>
                                            <strong>
                                                IP:
                                            </strong>
                                            <span class="ml-2">
                                                {{ multiplexor.ip }}
                                            </span>
                                        </v-row>
                                        <v-row class="mt-2">
                                            <strong>Přístup:</strong>
                                            <span class="ml-2">
                                                {{ multiplexor.login_user }} /
                                                {{ multiplexor.login_password }}
                                            </span>
                                        </v-row>
                                    </v-container>
                                    <v-container v-else>
                                        Nejsou žádné detailní informace
                                    </v-container>
                                </span>
                            </v-tooltip>
                            <!-- hyperlink na device -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :href="'http://' + multiplexor.ip"
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
                                        :to="'/device/' + multiplexor.id"
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
            multiplexor: []
        };
    },
    created() {
        this.loadMultiplexor();
    },
    methods: {
        loadMultiplexor() {
            axios
                .post("multiplexor", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.multiplexor = response.data.data;
                    } else {
                        this.multiplexor = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadMultiplexor();
        }
    }
};
</script>
