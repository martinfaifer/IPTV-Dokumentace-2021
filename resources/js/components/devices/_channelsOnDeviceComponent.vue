<template>
    <v-main>
        <v-card flat v-if="channels != null" class="mr-10">
            <v-card-subtitle>
                <strong>
                    Kanály na zařízení
                </strong>
            </v-card-subtitle>

            <v-card-text>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat kanál"
                    single-line
                    hide-details
                ></v-text-field>

                <v-data-table
                    :headers="headers"
                    :items="channels"
                    :search="search"
                ></v-data-table>
            </v-card-text>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            channels: null,
            search: "",
            headers: [
                {
                    text: "kanál",
                    align: "start",
                    value: "nazev"
                }
            ]
        };
    },

    created() {
        this.loadChannelsOnDevice();
    },
    methods: {
        loadChannelsOnDevice() {
            axios
                .post("device/channels", {
                    deviceId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.channels = response.data.data;
                    } else {
                        this.channels = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChannelsOnDevice();
        }
    }
};
</script>
