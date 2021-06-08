<template>
    <v-main>
        <v-card flat color="white" v-if="dohled != null">
            <v-card-subtitle>
                <v-row>
                    <v-col cols="12" sm="8" md="8" lg="8">
                        <strong>
                            Informace z dohledu
                        </strong>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4">
                        <a
                            style="text-decoration:none"
                            target="_blank"
                            :href="
                                'http://93.91.154.55/#/stream/' +
                                    dohled.streamId
                            "
                            >Proklik do dohledu</a
                        >
                    </v-col>
                </v-row>
            </v-card-subtitle>

            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <span>
                                Stav Streamu:
                            </span>
                            <span v-if="dohled.streamStatus != 'success'">
                                <strong class="red--text">
                                    Problém se streamem
                                </strong>
                            </span>
                            <span v-else>
                                <strong class="green--text">
                                    Stream je v pořádku
                                </strong>
                            </span>
                        </v-col>
                        <v-col>
                            <v-img
                                :lazy-src="dohled.img"
                                max-height="150"
                                max-width="250"
                                :src="dohled.img"
                            >
                            </v-img>
                        </v-col>
                        <v-col>
                            <strong>
                                Historie:
                            </strong>
                            <v-virtual-scroll
                                :items="dohled.history"
                                :item-height="50"
                                height="100"
                            >
                                <template v-slot:default="{ item }">
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <span
                                                    v-if="
                                                        item.status ===
                                                            'stream_ok'
                                                    "
                                                    class="green--text"
                                                >
                                                    Stream je v pořádku
                                                </span>
                                                <span v-else class="red--text">
                                                    {{ item.status }}
                                                </span>
                                            </v-list-item-title>
                                            <v-list-item-subtitle
                                                v-html="item.created_at"
                                            ></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-virtual-scroll>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            dohled: null
        };
    },

    created() {
        this.loadDohledDatat();
    },
    methods: {
        loadDohledDatat() {
            axios
                .post("channel/dohled", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    // if (response.data.status === "success") {
                        console.log(response.data);
                        // Echo_DOHLED.channel(
                        //     "streamInfoTsService" + this.dohled.streamId
                        // ).listen("StreamInfoService", eService => {
                        //     // this.stream.service.pcrpid = eService["pcrpid"];
                        //     // this.stream.service.pmtpid = eService["pmtpid"];
                        //     // this.stream.service.tsid = eService["tsid"];
                        //     // this.stream.service.name = eService["name"];
                        //     // this.stream.service.provider = eService["provider"];
                        //     console.log(eService);
                        // });
                    // } else {
                    //     this.dohled = null;
                    // }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadDohledDatat();
        }
    }
};
</script>
