<template>
    <v-main>
        <v-list dense nav class="ml-12">
            <v-list-item
                link
                v-for="channel in channels"
                :key="channel.id"
                :to="'/channel/' + channel.id"
                @contextmenu="show($event, channel.id)"
            >
                <v-list-item-title> {{ channel.nazev }}</v-list-item-title>
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
                <v-list-item @click="openDialogEditCurrentChannel">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat nový kanál
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat kanál
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- konec menu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            channels: null,
            channelId: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadchannels();
    },
    methods: {
        loadchannels() {
            axios.get("channels").then(response => {
                this.channels = response.data;
            });
        },
        show(e, channelId) {
            this.channelId = channelId;
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
