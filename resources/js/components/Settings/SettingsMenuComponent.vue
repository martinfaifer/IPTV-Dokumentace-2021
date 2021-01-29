<template>
    <v-main>
        <v-list dense nav>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="'/settings/' + item.route"
                class="pl-16"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-group no-action sub-group :value="true" >
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon> mdi-devices</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="ml-8">Zařízení</v-list-item-title>
                </template>

                <v-list-item
                    v-for="([title, icon, path], i) in devices"
                    :key="i"
                    link :to="'/settings/' + path"
                >
                    <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="title"></v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { title: "Štítky", icon: "mdi-tag", route: "tag" },
                {
                    title: "Uživatelé",
                    icon: "mdi-account-multiple",
                    route: "accounts"
                },
                // { title: "IPTV Balíčky", icon: "mdi-package-variant-closed", route: "iptv_package" },
                { title: "Zdroje multicastu", icon: "mdi-semantic-web", route: "multicast_sources" },
                { title: "API", icon: "mdi-arrow-collapse", route: "api" }
            ],
            devices: [
                ["DVB", "mdi-access-point", "dvb"],
                ["Satelit", "mdi-satellite-variant", "satelit"],
                ["Kategorie", "mdi-shape", "category"],
            ]
        };
    },

    created() {},
    methods: {}
};
</script>
