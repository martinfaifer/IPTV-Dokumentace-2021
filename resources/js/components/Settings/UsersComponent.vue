<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat uživatele"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn outlined color="green" @click="NewUserDialog = true">
                    Nový uživatel
                </v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="users" :search="search">
                <template v-slot:item.akce="{ item }">
                    <v-icon
                        @click="
                            openEditDialog(
                                item.id,
                                item.name,
                                item.email,
                                item.user_role
                            )
                        "
                        small
                        color="info"
                        >mdi-pencil</v-icon
                    >
                    <v-icon @click="deleteUser(item.id)" small color="red"
                        >mdi-delete</v-icon
                    >
                </template>
            </v-data-table>
        </v-card>

        <!-- dialogy -->

        <v-row justify="center">
            <v-dialog v-model="NewUserDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Nový uživatel</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        label="Jméno"
                                        v-model="name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        label="E-main"
                                        v-model="email"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        label="Heslo"
                                        v-model="password"
                                        type="password"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-combobox
                                        v-model="userRole"
                                        :items="roles"
                                        label="Uživatelská role"
                                    ></v-combobox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="closeNewUser()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="SaveNewUser()"
                        >
                            Založit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace uživatele</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        label="Jméno"
                                        v-model="name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        label="E-main"
                                        v-model="email"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-combobox
                                        v-model="userRole"
                                        :items="roles"
                                        label="Uživatelská role"
                                    ></v-combobox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="closeNewUser()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="SaveEditUser()"
                        >
                            Upravit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <!-- konec dialogů -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            userId: null,
            roles: ["admin", "Hotline"],
            userRole: null,
            name: null,
            email: null,
            password: null,
            editDialog: false,
            NewUserDialog: false,
            search: "",
            headers: [
                {
                    text: "Název",
                    align: "start",
                    value: "name"
                },
                { text: "Email", value: "email" },
                { text: "Role", value: "user_role" },
                { text: "Akce", value: "akce" }
            ],
            users: []
        };
    },
    components: {},
    created() {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            try {
                await axios.get("users").then(response => {
                    if (response.data.status === "success") {
                        this.users = response.data.users;
                    } else {
                        this.users = [];
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },
        closeNewUser() {
            this.editDialog = false;
            this.NewUserDialog = false;
            this.name = null;
            this.email = null;
            this.password = null;
            this.userRole = null;
        },
        async SaveNewUser() {
            await axios
                .post("user/create", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    role: this.userRole
                })
                .then(response => {
                    this.getUsers();
                    this.$store.state.alerts = response.data.alert;
                    this.NewUserDialog = false;
                    this.name = null;
                    this.email = null;
                    this.password = null;
                    this.userRole = null;
                });
        },
        openEditDialog(userId, name, email, role) {
            this.userId = userId;
            this.name = name;
            this.email = email;
            this.userRole = role;
            this.editDialog = true;
        },

        SaveEditUser() {
            axios
                .patch("user/edit", {
                    userId: this.userId,
                    name: this.name,
                    email: this.email,
                    role: this.userRole
                })
                .then(response => {
                    this.getUsers();
                    this.$store.state.alerts = response.data.alert;
                    this.editDialog = false;
                    this.name = null;
                    this.email = null;
                    this.userRole = null;
                    this.userId = null;
                });
        },

        async deleteUser(userId) {
            await axios.delete('user/delete', {
                data: {
                    userId: userId
                }
            }).then(response => {
                this.getUsers();
                this.$store.state.alerts = response.data.alert;
            })
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
