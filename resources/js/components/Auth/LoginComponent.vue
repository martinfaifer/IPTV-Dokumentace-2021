<template>
    <v-main>
        <!-- prostor na notifikace -->
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-card-text>
                            <h1 class="text-center mb-4 mt-4">
                                <v-icon color="error" large>
                                    mdi-television-play
                                </v-icon>
                                <strong>IPTV Dokumentace</strong>
                            </h1>

                            <v-text-field
                                v-model="email"
                                :rules="mailRule"
                                label="Email"
                                name="login"
                                prepend-icon="mdi-account"
                                type="text"
                            ></v-text-field>

                            <v-text-field
                                v-model="password"
                                :rules="passwordRule"
                                label="Heslo"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                            ></v-text-field>
                            <div class="text-end">
                                <small class="blue--text">
                                    <a
                                        style="text-decoration: none"
                                        href="/#/pasword/reset"
                                    >
                                        Zapomněli jste heslo?
                                    </a>
                                </small>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                @click="login()"
                                :disabled="password === null || email === null"
                                type="submit"
                                color="success"
                                >Přihlášení</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            status: true,
            email: null,
            password: null,
            status: null,

            mailRule: [v => !!v || "chybí e-mailová adresa"],
            passwordRule: [v => !!v || "chybí heslo"]
        };
    },

    created() {
        this.getUser();
    },
    methods: {
        async login() {
            let currentObj = this;
            await axios
                .post("login", {
                    email: this.email,
                    password: this.password
                })
                .then(function(response) {
                    if (response.data.status === "success") {
                        currentObj.status = null;
                        setTimeout(function() {}, 2000);
                        currentObj.$router.push("/channel");
                    } else {
                        currentObj.status = response.data;
                        setTimeout(function() {
                            currentObj.status = null;
                        }, 2000);
                    }
                });
        },

        getUser() {
            window.axios.get("user").then(response => {
                if (response.data.status == "error") {
                } else {
                    this.$router.push("/channel");
                }
            });
        }
    },
    watch: {}
};
</script>
