<template>
    <v-main style="background-color: #F1F5F9">
        <v-container fluid class="ml-3">
            <div class="mr-15" @contextmenu="show($event)">
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

            <div>
                <v-row class="mt-4 mr-15">
                    <v-container fluid>
                        <v-card flat class="mr-10" color="white">
                            <v-card-title>
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Vyhledat dokument"
                                    single-line
                                    hide-details
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <v-btn outlined color="info" @click="openNewDocuDialog()">
                                    Přidat dokument
                                </v-btn>
                            </v-card-title>
                            <v-data-table
                                no-data-text="Neexistují žádné soubory u kanálu"
                                dense
                                :headers="headers"
                                :items="files"
                                :search="search"
                            >
                            <template v-slot:item.created_at="{ item }">
                                   <span> {{new Date(item.created_at)}} </span>
                                </template>
                                <template v-slot:item.akce="{ item }">
                                    <a
                                        style="text-decoration:none"
                                        target="_blank"
                                        :href="item.path"
                                    >
                                        <v-icon small color="blue">
                                            mdi-download
                                        </v-icon>
                                    </a>
                                </template>
                            </v-data-table>
                        </v-card>
                    </v-container>
                </v-row>
            </div>
        </v-container>

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
                <v-list-item @click="openNewDocuDialog()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat nový dokument
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- dialogy -->
        <v-row justify="center">
            <v-dialog v-model="newDocuDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Vyberte dokument</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-file-input
                                        label="Dokument"
                                        @change="selectFile"
                                    ></v-file-input>
                                </v-col>
                                <v-col cols="12">
                                    <v-checkbox
                                        v-model="checkbox"
                                        label="Přejete si upozornit někoho?"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" v-if="checkbox != false">
                                    <v-autocomplete
                                        v-model="usersToNotify"
                                        :items="items"
                                        label="Vyberte lidi"
                                        item-text="email"
                                        item-value="email"
                                        dense
                                        chips
                                        multiple
                                    ></v-autocomplete>
                                </v-col>
                                <v-col cols="12" v-if="usersToNotify != null">
                                    <v-text-field
                                        v-model="textToSend"
                                        label="Text do zprávy"
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
                            @click="close()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveNewDocument()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- konec dialogu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            textToSend: null,
            usersToNotify: null,
            items: [],
            checkbox: false,
            newDocuDialog: false,
            channelName: null,
            logo: null,
            showMenu: false,
            x: 0,
            y: 0,
            file: "",
            files: [],
            search: "",
            headers: [
                {
                    text: "Název",
                    align: "start",
                    value: "name"
                },
                {
                    text: "Datum vytvoření",
                    value: "created_at"
                },
                {
                    text: "Akce",
                    value: "akce"
                }
            ]
        };
    },
    components: {},
    created() {
        this.loadChannelNameById();
        this.loadChannelLogo();
        this.showFiles();
    },

    methods: {
        selectFile(event) {
            this.file = event;
        },
        async showFiles() {
            await axios
                .post("storage/files", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.files = response.data;
                });
        },
        async saveNewDocument() {
            const formData = new FormData();
            formData.append("document", this.file, this.file.name);
            formData.append("channelId", this.$route.params.id);
            formData.append("usersToNotify", this.usersToNotify);
            formData.append("textToSend", this.textToSend);
            await axios.post("storage/add", formData).then(response => {
                this.$store.state.alerts = response.data.alert;
                this.usersToNotify = null;
                this.textToSend = null;
                this.showFiles();
                this.newDocuDialog = false;
                this.file = "";
                this.checkbox = false;
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
        openNewDocuDialog() {
            this.newDocuDialog = true;
            this.loadUsers();
        },
        async close() {
            this.newDocuDialog = false;
            this.file = null;
            this.usersToNotify = null;
            this.textToSend = null;
            this.checkbox = false;
        },
        async loadUsers() {
            await axios.get("users").then(response => {
                this.items = response.data.users;
            });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChannelNameById();
            this.loadChannelLogo();
            this.showFiles();
        }
    }
};
</script>
