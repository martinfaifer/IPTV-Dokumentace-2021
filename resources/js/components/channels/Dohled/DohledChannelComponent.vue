<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div>
                <!-- Zobrazení názvu kanálu -->
                <h2>{{ channelName }} - informace z dohledu</h2>
                <v-divider inline> </v-divider>
            </div>

            <v-row class=" mt-6">
                <v-col>
                    <!-- component pro nacteni zdroje multicastu -->
                    <!-- <multicast-component></multicast-component> -->
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            channelName: ""
        };
    },
    created() {
        this.loadChannelNameById();
    },
    methods: {
        async loadChannelNameById() {
            await axios
                .post("channel/name", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.channelName = response.data;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChannelNameById();
        }
    }
};
</script>
