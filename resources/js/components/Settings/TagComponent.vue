<template>
    <v-main>
        <v-card flat>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Vyhledat štítek"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn outlined color="green" @click="NewTagDialog = true">
                    Nový štítek
                </v-btn>
            </v-card-title>
            <v-data-table :headers="headers" :items="tags" :search="search">
                <template v-slot:item.color="{ item }">
                    <v-card :color="item.color" width="30" height="20" flat>
                    </v-card>
                </template>

                <template v-slot:item.system="{ item }">
                    <v-icon v-if="item.system === 1" color="info">
                        mdi-check
                    </v-icon>
                </template>

                <template v-slot:item.akce="{ item }">
                    <!-- mdi-play -->
                    <v-icon @click="tagId = item.id, tagName = item.tagName, tagColor = item.color, openEditDialog()" small color="info"
                        >mdi-pencil</v-icon
                    >

                    <!-- mdi-stop -->
                    <v-icon @click="deleteTag(item.id)" small color="red"
                        >mdi-delete</v-icon
                    >
                </template>
            </v-data-table>
        </v-card>

        <!-- Dialogy -->

        <v-row justify="center">
            <v-dialog v-model="NewTagDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Nový štítek</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        label="Popis štítku"
                                        v-model="tagName"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-color-picker
                                        v-model="tagColor"
                                        dot-size="18"
                                        hide-inputs
                                        hide-sliders
                                        mode="rgba"
                                        show-swatches
                                        swatches-max-height="200"
                                    ></v-color-picker>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="NewTagDialog = false"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="SaveNewTag()"
                        >
                            Založit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <!-- edit dialog -->

        <v-row justify="center">
            <v-dialog v-model="EditTagDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace štítku</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        label="Popis štítku"
                                        v-model="tagName"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-color-picker
                                        v-model="tagColor"
                                        dot-size="18"
                                        hide-inputs
                                        hide-sliders
                                        mode="rgba"
                                        show-swatches
                                        swatches-max-height="200"
                                    ></v-color-picker>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="EditTagDialog = false"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="SaveEditTag()"
                        >
                            Upravit
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
            tagId: null,
            tagName: null,
            tagColor: null,
            NewTagDialog: false,
            EditTagDialog: false,
            search: "",
            headers: [
                {
                    text: "Popis",
                    align: "start",
                    value: "tagName"
                },
                { text: "Barva", value: "color" },
                { text: "Systémový", value: "system" },
                { text: "Akce", value: "akce" }
            ],
            tags: []
        };
    },
    components: {},
    created() {
        this.getTags();
    },
    methods: {
        async getTags() {
            await axios.get("tags").then(response => {
                if (response.data.status === "success") {
                    this.tags = response.data.tags;
                } else {
                    this.tags = [];
                }
            });
        },
        // radoby contstruktor pro editaci
        openEditDialog() {
            this.EditTagDialog = true;
        },
        async deleteTag(tagId) {
            await axios.post("tag/remove", {
                tagId: tagId
            }).then(response => {
                this.$store.state.alerts = response.data.alert;
                this.getTags();
            });
        },
        async SaveNewTag() {
            await axios
                .post("tag/create", {
                    tagName: this.tagName,
                    tagColor: this.tagColor
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.NewTagDialog = false;
                    this.getTags();
                });
        },
        async SaveEditTag() {
            await axios.post('tag/update', {
                tagId: this.tagId,
                tagName: this.tagName,
                tagColor: this.tagColor
            }).then(response => {
                this.$store.state.alerts = response.data.alert;
                this.EditTagDialog = false;
                this.getTags();
            })
            this.EditTagDialog = false;
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
