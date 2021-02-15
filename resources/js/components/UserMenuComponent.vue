<template>
    <v-main>
        <v-list dense nav>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="'/user' + item.route"
                class="ml-14"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { title: "Přehled", icon: "mdi-card-search", route: "/prehled" },
                {
                    title: "Změna hesla ",
                    icon: "mdi-lock",
                    route: "/password"
                },
            ]
        };
    },

    created() {},
    methods: {}
};
</script>
