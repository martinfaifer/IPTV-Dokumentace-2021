<template>
    <v-main>
        <v-card
            flat
            color="#F5F5F7"
            v-if="multicasts != null"
            @contextmenu="show($event)"
        >
            <v-card-subtitle>
                <strong>
                    Zdrojové informace o kanálů
                </strong>
            </v-card-subtitle>

            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row v-for="multicast in multicasts" :key="multicast.id">
                        <v-col cols="12" sm="12" md="3">
                            <strong>Zdroj: </strong>
                            {{ multicast.zdroj }}
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <strong>Multicastová IP: </strong>
                            {{ multicast.multicast_ip }}
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="3"

                        >
                            <strong>IP k STB:</strong>
                            {{ multicast.stb_ip }}
                        </v-col>
                        <v-col cols="12" sm="12" md="3">
                            <strong>Typ:</strong>
                            <span
                                :class="{
                                    'green--text':
                                        multicast.isBackup === 'primar',
                                    'orange--text':
                                        multicast.isBackup === 'backup'
                                }"
                                v-text="multicast.isBackup"
                            ></span>
                        </v-col>
                    </v-row>
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
                <v-list-item @click="openMulticastEditDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-row justify="center">
            <v-dialog
                v-if="editData != null"
                v-model="editMulticastSources"
                persistent
                max-width="1000px"
            >
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace </span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-combobox
                                        dense
                                        v-model="editData.multicastZdroj"
                                        label="Zdroj multicastu"
                                        item-text="zdroj"
                                        item-value="id"
                                        :items="sources"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="editData.multicast_ip"
                                        label="Multicastová IP"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="editData.stb_ip"
                                        label="IP k STB"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-combobox
                                        dense
                                        v-model="editData.backup_multicastZdroj"
                                        label="Záložní zdroj multicastu"
                                        item-text="zdroj"
                                        item-value="id"
                                        :items="sources"
                                        required
                                        clearable
                                    ></v-combobox>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="editData.backup_multicast_ip"
                                        label="Multicastová IP"
                                        required
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
                            @click="editMulticastSources = false"
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
            editData: null,
            sources: [],
            editMulticastSources: false,
            multicasts: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadMulticast();
    },
    methods: {
        show(e) {
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },

        loadMulticast() {
            axios
                .post("multicast", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.multicasts = response.data.data;
                    } else {
                        this.multicasts = null;
                    }
                });
        },
        getMulticastSources() {
            axios.get("sources").then(response => {
                this.sources = response.data;
            });
        },
        openMulticastEditDialog() {
            axios
                .post("channel/multicast", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.getMulticastSources();
                        this.editData = response.data.data;
                        this.editMulticastSources = true;
                    } else {
                        this.editData = null;
                    }
                });
        },
        savedata() {
            axios
                .post("channel/multicast/edit", {
                    channelId: this.$route.params.id,
                    multicastZdroj: this.editData.multicastZdroj,
                    multicast_ip: this.editData.multicast_ip,
                    stb_ip: this.editData.stb_ip,
                    backup_multicastZdroj: this.editData.backup_multicastZdroj,
                    backup_multicast_ip: this.editData.backup_multicast_ip
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.editMulticastSources = false;
                        this.loadMulticast();
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadMulticast();
        }
    }
};
</script>
