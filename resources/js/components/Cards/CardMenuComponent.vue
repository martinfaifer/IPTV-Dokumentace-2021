<template>
    <v-main>
        <v-list dense nav class="ml-12" color="transparent">
            <v-list-item
                class="ml-3"
                link
                v-for="card in cards"
                :key="card.id"
                :to="'/card/' + card.id"
                @contextmenu="show($event, card.id)"
            >
                <v-list-item-title> {{ card.card_number }}</v-list-item-title>
            </v-list-item>
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
                <v-list-item @click="createNewCard = true">
                    <v-list-item-icon>
                        <v-icon color="green" x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Založit novou kartu
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="removeCard()">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat kartu
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- konec menu -->

        <v-row justify="center">
            <v-dialog v-model="createNewCard" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Založit novou kartu</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        type="number"
                                        label="číslo karty"
                                        v-model="cardNumber"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close()">
                            Zavřít
                        </v-btn>
                        <v-btn color="green darken-1" text @click="save()">
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <!-- konec create dialogu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            cardNumber: null,
            createNewCard: false,
            cards: [],
            cardId: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadCards();
    },
    methods: {
        close() {
            this.cardNumber = null;
            this.createNewCard = false;
        },
        async removeCard() {
            await axios
                .delete("card/remove", {
                    data: {
                        cardId: this.cardId
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadCards();
                });
        },
        async save() {
            await axios
                .post("card/create", {
                    cardNumber: this.cardNumber
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.cardNumber = null;
                    this.createNewCard = false;
                    this.loadCards();
                });
        },
        loadCards() {
            axios.get("cards").then(response => {
                this.cards = response.data;
            });
        },
        show(e, cardId) {
            this.cardId = cardId;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        }
    }
};
</script>
