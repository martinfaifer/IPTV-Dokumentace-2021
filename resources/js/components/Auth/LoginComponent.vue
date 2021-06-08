<template>
    <v-main>
        <!-- prostor na notifikace -->
        <v-container class="fill-height" fluid >
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-form @submit.prevent="login()">
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
                                    name="username"
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
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    type="submit"
                                    color="success"
                                    >Přihlášení</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
        <alert-component></alert-component>
    </v-main>
</template>

<script>
import AlertComponent from "../Alerts/AlertComponent";
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

    components: {
        "alert-component": AlertComponent
    },
    created() {
        this.getUser();
    },
    methods: {
        login() {
            axios
                .post("login", {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.getUser();
                        this.status = null;
                        setTimeout(function() {}, 2000);
                        this.$router.push("/");
                    } else {
                        this.$store.state.alerts = response.data.alert;
                        this.email = null;
                        this.password = null;
                    }
                });
        },

        getUser() {
            window.axios.get("user").then(response => {
                this.$store.state.user = response.data.data;
                if (response.data.status == "error") {
                } else {
                    this.$router.push("/");
                }
            });
        }
    },
    watch: {}
};
</script>
