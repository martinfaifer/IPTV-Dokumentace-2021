<template>
    <v-main>
        <v-card flat>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat satelit"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="satelits" :search="search">
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
                    text: "Satelit",
                    align: "start",
                    value: "satelit"
                },
                { text: "Akce", value: "akce" }
            ],
            satelits: []
        };
    },
    components: {},
    created() {
        this.getSatelits();
    },
    methods: {
        getSatelits() {
            axios.get("satelits").then(response => {
                if (response.data.status === "success") {
                    this.satelits = response.data.data;
                } else {
                    this.satelits = [];
                }
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
