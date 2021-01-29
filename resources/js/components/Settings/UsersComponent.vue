<template>
    <v-main>
        <v-card flat>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat uživatele"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="users" :search="search">
            </v-data-table>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
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
            } catch (error) {}
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
