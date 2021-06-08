<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div class="mr-10">
                <v-row>
                    <v-col cols="12" sm="8" md="11" lg="11"
                        ><h2 class="mt-6">
                            Změna hesla
                        </h2></v-col
                    >
                </v-row>
                <v-divider class="mr-15" inline> </v-divider>
            </div>

            <v-row class="mr-10 mt-6">
                <v-col cols="12" sm="12" lg="12" md="12">
                    <!-- zobrazení nastavení uzivatele -->
                    <v-card class="mr-15" flat color="white">
                        <v-card-text color="white">
                            <v-col cols="12">
                                <v-text-field type="password" v-model="password" label="nové heslo"></v-text-field>
                            </v-col>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text color="success" @click="changePassword">
                                    Upravit
                                </v-btn>
                            </v-card-actions>
                        </v-card-text>
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
            password: null
        };
    },

    created() {},
    methods: {
        changePassword() {
            axios.patch('user/changePassword', {
                password: this.password
            }).then(response => {
                this.$store.state.alerts = response.data.alert;
                this.password = null;
            })
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
