<template>
    <v-main>
        <v-treeview
            return-object
            dense
            open-on-click
            transition
            v-if="tree != null"
            :items="tree"
            class="pl-13 caption"
        >
            <template slot="label" slot-scope="props">
                <router-link
                    class="font-weight-regular black--text caption"
                    style="text-decoration:none"
                    link
                    :to="'/wiki/' + props.item.id"
                    >{{ props.item.name }}</router-link
                >
            </template>
        </v-treeview>

        <!-- <v-menu
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
                        Přidat novou Kategorii
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat kategorii
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu> -->
        <!-- konec menu -->

        <!-- konec create dialogu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            tree: [],
            treeId: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadTree();
    },
    methods: {
        loadTree() {
            axios.get("wiki").then(response => {
                this.tree.push(...response.data);
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
