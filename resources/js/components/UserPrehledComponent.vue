<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div class="mr-15">
                <v-row>
                    <v-col cols="12" sm="8" md="11" lg="11"
                        ><h2 class="mt-6">
                            Přehled
                        </h2></v-col
                    >
                </v-row>
                <v-divider class="mr-15" inline> </v-divider>
            </div>

            <v-row class="mr-15 mt-6">
                <v-col cols="12" sm="12" lg="12" md="12">
                    <!-- zobrazení nastavení uzivatele -->
                    <v-card class="mr-15" flat color="#F5F5F7">
                        <v-card-title>Přehled o uživateli</v-card-title>
                        <v-card-text color="#F5F5F7">
                            <v-list color="#F5F5F7">
                                <v-list-item>
                                    Jméno:
                                    <strong class="ml-3">{{
                                        user.name
                                    }}</strong>
                                </v-list-item>
                                <v-list-item>
                                    e-mail:
                                    <strong class="ml-3">{{
                                        user.email
                                    }}</strong>
                                </v-list-item>
                                <v-list-item>
                                    Role:
                                    <strong class="ml-3">
                                        {{ user.user_role }}
                                    </strong>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" lg="12" md="12">
                    <v-card class="mr-15" flat color="#F5F5F7">
                        <v-card-title>Přihlášená zařízení</v-card-title>
                        <v-card-text color="#F5F5F7">
                            <v-list
                                color="#F5F5F7"
                                v-for="session in sessions"
                                :key="session.id"
                            >
                                <v-list-item>
                                    IP ze které bylo přistupováno:
                                    <strong class="ml-3">{{
                                        session.ip_address
                                    }}</strong>
                                </v-list-item>
                                <v-list-item>
                                    Prohlížeč ze kterého bylo přistupováno:
                                    <strong class="ml-3">{{
                                        session.user_agent
                                    }}</strong>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    data() {
        return {
            sessions: null
        };
    },

    created() {
        this.getSessions();
    },
    methods: {
        async getSessions() {
            await axios.get("/user/sessions").then(response => {
                this.sessions = response.data;
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
