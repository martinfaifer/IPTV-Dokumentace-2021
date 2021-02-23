<template>
    <v-main>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn small icon @click="filterDialog = true">
                    <v-icon color="blue" v-on="on">
                        mdi-filter-variant
                    </v-icon>
                </v-btn>
            </template>
            <span>
                <v-container>
                    <v-row>
                        Pokročilé vyhledávání
                    </v-row>
                </v-container>
            </span>
        </v-tooltip>

        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn
                    class="ml-3"
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
                        Pro vyvolání tohoto okna stistkněte klávesu '¨'
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
                    </v-autocomplete>
                </v-card-text>
            </v-card>
        </v-dialog>

        <!-- filter dialog -->

        <v-dialog v-model="filterDialog" width="1000">
            <v-card height="800">
                <v-card-text>
                    <v-row>
                        <v-col sm="12" md="4" lg="4">
                            <v-autocomplete
                                autofocus
                                :items="itemsForFilter"
                                v-model="filter"
                                hide-no-data
                                hide-selecte
                                placeholder="Vyberte filtr ... "
                                prepend-inner-icon="mdi-magnify"
                                @change="searchForCurrentFilter()"
                            >
                            </v-autocomplete>
                        </v-col>
                        <v-col sm="12" md="8" lg="8">
                            <v-autocomplete
                                :items="filterData"
                                v-model="filterByFilter"
                                hide-no-data
                                placeholder="Vyberte data ... "
                                multiple
                                @change="findByFilter()"
                            >
                            </v-autocomplete>
                        </v-col>
                    </v-row>

                    <v-row v-if="filteredResult != null">
                        <v-col cols="12">
                            <v-text-field
                                v-model="searchInTable"
                                prepend-inner-icon="mdi-magnify"
                                label="Vyhledat v tabulce ... "
                                single-line
                                dense
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row v-if="filteredResult != null">
                        <v-col cols="12">
                            <v-data-table
                                :headers="headers"
                                :items="filteredResult"
                                :search="searchInTable"
                            >
                                <template v-slot:item.img="{ item }">
                                    <div
                                        v-if="
                                            item.img != false ||
                                                item.img != false
                                        "
                                    >
                                        <v-img
                                            :lazy-src="item.img"
                                            max-height="24"
                                            max-width="24"
                                            :src="item.img"
                                        ></v-img>
                                    </div>
                                    <div v-if="item.icon != 'false'">
                                        <v-icon>
                                            {{ item.icon }}
                                        </v-icon>
                                    </div>
                                </template>

                                <template v-slot:item.akce="{ item }">
                                    <v-btn small icon link :to="item.url">
                                        <v-icon small>
                                            mdi-arrow-right
                                        </v-icon>
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                    <v-row v-if="filteredResult == null" class="text-center blue--text">
                        <v-col cols="12">
                            <h3>
                                Zde se zobrazí výsledky
                            </h3>
                        </v-col>
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
            filterDialog: false,
            itemsForFilter: ["tag", "satelit", "zařízení"],
            filter: null,
            filterData: [],
            filterByFilter: null,
            filteredResult: null,
            searchInTable: "",
            headers: [
                {
                    text: "",
                    value: "img"
                },
                {
                    text: "",
                    value: "name"
                },
                {
                    text: "",
                    value: "akce"
                }
            ],
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
        },
        async searchForCurrentFilter() {
            await axios
                .post("search/filterData", {
                    filter: this.filter
                })
                .then(response => {
                    this.filterData = response.data;
                });
        },
        async findByFilter() {
            try {
                await axios
                    .get(
                        "search/filter/" +
                            this.filter +
                            "/" +
                            btoa(this.filterByFilter)
                    )
                    .then(response => {
                        this.filteredResult = response.data;
                    });
            } catch (error) {
                this.filteredResult = [];
            }
        }
    },
    mounted() {
        var self = this;
        window.addEventListener("keyup", function(event) {
            // vyhledáváaní za pomocí stistknutí ¨
            if (event.keyCode == 220) {
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
