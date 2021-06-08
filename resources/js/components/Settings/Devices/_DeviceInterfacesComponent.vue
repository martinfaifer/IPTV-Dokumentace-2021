<template>
    <v-main>
        <v-card flat class="pr-5">
            <v-card-title>
                <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
                    label="Vyhledat interface"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="interfaces"
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
                    text: "Interface",
                    align: "start",
                    value: "interface"
                }
                // { text: "Akce", value: "akce" }
            ],
            interfaces: []
        };
    },
    components: {},
    created() {
        this.getInterfaces();
    },
    methods: {
        async getInterfaces() {
            await axios.get("device/allInterfaces").then(response => {
                this.interfaces = response.data;
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
