<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="multicasts != null">
            <v-card-subtitle>
                <strong>
                    Zdrojové informace o kanálů
                </strong>
            </v-card-subtitle>

            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row v-for="multicast in multicasts" :key="multicast.id">
                        <span class="ml-6">
                            <strong>Zdroj: </strong>
                            {{ multicast.zdroj }}
                        </span>
                        <span class="ml-6">
                            <strong>Multicastová IP: </strong>
                            {{ multicast.multicast_ip }}
                        </span>
                        <span class="ml-6">
                            <strong>IP k STB:</strong>
                            {{ multicast.stb_ip }}
                        </span>
                        <span class="ml-6">
                            <strong>Typ:</strong>
                            <span
                                :class="{
                                    'green--text':
                                        multicast.isBackup === 'primar',
                                    'orange--text':
                                        multicast.isBackup === 'backup'
                                }"
                                v-text="multicast.isBackup"
                            ></span>
                        </span>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            multicasts: null
        };
    },

    created() {
        this.loadMulticast();
    },
    methods: {
        loadMulticast() {
            axios
                .post("multicast", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.multicasts = response.data.data;
                    } else {
                        this.multicasts = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadMulticast();
        }
    }
};
</script>
