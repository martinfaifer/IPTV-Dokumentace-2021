<template>
    <v-main style="background-color: #F1F5F9">
        <v-container fluid class="ml-3">
            <div class="mr-15">
                <v-row>
                    <v-col cols="12" sm="1" md="1" lg="1" v-if="logo != null">
                        <v-img
                            :lazy-src="logo"
                            max-height="64"
                            max-width="64"
                            :src="logo"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="11" md="11" lg="11">
                        <h2 class="mt-6">{{ channelName }}</h2>
                    </v-col>
                </v-row>
                <v-divider inline> </v-divider>
            </div>

            <div v-if="nangu != false && nangu_sources != false">
                <v-row class="mt-4 mr-10" v-if="nangu.length != 0">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-card flat color="white">
                                    <v-card-subtitle>
                                        <strong>
                                            Status kanálu:
                                        </strong>
                                    </v-card-subtitle>
                                    <v-card-text class="ml-12 text--center">
                                        <v-container>
                                            <v-row>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="6"
                                                    lg="6"
                                                >
                                                    <strong> Status: </strong>
                                                    <v-icon
                                                        class="ml-3"
                                                        color="success"
                                                        small
                                                        v-if="
                                                            nangu.active ===
                                                                true
                                                        "
                                                    >
                                                        mdi-check
                                                    </v-icon>
                                                    <v-icon
                                                        class="ml-3"
                                                        v-else
                                                        small
                                                        color="red"
                                                    >
                                                        mdi-close
                                                    </v-icon>
                                                </v-col>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="6"
                                                    lg="6"
                                                >
                                                    <strong
                                                        >Dynamický datový
                                                        tok:</strong
                                                    >
                                                    <v-icon
                                                        class="ml-3"
                                                        color="success"
                                                        small
                                                        v-if="
                                                            nangu.multibitrateCapable ===
                                                                true
                                                        "
                                                    >
                                                        mdi-check
                                                    </v-icon>
                                                    <v-icon
                                                        class="ml-3"
                                                        v-else
                                                        small
                                                        color="red"
                                                    >
                                                        mdi-close
                                                    </v-icon>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <!--  -->
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-card
                                    flat
                                    color="white"
                                    v-if="nangu != null"
                                >
                                    <v-card-subtitle>
                                        <strong>
                                            TimeShift:
                                        </strong>
                                    </v-card-subtitle>
                                    <v-card-text class="ml-12 text--center">
                                        <v-container>
                                            <v-row>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="6"
                                                    lg="6"
                                                >
                                                    <strong>
                                                        Timeshift status:
                                                    </strong>
                                                    <v-icon
                                                        class="ml-3"
                                                        color="success"
                                                        small
                                                        v-if="
                                                            nangu.timeShiftEnabled ===
                                                                true
                                                        "
                                                    >
                                                        mdi-check
                                                    </v-icon>
                                                    <v-icon
                                                        class="ml-3"
                                                        v-else
                                                        small
                                                        color="red"
                                                    >
                                                        mdi-close
                                                    </v-icon>
                                                </v-col>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="6"
                                                    lg="6"
                                                >
                                                    <strong>
                                                        Počet minut pro zpětné
                                                        přehrávání:
                                                    </strong>
                                                    <span
                                                        class="green--text ml-3"
                                                    >
                                                        {{
                                                            nangu.storedMediaDuration
                                                        }}
                                                    </span>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <!--  -->
                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-card
                                    flat
                                    color="white"
                                    v-if="nangu != null"
                                >
                                    <v-card-subtitle>
                                        <strong>
                                            PVR:
                                        </strong>
                                    </v-card-subtitle>
                                    <v-card-text class="ml-12 text--center">
                                        <v-container>
                                            <v-row>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="6"
                                                    lg="6"
                                                >
                                                    <strong>
                                                        PVR:
                                                    </strong>
                                                    <v-icon
                                                        class="ml-3"
                                                        color="success"
                                                        small
                                                        v-if="
                                                            nangu.pvrEnabled ===
                                                                true
                                                        "
                                                    >
                                                        mdi-check
                                                    </v-icon>
                                                    <v-icon
                                                        class="ml-3"
                                                        v-else
                                                        small
                                                        color="red"
                                                    >
                                                        mdi-close
                                                    </v-icon>
                                                </v-col>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="6"
                                                    lg="6"
                                                >
                                                    <strong>
                                                        nPVR:
                                                    </strong>
                                                    <v-icon
                                                        class="ml-3"
                                                        color="success"
                                                        small
                                                        v-if="
                                                            nangu.npvrEnabled ===
                                                                true
                                                        "
                                                    >
                                                        mdi-check
                                                    </v-icon>
                                                    <v-icon
                                                        class="ml-3"
                                                        v-else
                                                        small
                                                        color="red"
                                                    >
                                                        mdi-close
                                                    </v-icon>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <!--  -->

                            <v-col cols="12" sm="12" md="6" lg="6">
                                <v-card
                                    flat
                                    color="white"
                                    v-if="nangu != null"
                                >
                                    <v-card-subtitle>
                                        <strong>
                                            Rodičovská kontrola:
                                        </strong>
                                    </v-card-subtitle>
                                    <v-card-text class="ml-12 text--center">
                                        <v-container>
                                            <v-row>
                                                <v-col
                                                    cols="12"
                                                    sm="12"
                                                    md="6"
                                                    lg="6"
                                                >
                                                    <strong>
                                                        Rodičovská kontrola:
                                                    </strong>
                                                    <v-icon
                                                        class="ml-3"
                                                        color="success"
                                                        small
                                                        v-if="
                                                            nangu.parentalControl ===
                                                                true
                                                        "
                                                    >
                                                        mdi-check
                                                    </v-icon>
                                                    <v-icon
                                                        class="ml-3"
                                                        v-else
                                                        small
                                                        color="red"
                                                    >
                                                        mdi-close
                                                    </v-icon>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
            </div>

            <!-- sources -->
            <div class="mt-12 mr-15" v-if ="nangu_sources != false">
                <v-card flat elevation="0" v-if="nangu_sources.length != 0">
                    <v-card-title>
                        <v-text-field
                            color="grey lighten-1"
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Sources u všech isp"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :search="search"
                        :headers="header_sources"
                        :items="nangu_sources.sources"
                        :items-per-page="15"
                        class="elevation-0"
                        dense
                    ></v-data-table>
                </v-card>
            </div>
            <div
            class="mt-6"
                v-if="nangu_sources.length == 0 || nangu.lenght == 0"
            >
                <v-card flat class="mr-15">
                    <v-alert type="info">
                        Kanál nemá vyplněnu vazbu na Nangu
                    </v-alert>
                </v-card>
            </div>
        </v-container>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            search: "",
            channelName: null,
            logo: null,
            nangu: false,
            nangu_sources: false,
            header_sources: [
                {
                    text: "URI",
                    align: "start",
                    sortable: false,
                    value: "uri"
                },
                { text: "localityCode", value: "localityCode" },
                { text: "streamingProtocol", value: "streamingProtocol" },
                { text: "ingested", value: "ingested" },
                { text: "useAuthToken", value: "useAuthToken" },
                { text: "deviceTypes", value: "deviceTypes.deviceType" }
            ]
        };
    },
    components: {},
    created() {
        this.loadChannelNameById();
        this.loadChannelLogo();
        this.loadNanguChannelDetail();
        this.loadNanguChannelSources();
    },

    methods: {
        async loadChannelNameById() {
            await axios
                .post("channel/name", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.channelName = response.data;
                });
        },
        async loadChannelLogo() {
            await axios
                .post("channel/logo", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data === "not_exist") {
                        this.logo = null;
                    } else {
                        this.logo = response.data;
                    }
                });
        },
        async loadNanguChannelDetail() {
            await axios
                .post("channel/nangu", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.nangu = response.data;
                });
        },
        async loadNanguChannelSources() {
            await axios
                .post("channel/nangu/sources", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.nangu_sources = response.data;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChannelNameById();
            this.loadChannelLogo();
            this.loadNanguChannelDetail();
            this.loadNanguChannelSources();
        }
    }
};
</script>
