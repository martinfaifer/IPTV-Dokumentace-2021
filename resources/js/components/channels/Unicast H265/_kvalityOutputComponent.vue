<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="kvalityOutput != null">
            <v-card-subtitle>
                <strong>
                    Výstupní kvality
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-1 text--center">
                <v-container fluid>
                    <v-list-item
                        v-for="output in kvalityOutput"
                        :key="output.output"
                    >
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <span>
                                    <strong>
                                        {{ output.format }}p:
                                    </strong>
                                </span>
                                <span class="ml-3">
                                    {{ output.output }}
                                </span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-container>
            </v-card-text>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            kvalityOutput: null
        };
    },
    created() {
        this.loadOutputKvality();
    },
    methods: {
        loadOutputKvality() {
            axios
                .post("h264/channel/kvality", {
                    channelId: this.$route.params.id,
                    type: "h265"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.kvalityOutput = response.data.data;
                    } else {
                        this.kvalityOutput = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadOutputKvality();
        }
    }
};
</script>
