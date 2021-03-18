<template>
    <v-main>
        <v-list dense nav>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="'/settings/' + item.route"
                class="ml-14"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-group no-action sub-group :value="true">
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon> mdi-devices</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="ml-8">Zařízení</v-list-item-title>
                </template>

                <v-list-item
                    v-for="([title, icon, path], i) in devices"
                    :key="i"
                    link
                    :to="'/settings/' + path"
                >
                    <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="title"></v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group no-action sub-group :value="true">
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon> mdi-nas</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="ml-8">Storage</v-list-item-title>
                </template>

                <v-list-item
                    v-for="([title, icon, path], i) in storage"
                    :key="i"
                    link
                    :to="'/settings/' + path"
                >
                    <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="title"></v-list-item-title>
                </v-list-item>
            </v-list-group>

            <!-- Nangu -->
            <v-list-group no-action sub-group :value="true">
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon>mdi-television</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title
                        class="ml-8"
                        >Nangu</v-list-item-title
                    >
                </template>

                <v-list-item
                    v-for="([title, icon, path], i) in nangu"
                    :key="i"
                    link
                    :to="'/settings/' + path"
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
                {
                    title: "Zdroje multicastu",
                    icon: "mdi-semantic-web",
                    route: "multicast_sources"
                },
                { title: "API", icon: "mdi-arrow-collapse", route: "api" }
            ],
            devices: [
                ["DVB", "mdi-access-point", "dvb"],
                ["Satelit", "mdi-satellite-variant", "satelit"],
                ["Kategorie", "mdi-shape", "category"],
                ["Porty", "mdi-expansion-card", "interfaces"]
            ],
            storage: [["Loga kanálů", "mdi-post-outline", "channelLogos"]],
            nangu: [
                ["Streamery", "mdi-view-stream", "streamers"],
                ["Porty streamů", "mdi-export", "stream_ports"],
                ["Vazby streamer / port", "mdi-dropbox", "streamer_and_ports_bound"]
            ]
        };
    },

    created() {},
    methods: {}
};
</script>
