<template>
    <v-main>
        <v-card flat class="mr-15">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat typ"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-data-table :headers="headers" :items="dvbs" :search="search">
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
                    text: "DVB",
                    align: "start",
                    value: "dvb"
                },
                // { text: "Akce", value: "akce" }
            ],
            dvbs: []
        };
    },
    components: {},
    created() {
        this.getDvbs();
    },
    methods: {
        async getDvbs() {
            await axios.get("dvb").then(response => {
                if (response.data.status === "success") {
                    this.dvbs = response.data.data;
                } else {
                    this.dvbs = [];
                }
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
