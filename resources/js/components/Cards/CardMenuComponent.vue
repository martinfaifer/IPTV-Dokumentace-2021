<template>
    <v-main>
        <v-list dense nav class="ml-12" color="#F5F5F7">
            <v-list-item
                class="pl-3"
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
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon color="green" x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Založit novou kartu
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="">
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

        <!-- konec create dialogu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
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
