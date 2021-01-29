<template>
    <v-main>
        <v-card flat color="#F5F5F7" height="250">
            <v-card-subtitle @contextmenu="showCreate($event)">
                <strong>
                    Poznámky
                </strong>
            </v-card-subtitle>
            <v-card-text class=" text--center">
                <v-container>
                    <v-row v-if="notes === null">
                        Neexistuje žádná poznámka
                    </v-row>
                    <v-row v-else>
                        <v-virtual-scroll
                            :items="notes"
                            :item-height="60"
                            height="150"
                        >
                            <template v-slot:default="{ item }">
                                <v-list-item dense>
                                    <v-list-item-content class="pt-1">
                                        <v-list-item-title>
                                            <v-textarea
                                                dense
                                                @contextmenu="
                                                    show($event, item.id)
                                                "
                                                readonly
                                                filled
                                                prepend-icon="mdi-comment"
                                                auto-grow
                                                rows="1"
                                                :value="item.poznamka"
                                            ></v-textarea>

                                            <v-menu
                                                dense
                                                v-model="showMenu"
                                                :position-x="x"
                                                :position-y="y"
                                                absolute
                                                offset-y
                                            >
                                                <v-list dense>
                                                    <v-list-item
                                                        @click="deleteNote()"
                                                    >
                                                        <v-list-item-icon>
                                                            <v-icon
                                                                x-small
                                                                color="red"
                                                                >mdi-delete</v-icon
                                                            >
                                                        </v-list-item-icon>
                                                        <v-list-item-title>
                                                            Odebrat
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-virtual-scroll>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-menu
                dense
                v-model="showMenuCreate"
                :position-x="x2"
                :position-y="y2"
                absolute
                offset-y
            >
                <v-list dense>
                    <v-list-item @click="newNoteDialog = true">
                        <v-list-item-icon>
                            <v-icon x-small color="green">mdi-plus</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Nová poznámka
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-card>

        <v-dialog v-model="newNoteDialog" persistent max-width="1000px">
            <v-card>
                <v-card-title>
                    <span class="headline">Nová poznámka</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-textarea v-model="noteText"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog()">
                        Zavřít
                    </v-btn>
                    <v-btn color="green darken-1" text @click="saveNote()">
                        Uložit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            newNoteDialog: false,
            noteText: null,
            noteId: null,
            notes: [],
            showMenu: false,
            showMenuCreate: false,
            x: 0,
            y: 0,
            x2: 0,
            y2: 0
        };
    },
    created() {
        this.loadNotes();
    },
    methods: {
        showCreate(e) {
            e.preventDefault();
            this.showMenuCreate = false;
            this.x2 = e.clientX;
            this.y2 = e.clientY;
            this.$nextTick(() => {
                this.showMenuCreate = true;
            });
        },
        show(e, noteId) {
            e.preventDefault();
            this.noteId = noteId;
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        async saveNote() {
            await axios
                .post("note/create", {
                    note: this.noteText,
                    id: this.$route.params.id,
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.newNoteDialog = false;
                    this.noteText = null;
                    this.loadNotes();
                });
        },
        closeDialog() {
            this.newNoteDialog = false;
            this.noteText = null;
        },
        async deleteNote() {
            await axios
                .post("note/delete", {
                    noteId: this.noteId
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadNotes();
                });
        },
        async loadNotes() {
            // obecná fn , kdy se bude hlídat uri a dle toho se bude hledat tag pro daný source
            await axios
                .post("notes", {
                    id: this.$route.params.id,
                    datatype: this.checkUri()
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.notes = response.data.notes;
                    } else {
                        this.notes = null;
                    }
                });
        },

        checkUri() {
            if (this.$route.path === "/channel/" + this.$route.params.id) {
                return "channelId";
            }

            if (
                this.$route.path ===
                "/channel/" + this.$route.params.id + "/h264"
            ) {
                return "channelId";
            }

            if (
                this.$route.path ===
                "/channel/" + this.$route.params.id + "/h265"
            ) {
                return "channelId";
            }

            if (this.$route.path === "/device/" + this.$route.params.id) {
                return "deviceId";
            }
        }
    },

    watch: {
        $route(to, from) {
            this.loadNotes();
        }
    }
};
</script>
