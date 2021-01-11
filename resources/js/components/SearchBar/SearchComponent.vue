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
                        Pro vyvolání tohoto okna stistkněte klávesu 'alt'
                    </v-row>
                </v-container>
            </span>
        </v-tooltip>

        <v-dialog v-model="searchDialogInput" width="500">
            <v-card flat>
                <v-card-text class="pt-6">
                    <v-row>
                        <v-autocomplete
                            autofocus
                            v-model="model"
                            :items="items"
                            :loading="isLoading"
                            :search-input.sync="search"
                            cache-items
                            hide-no-data
                            hide-selected
                            item-text="result"
                            item-value="url"
                            placeholder="Vyhledejte v dokumentaci ... "
                            prepend-inner-icon="mdi-magnify"
                            return-object
                        >
                        </v-autocomplete>
                    </v-row>
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

            hints: true,
            isLoading: false,
            model: null,
            search: null,
            entries: []
        };
    },

    computed: {
        fields() {
            if (!this.model) return [];

            return Object.keys(this.model).map(key => {
                return {
                    key,
                    value: this.model[key] || "n/a"
                };
            });
        },
        items() {
            return this.entries.map(entry => {
                const result =
                    entry.result.length > this.result
                        ? entry.result.slice(0, this.result) + "..."
                        : entry.result;

                return Object.assign({}, entry, { result });
            });
        }
    },

    created() {},
    methods: {
        searchDialog() {
            this.searchDialogInput = true;
            this.search = null;
            this.model = null;
        }
    },

    mounted() {
        var self = this;
        window.addEventListener("keyup", function(event) {
            // vyhledáváaní za pomocí stistknutí ctrl
            if (event.keyCode == 18) {
                self.searchDialog();
            }
        });
    },
    watch: {
        $route(to, from) {},

        search() {
            if (this.items.length > 0) return;
            this.isLoading = true;
            // let currentObj = this;
            fetch("/search")
                .then(res => res.json())
                .then(res => {
                    const { entries } = res;
                    this.entries = entries;
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => (this.isLoading = false));
        },
        model() {
            if (this.model == undefined) {
                // nic
            } else {
                this.$router.push("/" + this.model.url);
                this.searchDialogInput = false;

                this.search = null;
                this.model = null;
            }
        }
    }
};
</script>
