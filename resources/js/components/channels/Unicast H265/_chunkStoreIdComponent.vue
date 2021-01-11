<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="chunkStoreId != '0'">
            <v-card-subtitle>
                <strong>
                    Chunk store id
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row>
                        <span class="ml-6">
                            {{ chunkStoreId }}

                            <!-- info -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn small icon>
                                        <v-icon small v-on="on">
                                            mdi-information
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Informace o chunk Store id</span>
                            </v-tooltip>
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
            chunkStoreId: null
        };
    },
    created() {
        this.loadChunkStoreId();
    },
    methods: {
        loadChunkStoreId() {
            axios
                .post("unicast/chunkStoreId", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.chunkStoreId = response.data;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChunkStoreId();
        }
    }
};
</script>
