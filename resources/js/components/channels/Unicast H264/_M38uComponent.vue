<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="m3u8s != null">
            <v-card-subtitle>
                <strong>
                    Výstup v m3u8
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-1 text--center">
                <v-container fluid>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <span>
                                    <strong>
                                        HLS kdekoliv:
                                    </strong>
                                </span>
                                <span class="ml-3">
                                    {{ m3u8s.kdekoliv }}
                                </span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <span>
                                    <strong>
                                        HLS local:
                                    </strong>
                                </span>
                                <span class="ml-3">
                                    {{ m3u8s.local }}
                                </span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <span>
                                    <strong>
                                        HLS mobile:
                                    </strong>
                                </span>
                                <span class="ml-3">
                                    {{ m3u8s.mobile }}
                                </span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-container>
            </v-card-text>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            m3u8s: null
        };
    },
    created() {
        this.loadOutputKvality();
    },
    methods: {
        loadOutputKvality() {
            axios
                .post("h264/channel/m3u8", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.m3u8s = response.data.data;
                    } else {
                        this.m3u8s = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadOutputKvality();
        }
    }
};
</script>
