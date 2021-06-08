<template>
    <v-main>
        <v-card flat color="white" @contextmenu="show($event)" height="250">
            <v-card-subtitle>
                <strong>
                    Historie
                </strong>
            </v-card-subtitle>
            <v-card-text>
                <v-container fluid>
                    <v-data-table
                        dense
                        :headers="headers"
                        :items="history"
                        :items-per-page="3"
                    ></v-data-table>
                </v-container>
            </v-card-text>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            history: [],
            headers: [
                { text: "Kdo", value: "email" },
                { text: "Původní záznam", value: "original" },
                { text: "Nový záznam", value: "new" },
            ]
        };
    },
    created() {
        this.loadHistory();
    },
    methods: {
        loadHistory() {
            axios.get('channel/multicast/history/' + this.$route.params.id).then(response => {
                this.history = response.data;
            })
        }
    },
    watch: {
        $route(to, from) {
            this.loadHistory();
        }
    }
};
</script>
