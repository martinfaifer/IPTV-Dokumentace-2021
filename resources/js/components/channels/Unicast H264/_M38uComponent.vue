<template>
    <v-main>
        <v-card
            flat
            color="#F5F5F7"
            v-if="m3u8s != null"
            @contextmenu="show($event)"
        >
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

        <v-menu
            dense
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <!-- menu -->
            <v-list dense>
                <v-list-item @click="editDataDialog = true">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit výstupní m3u8
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-row justify="center">
            <v-dialog v-model="editDataDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Upravení m3u8</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="m3u8s.kdekoliv"
                                        label="m3u8 pro HLS kdekoliv"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        v-model="m3u8s.local"
                                        label="m3u8 pro HLS local"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        v-model="m3u8s.mobile"
                                        label="m3u8 pro HLS mobile"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="closeDialog()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn color="green darken-1" text @click="savedata()">
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            editDataDialog: false,
            m3u8s: [],
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadOutputKvality();
    },
    methods: {
        closeDialog() {
            this.editDataDialog = false;
        },
        savedata() {
            axios
                .post("h264/channel/m3u8/update", {
                    channelId: this.$route.params.id,
                    kdekoliv: this.m3u8s.kdekoliv,
                    local: this.m3u8s.local,
                    mobile: this.m3u8s.mobile,
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;

                    this.loadOutputKvality();
                    this.editDataDialog = false;
                });
        },
        show(e) {
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },

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
