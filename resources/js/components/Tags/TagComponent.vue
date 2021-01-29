<template>
    <v-main>
        <v-toolbar fixed dense flat>
            <v-spacer></v-spacer>
            <div class="text-center" v-for="tag in tags" :key="tag.id">
                <v-chip
                    small
                    :color="tag.color"
                    dense
                    label
                    class="ma-2 white--text"
                    @contextmenu="show($event, tag.id)"
                    >{{ tag.tagName }}</v-chip
                >
            </div>
            <div>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" @click="OpenDialogForNewTag()">
                            mdi-plus
                        </v-icon>
                    </template>
                    <span>Nový štítek</span>
                </v-tooltip>
            </div>
        </v-toolbar>

        <v-row justify="center">
            <v-dialog v-model="NewTagsDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Přidat štítek</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-autocomplete
                                        autofocus
                                        v-model="tagToAdd"
                                        :items="addetableTags"
                                        hide-no-data
                                        hide-selected
                                        item-text="tagName"
                                        item-value="id"
                                    >
                                    </v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="NewTagsDialog = false"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn color="green darken-1" text @click="addtag()">
                            Založit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

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
                <v-list-item @click="removeTag()">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            tagId: null,
            menu: false,
            tags: [],
            type: null,
            addetableTags: null,
            NewTagsDialog: false,
            tagToAdd: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadTags();
    },
    methods: {
        show(e, tagId) {
            this.tagId = tagId;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        loadTags() {
            // obecná fn , kdy se bude hlídat uri a dle toho se bude hledat tag pro daný source
            axios
                .post("tags", {
                    id: this.$route.params.id,
                    datatype: this.checkUri()
                })
                .then(response => {
                    this.tags = response.data;
                });
        },

        checkUri() {
            if (this.$route.path === "/channel/" + this.$route.params.id) {
                this.type = "multicast";
                return "multicastId";
            }

            if (
                this.$route.path ===
                "/channel/" + this.$route.params.id + "/h264"
            ) {
                this.type = "h264";
                return "h264Id";
            }

            if (
                this.$route.path ===
                "/channel/" + this.$route.params.id + "/h265"
            ) {
                this.type = "h265";
                return "h265Id";
            }

            if (this.$route.path === "/device/" + this.$route.params.id) {
                this.type = "device";
                return "deviceId";
            }
        },

        OpenDialogForNewTag() {
            axios.get("tags").then(response => {
                this.addetableTags = response.data.tags;
                this.NewTagsDialog = true;
            });
        },
        addtag() {
            axios
                .post("tag/add", {
                    id: this.$route.params.id,
                    type: this.type,
                    tagId: this.tagToAdd
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.NewTagsDialog = false;
                    this.loadTags();
                });
        },
        removeTag() {
            axios
                .post("tag/removeFrom", {
                    tagId: this.tagId
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadTags();
                });
        }
    },

    watch: {
        $route(to, from) {
            this.loadTags();
        }
    }
};
</script>
