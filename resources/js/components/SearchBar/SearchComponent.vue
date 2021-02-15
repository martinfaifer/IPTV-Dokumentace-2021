<template>
    <v-main>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn
                    small
                    icon
                    @click="searchDialog()"
                    @keyup="searchDialog()"
                >
                    <v-icon color="blue" v-on="on">
                        mdi-magnify
                    </v-icon>
                </v-btn>
            </template>
            <span>
                <v-container>
                    <v-row>
                        Vyhledávání ...
                    </v-row>
                    <v-row class="mt-2">
                        Pro vyvolání tohoto okna stistkněte klávesu '/'
                    </v-row>
                </v-container>
            </span>
        </v-tooltip>

        <v-dialog v-model="searchDialogInput" width="500">
            <v-card>
                <v-card-text>
                    <v-autocomplete
                        autofocus
                        v-model.lazy="model"
                        :items.sync="entries"
                        hide-no-data
                        hide-selecte
                        item-text="result"
                        item-value="url"
                        placeholder="Vyhledejte v dokumentaci ... "
                        prepend-inner-icon="mdi-magnify"
                        return-object
                    >
                        <!-- <template v-slot:selection="{ item }">
                            <v-list-item>
                                <v-list-item-avatar
                                    max-height="20"
                                    max-width="20"
                                >
                                    <v-img
                                        v-if="item.img != false"
                                        :lazy-src="item.img"
                                        max-height="32"
                                        max-width="32"
                                        :src="item.img"
                                    ></v-img>
                                </v-list-item-avatar>
                                <v-list-item-title> {{ item.result }}</v-list-item-title>
                                <v-spacer></v-spacer>
                                <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
                            </v-list-item>
                        </template> -->
                    </v-autocomplete>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            searchDialogInput: false,
            descriptionLimit: 60,
            entries: [],
            isLoading: false,
            model: null,
            search: null
        };
    },
    created() {},
    methods: {
        searchDialog() {
            this.searchDialogInput = true;
            this.search = null;
            this.model = null;

            axios.get("search").then(response => {
                this.entries = response.data.entries;
            });
        }
    },
    mounted() {
        var self = this;
        window.addEventListener("keyup", function(event) {
            // vyhledáváaní za pomocí stistknutí ctrl
            if (event.keyCode == 111) {
                self.searchDialog();
            }
        });
    },
    watch: {
        model() {
            if (this.model == undefined) {
                // nic
            } else {
                this.$router.push("/channel");
                this.$router.push("/" + this.model.url);
                this.searchDialogInput = false;
                this.model = null;
            }
        }
    }
};
</script>
