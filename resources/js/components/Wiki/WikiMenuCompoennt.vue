<template>
    <v-main>
        <v-list dense nav>
            <v-list-group
                v-for="categorie in categories"
                :key="categorie.id"
                no-action
                sub-group
                :value="false"
            >
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon small>{{ categorie.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title
                        @contextmenu="show($event, categorie.id)"
                        >{{ categorie.category }}</v-list-item-title
                    >
                </template>

                <v-list-item
                    v-for="topic_title in categorie.topics"
                    :key="topic_title.id"
                    link
                    :to="'/wiki/' + topic_title.id"
                    @contextmenu="showTopic($event, topic_title.id)"
                >
                    <v-list-item-icon>
                        <v-icon small> {{ topic_title.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        {{ topic_title.topic_title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>

        <v-menu
            dense
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <v-list dense>
                <v-list-item @click="openUpdateCategoryDialog()">
                    <v-list-item-icon>
                        <v-icon color="info" x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit kategorii
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="openNewCategoryDialog()">
                    <v-list-item-icon>
                        <v-icon color="green" x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat novou kategorii
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="openNewTopicDialog()">
                    <v-list-item-icon>
                        <v-icon color="green" x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat nový článek
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="deleteCategory()">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat kategorii
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-menu
            dense
            v-model="showMenuTopic"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <v-list dense>
                <v-list-item @click="openUpdateTopicDialog()">
                    <v-list-item-icon>
                        <v-icon color="info" x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit článek
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- dialogy -->
        <v-row justify="center">
            <v-dialog v-model="createCategoryDialog" persistent max-width="600">
                <v-card>
                    <v-card-title>
                        <span class="headline">Založení nové kategorie</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        dense
                                        v-model="kategorie"
                                        label="Nová kategorie"
                                    ></v-text-field>
                                </v-col>
                                <!-- ikony -->
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    Vyberte ikonu
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col
                                    v-for="icon in icons"
                                    :key="icon.id"
                                    class="d-flex child-flex"
                                    cols="1"
                                >
                                    <v-icon
                                        v-html="icon['mdi-icon']"
                                        @click="selectNewIcon(icon['mdi-icon'])"
                                    >
                                    </v-icon>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close()">
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="createCategory()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <v-row justify="center">
            <v-dialog v-model="createTopicDialog" persistent max-width="800" fill-height>
                <v-card>
                    <v-card-title>
                        <span class="headline">Založení nového článku</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        dense
                                        v-model="topic_title"
                                        label="Titulek"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <ckeditor
                                        :editor="editor"
                                        v-model="topic"
                                        :config="editorConfig"
                                    ></ckeditor>
                                </v-col>

                                <v-col cols="12" sm="12" md="12" lg="12">
                                    Vyberte ikonu
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col
                                    v-for="icon in icons"
                                    :key="icon.id"
                                    class="d-flex child-flex"
                                    cols="1"
                                >
                                    <v-icon
                                        v-html="icon['mdi-icon']"
                                        @click="selectNewIcon(icon['mdi-icon'])"
                                    >
                                    </v-icon>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="createTopicDialog = false"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveNewTopic()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <v-row justify="center">
            <v-dialog v-model="updateCategoryDialog" persistent max-width="600">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace kategorie</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        dense
                                        v-model="edit_category.main_kategorie"
                                        label="kategorie"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    stávající ikona
                                    <v-icon>
                                        {{ edit_category.icon }}
                                    </v-icon>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    lg="12"
                                    v-if="new_icon != null"
                                >
                                    nově vybraná ikona
                                    <v-icon>
                                        {{ new_icon }}
                                    </v-icon>
                                    <v-btn
                                        text
                                        color="info"
                                        small
                                        @click="new_icon_reset()"
                                    >
                                        resetovat novou ikonu
                                    </v-btn>
                                </v-col>
                                <!-- ikony -->
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    Vyberte ikonu
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col
                                    v-for="icon in icons"
                                    :key="icon.id"
                                    class="d-flex child-flex"
                                    cols="1"
                                >
                                    <v-icon
                                        v-html="icon['mdi-icon']"
                                        @click="selectNewIcon(icon['mdi-icon'])"
                                    >
                                    </v-icon>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close()">
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="updateCategory()"
                        >
                            Upravit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <v-row justify="center">
            <v-dialog v-model="updateTopicDialog" persistent max-width="800">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace článku</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        dense
                                        v-model="edit_topic.topic_title"
                                        label="Titulek"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    lg="12"
                                    v-if="edit_topic.icon != null"
                                >
                                    stávající ikona
                                    <v-icon>
                                        {{ edit_topic.icon }}
                                    </v-icon>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    lg="12"
                                    v-if="new_icon != null"
                                >
                                    nově vybraná ikona
                                    <v-icon>
                                        {{ new_icon }}
                                    </v-icon>
                                    <v-btn
                                        text
                                        color="info"
                                        small
                                        @click="new_icon_reset()"
                                    >
                                        resetovat novou ikonu
                                    </v-btn>
                                </v-col>
                                <!-- ikony -->
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    Vyberte ikonu
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col
                                    v-for="icon in icons"
                                    :key="icon.id"
                                    class="d-flex child-flex"
                                    cols="1"
                                >
                                    <v-icon
                                        v-html="icon['mdi-icon']"
                                        @click="selectNewIcon(icon['mdi-icon'])"
                                    >
                                    </v-icon>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close()">
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="updateTopic()"
                        >
                            Upravit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        <!-- konec dialogů -->
    </v-main>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    computed: {
        categories() {
            return this.$store.state.categories;
        }
    },

    data() {
        return {
            editor: ClassicEditor,
            editorConfig: {
                // The configuration of the editor.
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
                        "blockQuote",
                        "codeBlock"
                    ],
                    shouldNotGroupWhenFull: true
                },
                language: "cs",
                heading: {}
            },
            treeId: null,
            showMenu: false,
            x: 0,
            y: 0,
            showMenuTopic: false,
            xTopic: 0,
            yTopic: 0,
            topicId: "",
            categoryId: "",
            createCategoryDialog: false,
            updateCategoryDialog: false,
            createTopicDialog: false,
            updateTopicDialog: false,
            kategorie: "",
            icons: [],
            edit_category: "",
            edit_topic: "",
            topic: "",
            topic_title: "",
            new_icon: null
        };
    },

    created() {
        this.loadCategories();
    },
    methods: {
        loadCategories() {
            axios.get("wiki").then(response => {
                this.$store.state.categories = response.data;
            });
        },
        show(e, categoryId) {
            this.categoryId = categoryId;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },

        showTopic(e, topicId) {
            this.topicId = topicId;
            e.preventDefault();
            this.showMenuTopic = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenuTopic = true;
            });
        },
        async openUpdateCategoryDialog() {
            await this.showCategory();
            this.updateCategoryDialog = true;
            this.getIcons();
        },
        updateCategory() {
            axios
                .post("wiki/update", {
                    id: this.categoryId,
                    kategorie: this.edit_category.main_kategorie,
                    icon: this.edit_category.icon,
                    new_icon: this.new_icon
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.alert.status === "success") {
                        this.loadCategories();
                        this.close();
                    }
                });
        },
        openNewCategoryDialog() {
            this.createCategoryDialog = true;
            this.getIcons();
        },
        deleteCategory() {
            axios
                .post("wiki/delete", {
                    id: this.categoryId
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.alert.status === "success") {
                        this.loadCategories();
                    }
                });
        },
        async openNewTopicDialog() {
            this.createTopicDialog = true;
            await this.getIcons();
        },
        saveNewTopic() {
            axios
                .post("wiki/topic/create", {
                    id: this.categoryId,
                    topic: this.topic,
                    topic_title: this.topic_title,
                    new_icon: this.new_icon
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.alert.status === "success") {
                        this.loadCategories();
                        this.close();
                    }
                });
        },
        getIcons() {
            axios.get("icons").then(response => {
                this.icons = response.data;
            });
        },
        selectNewIcon(newIcon) {
            this.new_icon = newIcon;
        },
        new_icon_reset() {
            this.new_icon = null;
        },
        showCategory() {
            axios
                .post("wiki", {
                    id: this.categoryId
                })
                .then(response => {
                    this.edit_category = response.data;
                });
        },
        async openUpdateTopicDialog() {
            this.updateTopicDialog = true;
            await axios
                .post("wiki/topic", {
                    topicId: this.topicId
                })
                .then(response => {
                    this.edit_topic = response.data;
                });

            this.getIcons();
        },
        updateTopic() {
            axios
                .post("wiki/topic/update", {
                    topicId: this.topicId,
                    topic: this.edit_topic.text,
                    topic_title: this.edit_topic.topic_title,
                    icon: this.edit_topic.icon,
                    new_icon: this.new_icon
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.alert.status === "success") {
                        this.loadCategories();
                        this.close();
                    }
                });
        },
        createCategory() {
            axios
                .post("wiki/create", {
                    kategorie: this.kategorie,
                    icon: this.new_icon
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.alert.status === "success") {
                        this.loadCategories();
                        this.close();
                    }
                });
        },
        close() {
            this.topic = "";
            this.topic_title = "";
            this.categoryId = "";
            this.topicId = "";
            this.kategorie = "";
            this.new_icon = null;
            this.createCategoryDialog = false;
            this.createTopicDialog = false;
            this.updateCategoryDialog = false;
            this.updateTopicDialog = false;
        }
    }
};
</script>
