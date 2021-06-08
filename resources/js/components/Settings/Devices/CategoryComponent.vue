<template>
    <v-main>
        <v-card flat class="pr-5">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
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
                <template v-slot:item.icon="{ item }">
                   <v-icon>
                       {{item.icon}}
                   </v-icon>
                </template>
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
                {
                    text: "Ikona",
                    value: "icon"
                }
                // { text: "Akce", value: "akce" }
            ],
            categories: []
        };
    },
    components: {},
    created() {
        this.getCategories();
    },
    methods: {
        async getCategories() {
            await axios.get("device/categories").then(response => {
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
