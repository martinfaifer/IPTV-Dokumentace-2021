<template>
    <v-main>
        <v-card
            flat
            color="#F5F5F7"
            v-if="kvalityOutput != null"
            @contextmenu="show($event)"
        >
            <v-card-subtitle>
                <strong>
                    Výstupní kvality
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-1 text--center">
                <v-container fluid>
                    <v-list-item
                        v-for="output in kvalityOutput"
                        :key="output.output"
                    >
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <span>
                                    <strong> {{ output.format }}p: </strong>
                                </span>
                                <span class="ml-3">
                                    {{ output.output }}
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
                <v-list-item @click="openDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit výstupní kvality
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-row justify="center">
            <v-dialog v-model="editDataDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Upravení kvalit</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p1080"
                                        label="URL pro 1080p"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p720"
                                        label="URL pro 720p"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p576"
                                        label="URL pro 576p"
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
            kvalityOutput: null,
            kvalityForDialog: [],
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadOutputKvality();
    },
    methods: {
        openDialog() {
            axios
                .post("h264/channel/kvalityForEdit", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    this.kvalityForDialog = response.data;
                });
            this.editDataDialog = true;
        },
        closeDialog() {
            this.editDataDialog = false;
            this.kvalityForDialog = [];
        },
        savedata() {
            axios
                .post("h264/channel/kvality/update", {
                    channelId: this.$route.params.id,
                    p1080: this.kvalityForDialog.p1080,
                    p720: this.kvalityForDialog.p720,
                    p576: this.kvalityForDialog.p576
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
                .post("h264/channel/kvality", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.kvalityOutput = response.data.data;
                    } else {
                        this.kvalityOutput = null;
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
