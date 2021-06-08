<template>
    <v-main>
        <v-card flat class="pr-5">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
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
                <template v-slot:item.photo="{ item }">
                    <v-avatar v-if="item.photo === null" color="indigo">
                        <v-icon dark>
                            mdi-account-circle
                        </v-icon>
                    </v-avatar>
                    <v-avatar v-if="item.photo != null">
                        <v-img :src="item.photo"> </v-img>
                    </v-avatar>
                </template>
                <template v-slot:item.status="{ item }">
                    <v-icon v-if="item.status === true" color="green">
                        mdi-check
                    </v-icon>
                    <v-icon v-else color="red">
                        mdi-close
                    </v-icon>
                </template>
                <template v-slot:item.akce="{ item }">
                    <v-icon
                        @click="
                            openEditDialog(
                                item.id,
                                item.name,
                                item.email,
                                item.user_role,
                                item.status
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
                        <span class="headline">Editace uživatele </span>
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
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-checkbox
                                        color="green"
                                        v-model="status"
                                        label="Povolit přístup uživateli"
                                    ></v-checkbox>
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
            status: null,
            photo: null,
            editDialog: false,
            NewUserDialog: false,
            search: "",
            headers: [
                { text: "Avatar", value: "photo" },
                { text: "Název", value: "name" },
                { text: "Email", value: "email" },
                { text: "Role", value: "user_role" },
                { text: "Přístup do systému", value: "status" },
                { text: "Vytvořeno", value: "created" },
                { text: "Aktualizováno", value: "updated" },
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
        openEditDialog(userId, name, email, role, status, photo) {
            this.userId = userId;
            this.name = name;
            this.email = email;
            this.userRole = role;
            this.status = status;
            this.photo = photo;
            this.editDialog = true;
        },

        SaveEditUser() {
            axios
                .patch("user/edit", {
                    userId: this.userId,
                    name: this.name,
                    email: this.email,
                    role: this.userRole,
                    status: this.status
                })
                .then(response => {
                    this.getUsers();
                    this.$store.state.alerts = response.data.alert;
                    this.editDialog = false;
                    this.name = null;
                    this.email = null;
                    this.userRole = null;
                    this.userId = null;
                    this.status = null;
                });
        },

        async deleteUser(userId) {
            await axios
                .delete("user/delete", {
                    data: {
                        userId: userId
                    }
                })
                .then(response => {
                    this.getUsers();
                    this.$store.state.alerts = response.data.alert;
                });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
