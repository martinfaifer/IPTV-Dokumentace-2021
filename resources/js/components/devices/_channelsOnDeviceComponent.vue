<template>
    <v-main>
        <v-card flat v-if="channels != null" class="mr-10">
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
                >
                    <template v-slot:item.logo="{ item }">
                        <div v-if="item.logo != false || item.logo != false">
                            <v-img
                                :lazy-src="item.logo"
                                max-height="24"
                                max-width="24"
                                :src="item.logo"
                            ></v-img>
                        </div>
                    </template>

                    <template v-slot:item.akce="{ item }">
                        <v-btn
                            small
                            icon
                            link
                            :to="'/channel/' + item.id"
                            target="_blank"
                        >
                            <v-icon small>
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
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
                    text: "",
                    value: "logo"
                },
                {
                    text: "kanál",
                    align: "start",
                    value: "nazev"
                },
                {
                    text: "",
                    value: "interface"
                },
                {
                    text: "",
                    value: "akce"
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
