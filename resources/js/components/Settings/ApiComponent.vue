<template>
    <v-main>
        <v-card flat class="pr-5">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
                    label="Vyhledat endpoint"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="apis" :search="search">
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
                    text: "URL",
                    align: "start",
                    value: "uri"
                },
                { text: "Událost", value: "type" },
                { text: "Token", value: "token" }
            ],
            apis: []
        };
    },
    components: {},
    created() {
        this.getApi();
    },
    methods: {
        async getApi() {
            await axios.get("external_endpoints").then(response => {
                if (response.data.status === "success") {
                    this.apis = response.data.apis;
                } else {
                    this.apis = [];
                }
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
