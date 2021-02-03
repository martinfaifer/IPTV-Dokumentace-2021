<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat kategorii"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="categories"
                :search="search"
            >
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
                    text: "Kategorie",
                    align: "start",
                    value: "name"
                },
                { text: "Akce", value: "akce" }
            ],
            categories: []
        };
    },
    components: {},
    created() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            axios.get("device/categories").then(response => {
                if (response.data.status === "success") {
                    this.categories = response.data.data;
                } else {
                    this.categories = [];
                }
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
