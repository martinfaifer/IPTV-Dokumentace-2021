<template>
    <v-main class="pl-16 pr-1" style="background-color: #F1F5F9">
        <v-container fluid v-if="topic === false" style="background-color: #F1F5F9">
            <v-row class="justify-center">
                <span class="pt-12">
                    <i
                        style="color:#596776"
                        class="fas fa-spinner fa-pulse fa-5x"
                    ></i>
                </span>
            </v-row>
        </v-container>
        <v-container fluid v-else-if="topic === null" class="ml-16" style="background-color: #F1F5F9">
            <!-- alert -->
            <v-alert type="error" class="pl-16">
                Neexistuje žádný článek s tímto ID
            </v-alert>
        </v-container>
        <v-container class="pl-16" fluid v-else style="background-color: #F1F5F9">
            <!-- content -->
            <v-toolbar fixed dense flat class="pl-16" color="#F1F5F9">
                <v-spacer></v-spacer>
                <v-icon @click="editDialog = true" small color="info"
                    >mdi-pencil</v-icon
                >
                <v-icon @click="delete_topic()" small color="red" class="ml-6"
                    >mdi-delete</v-icon
                >
            </v-toolbar>
            <v-container class="pl-16" v-html="topic"> </v-container>
        </v-container>

        <v-row justify="center">
            <v-dialog
                v-model="editDialog"
                persistent
                fullscreen
                transition="dialog-bottom-transition"
                hide-overlay
            >
                <v-toolbar dark color="#253341">
                    <v-btn icon dark @click="closeDialog()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Editace článku</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="saveDialog()" >
                            Upravit
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card>
                    <v-card-title class="headline"> </v-card-title>
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <span class="pl-6">
                                Editor
                            </span>
                            <v-card-text >
                                <ckeditor
                                    :editor="editor"
                                    v-model="topic"
                                    :config="editorConfig"
                                ></ckeditor>
                            </v-card-text>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <span class="pl-6">
                                Ukázka
                            </span>
                            <v-card-text v-html="topic"></v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-row>
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
                    items: [
                        "heading",
                        "bold",
                        "italic",
                        "alignment",
                        "imageUpload",
                        "linkImage",
                        "insertTable",
                        "mediaEmbed",
                        "bulletedList",
                        "numberedList",
                      
                    ],
                    shouldNotGroupWhenFull: true
                },
                language: "cs",
                heading: {}
            },
            topic: false,
            editDialog: false
        };
    },
    created() {
        this.loadTopic();
    },
    methods: {
        loadCategories() {
            axios.get("wiki").then(response => {
                this.$store.state.categories = response.data;
            });
        },

        loadTopic() {
            axios
                .post("wiki/topic", {
                    topicId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.topic = response.data.text;
                    } else {
                        this.topic = null;
                    }
                });
        },
        saveDialog() {
            axios
                .post("wiki/topic/update", {
                    topicId: this.$route.params.id,
                    topic: this.topic,
                    special: "topic"
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.editDialog = false;
                    this.loadTopic();
                });
        },
        delete_topic() {
            axios
                .post("wiki/topic/delete", {
                    topicId: this.$route.params.id
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadCategories();
                    this.loadTopic();
                });
        },
        closeDialog() {
            this.editDialog = false;
            this.loadTopic();
        }
    },
    watch: {
        $route(to, from) {
            this.loadTopic();
        }
    }
};
</script>
