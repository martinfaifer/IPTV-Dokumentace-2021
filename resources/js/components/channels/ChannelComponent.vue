<template>
    <v-main>
        <v-container class="ml-16">
            <!-- štítky -->
            <v-toolbar fixed dense flat>
                <v-spacer></v-spacer>
                <div class="text-center">
                    <v-chip small color="info" dense label class="ma-2"
                        >Stitek 1</v-chip
                    >
                    <v-chip small color="green" dense label class="ma-2"
                        >Stitek 2</v-chip
                    >
                    <v-chip small color="warning" dense label class="ma-2"
                        >Stitek 3</v-chip
                    >
                </div>
            </v-toolbar>
            <!-- konec štítků -->

            <!-- navigace na přepnutí detailů karnálu ( multicast, h264, h265 , informace z dohledu) -->
            <v-card flat class="ml-16">
                <v-tabs centered v-model="channelTab">
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab href="#tab-1">Multicast</v-tab>
                    <v-tab href="#tab-2">H264</v-tab>
                    <v-tab href="#tab-3">H265</v-tab>
                    <v-tab href="#tab-4">Informace z dohledu</v-tab>

                    <v-tab-item v-model="channelTab" class="ml-16 mt-6">
                        <v-container fluid class="ml-3">
                            <div>
                                <h2>{{ channelName }}</h2>
                                <v-divider inline> </v-divider>
                            </div>
                            <v-row class=" mt-6">
                                <v-col cols="12">
                                    <v-card flat color="blue-grey lighten-5">
                                        <v-card-subtitle>
                                            Zdroj
                                        </v-card-subtitle>
                                        <v-card-text class="ml-12 text--center">
                                            obsah ...
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="4">
                                    <v-card flat color="blue-grey lighten-5">
                                        <v-card-subtitle>
                                            Multiplexer
                                        </v-card-subtitle>
                                        <v-card-text class="ml-12 text--center">
                                            obsah ...
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="4">
                                    <v-card flat color="blue-grey lighten-5">
                                        <v-card-subtitle>
                                            Prijem
                                        </v-card-subtitle>
                                        <v-card-text class="ml-12 text--center">
                                            obsah ...
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="4">
                                    <v-card flat color="blue-grey lighten-5">
                                        <v-card-subtitle>
                                            Backup
                                        </v-card-subtitle>
                                        <v-card-text class="ml-12 text--center">
                                            Obsah ...
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <!-- kalendar -->
                            <v-row>
                                <v-col cols="6">
                                    <v-card flat color="blue-grey lighten-5">
                                        <v-card-subtitle>
                                            Kalendar
                                        </v-card-subtitle>
                                        <v-card-text class="ml-12 text--center">
                                            obsah ...
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col cols="6">
                                    <v-card flat color="blue-grey lighten-5">
                                        <v-card-subtitle>
                                            Poznamka
                                        </v-card-subtitle>
                                        <v-card-text class="ml-12 text--center">
                                            obsah ...
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-tab-item>
                </v-tabs>
            </v-card>
        </v-container>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            channelTab: null,
            channelName: ""
        };
    },

    created() {
        this.loadChannelNameById();
    },
    methods: {
        loadChannelNameById() {
            axios
                .post("channel/name", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.channelName = response.data;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChannelNameById();
        }
    }
};
</script>
