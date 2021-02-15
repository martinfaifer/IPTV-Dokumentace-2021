<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat logo"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="logos" :search="search">
                <template v-slot:item.path="{ item }">
                    <v-img
                        :lazy-src="item.path"
                        max-height="48"
                        max-width="48"
                        :src="item.path"
                    ></v-img>
                </template>
                <template v-slot:item.akce="{ item }">
                    <v-btn
                        @click="deleteThis(item.path)"
                        v-if="item.file_content.id === null"
                        icon
                    >
                        <v-icon small color="red">mdi-delete</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            logos: [],
            search: "",
            headers: [
                {
                    text: "Logo",
                    align: "start",
                    value: "path"
                },
                { text: "popis", value: "file" },
                { text: "Vazba na kanál", value: "file_content.nazev" },
                { text: "Akce", value: "akce" }
            ]
        };
    },
    components: {},
    created() {
        this.getChannelsLogos();
    },
    methods: {
        async getChannelsLogos() {
            await axios
                .get("storage/" + this.$route.params.name)
                .then(response => {
                    this.logos = response.data;
                });
        },
        deleteThis(path) {
            axios
                .delete("storage/delete", {
                    data: {
                        path: path
                    }
                })
                .then(response => {
                    this.getChannelsLogos();
                    this.$store.state.alerts = response.data.alert;
                });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
