<template>
    <v-main>

            <v-card
                flat
                color="white"
                v-if="multiplexor != null"
                @contextmenu="show($event)"
            >
                <v-card-subtitle>
                    <strong>
                        Multiplexer
                    </strong>
                </v-card-subtitle>
                <v-card-text class="text--center">
                    <v-container fluid>
                        <v-row v-if="multiplexor != null">
                            <v-col cols="12">
                                <span
                                    class="ml-6"
                                    v-if="multiplexor.name != null"
                                >
                                    {{ multiplexor.name }}
                                    <!-- info -->
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small icon>
                                                <v-icon
                                                    @click="show = !show"
                                                    small
                                                    v-on="on"
                                                >
                                                    mdi-information
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>
                                            <v-container
                                                v-if="
                                                    multiplexor.ip != null &&
                                                        multiplexor.login_user !=
                                                            null &&
                                                        multiplexor.login_password !=
                                                            null
                                                "
                                            >
                                                <v-row>
                                                    <strong>
                                                        IP:
                                                    </strong>
                                                    <span class="ml-2">
                                                        {{ multiplexor.ip }}
                                                    </span>
                                                </v-row>
                                                <v-row class="mt-2">
                                                    <strong>Přístup:</strong>
                                                    <span class="ml-2">
                                                        {{
                                                            multiplexor.login_user
                                                        }}
                                                        /
                                                        {{
                                                            multiplexor.login_password
                                                        }}
                                                    </span>
                                                </v-row>
                                            </v-container>
                                            <v-container v-else>
                                                Nejsou žádné detailní informace
                                            </v-container>
                                        </span>
                                    </v-tooltip>
                                    <!-- hyperlink na device -->
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                small
                                                icon
                                                link
                                                :href="
                                                    'http://' + multiplexor.ip
                                                "
                                                target="_blank"
                                            >
                                                <v-icon small v-on="on">
                                                    mdi-earth
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Přímý proklik na zařízení</span>
                                    </v-tooltip>
                                    <!-- hyperlink v ramci doku -->
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                small
                                                icon
                                                link
                                                :to="
                                                    '/device/' + multiplexor.id
                                                "
                                                target="_blank"
                                            >
                                                <v-icon small v-on="on">
                                                    mdi-arrow-right
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span
                                            >Proklik na zařízení v rámci
                                            dokumentace</span
                                        >
                                    </v-tooltip>
                                </span>
                            </v-col>
                        </v-row>
                        <v-row v-else>
                            <strong class="blue--text">
                                Není nadefinován
                            </strong>
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
                    <v-list-item @click="openEditMultiplexor()">
                        <v-list-item-icon>
                            <v-icon x-small>mdi-pencil</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Upravit
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="removeMultiplexor()">
                        <v-list-item-icon>
                            <v-icon color="red" x-small>mdi-delete</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Odebrat
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-row justify="center" v-if="multiplexor != null">
                <v-dialog
                    v-model="editMultiplexor"
                    persistent
                    max-width="1000px"
                >
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editace multiplexoru</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-combobox
                                            dense
                                            v-model="multiplexor.name"
                                            label="Multiplexor"
                                            :items="items"
                                            required
                                            clearable
                                        ></v-combobox>
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
                            <v-btn
                                :loading="loading"
                                color="green darken-1"
                                text
                                @click="savedata()"
                            >
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
            loading: false,
            items: [],
            editMultiplexor: false,
            multiplexor: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadMultiplexor();
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
        getMultiplexors() {
            axios.get("device/multiplexors").then(response => {
                this.items = response.data;
            });
        },
        loadMultiplexor() {
            axios
                .post("multiplexor", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.multiplexor = response.data.data;
                    } else {
                        this.multiplexor = null;
                    }
                });
        },
        openEditMultiplexor() {
            this.getMultiplexors();
            this.editMultiplexor = true;
        },

        closeDialog() {
            this.loadMultiplexor();
            this.editMultiplexor = false;
        },

        savedata() {
            this.loading = true;
            axios
                .patch("channel/multiplexer/edit", {
                    channelId: this.$route.params.id,
                    deviceName: this.multiplexor.name
                })
                .then(response => {
                    this.loading = false;
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.editMultiplexor = false;
                        this.loadMultiplexor();
                    } else {
                        this.editMultiplexor = false;
                    }
                });
        },

        removeMultiplexor() {
            axios
                .delete("channel/multiplexer/remove", {
                    data: {
                        channelId: this.$route.params.id
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadMultiplexor();
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadMultiplexor();
        }
    }
};
</script>
