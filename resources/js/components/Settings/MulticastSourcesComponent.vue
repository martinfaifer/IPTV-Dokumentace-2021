<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat zdroj"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="sources" :search="search">
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
                    text: "Zdroj",
                    align: "start",
                    value: "zdroj"
                },
                { text: "Akce", value: "akce" }
            ],
            sources: []
        };
    },
    components: {},
    created() {
        this.getSources();
    },
    methods: {
        getSources() {
            axios.get("sources").then(response => {
                this.sources = response.data;
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
