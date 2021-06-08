<template>
    <v-main>
        <v-card flat color="white" height="250">
            <v-card-subtitle @contextmenu="showCreate($event)">
                <v-row class="ml-1 mt-1 mr-1">
                    <strong>
                        Poznámky
                    </strong>
                    <v-spacer></v-spacer>
                    <v-icon small @click="newNoteDialog = true">
                        mdi-plus
                    </v-icon>
                </v-row>
            </v-card-subtitle>
            <v-card-text class=" text--center">
                <v-container>
                    <v-row v-if="notes === null">
                        Neexistuje žádná poznámka
                    </v-row>
                    <v-row v-else>
                        <v-virtual-scroll
                            :items="notes"
                            :item-height="120"
                            height="170"
                        >
                            <template v-slot:default="{ item }">
                                <v-list-item dense>
                                    <v-list-item-icon class="mt-6">
                                        <v-icon>mdi-email</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-sheet
                                            color="grey lighten-5"
                                            rounded="xl"
                                            @contextmenu="show($event, item.id)"
                                        >
                                            <v-container>
                                                <v-row class="ml-1 mt-1 mb-1">
                                                    <span
                                                        v-html="item.poznamka"
                                                    >
                                                    </span>
                                                </v-row>
                                                <span
                                                    justify-end
                                                    class="grey--text"
                                                >
                                                    <small>
                                                        Napsal:

                                                        {{ item.creator }}
                                                    </small>
                                                    <v-divider
                                                        inset
                                                        vertical
                                                    ></v-divider>
                                                    <small
                                                        v-text="
                                                            new Date(
                                                                item.created_at
                                                            )
                                                        "
                                                    >
                                                    </small>
                                                </span>
                                                <v-divider
                                                    dark
                                                    class="mt-3"
                                                ></v-divider>
                                            </v-container>
                                        </v-sheet>

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

        <v-dialog v-model="newNoteDialog" persistent max-width="800px">
            <v-card>
                <v-card-title>
                    <span class="headline">Nová poznámka</span>
                </v-card-title>
                <v-card-text>
                    <!-- <v-textarea v-model="noteText"></v-textarea> -->
                    <ckeditor
                        :editor="editor"
                        v-model="noteText"
                        :config="editorConfig"
                    ></ckeditor>
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
    data() {
        return {
            editor: ClassicEditor,
            editorConfig: {
                toolbar: {
                    items: ["bold", "italic", "alignment"],
                    shouldNotGroupWhenFull: true
                },
                language: "cs",
                heading: {}
                // The configuration of the editor.
            },
            newNoteDialog: false,
            noteText: "",
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
        saveNote() {
            axios
                .post("note/create", {
                    note: this.noteText,
                    id: this.$route.params.id
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.newNoteDialog = false;
                    this.noteText = "";
                    this.loadNotes();
                }).catch( err => {
                    console.log(err);
                });
        },
        closeDialog() {
            this.newNoteDialog = false;
            this.noteText = "";
        },
        deleteNote() {
            axios
                .delete("note/delete", {
                    data: {
                        noteId: this.noteId
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadNotes();
                });
        },
        loadNotes() {
            // obecná fn , kdy se bude hlídat uri a dle toho se bude hledat tag pro daný source
            axios
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
                "/channel/" + this.$route.params.id + "/multicast"
            ) {
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
