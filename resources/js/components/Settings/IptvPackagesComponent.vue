<template>
    <v-main>
        <v-card flat class="pr-5">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
                    label="Hledání"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="packages" :search="search">
                <template v-slot:item.sub_package="{ item }">
                    <v-icon v-if="item.sub_package === 'yes'" color="info">
                        mdi-check
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
                    text: "Balíček",
                    align: "start",
                    value: "main_package"
                },
                { text: "Sub balíček", value: "sub_package" }
                // { text: "Akce", value: "akce" }
            ],
            packages: []
        };
    },
    components: {},
    created() {
        this.getPackages();
    },
    methods: {
        getPackages() {
            axios.get("packages").then(response => {
                this.packages = response.data;
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
