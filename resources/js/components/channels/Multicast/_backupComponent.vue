<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="backup != null">
            <v-card-subtitle>
                <strong>
                    Záloha
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row v-if="backup != null">
                        <span class="ml-6">
                            {{ backup.name }}
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
                            <v-tooltip bottom v-if="backup.ip != null">
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :href="'http://' + backup.ip"
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
                                        :to="'/device/' + backup.id"
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
                        <span class="ml-6" v-if="backup.interfaces != null">
                            Vazba:
                            <span
                                v-for="backupInterface in backup.interfaces"
                                :key="backupInterface"
                            >
                                {{ backupInterface }} ,
                            </span>
                        </span>
                    </v-row>
                    <v-row v-else>
                        <strong class="blue--text">
                            Není nadefinována záloha
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
            backup: []
        };
    },
    created() {
        this.loadBackup();
    },
    methods: {
        loadBackup() {
            axios
                .post("backup", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.backup = response.data.data;
                    } else {
                        this.backup = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadBackup();
        }
    }
};
</script>
