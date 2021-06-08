<template>
    <v-main>
        <v-card flat color="white" height="350" v-if="chart.length != 0">
            <v-card-subtitle>
                <strong>
                    Log z transcodéru
                </strong>
            </v-card-subtitle>
            <v-card-text class=" text--center">
                <v-container>
                    <v-data-table
                        :headers="header_logs"
                        :items="chart"
                        :items-per-page="5"
                        class="elevation-0"
                        sort-by="created_at"
                        :sort-desc="true"
                        dense
                    >
                        <template v-slot:item.status="{ item }">
                            <span v-if="item.status === 'reboot'">
                                Kanál restartován
                            </span>
                            <span v-else-if="item.status === 'restart_ok'">
                                Kanál restartován po automatické změněně scriptu
                            </span>
                            <span v-else class="red--text">
                                Neznámý status
                            </span>
                        </template>

                        <template v-slot:item.created_at="{ item }">
                            <span v-html="new Date(item.created_at)"></span>
                        </template>
                    </v-data-table>
                </v-container>
            </v-card-text>
        </v-card>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            chart: [],
            header_logs: [
                {
                    text: "status",
                    value: "status"
                },
                { text: "vytvořeno", value: "created_at"}
            ]
        };
    },
    created() {
        this.loadChart();
    },
    methods: {
        loadChart() {
            axios
                .post("h264/transcoder/chart", {
                    id: this.$route.params.id,
                    channelType: this.checkUri()
                })
                .then(response => {
                    this.chart = response.data;
                });
        },

        checkUri() {
            if (
                this.$route.path ===
                "/channel/" + this.$route.params.id + "/h264"
            ) {
                return "h264";
            }

            if (
                this.$route.path ===
                "/channel/" + this.$route.params.id + "/h265"
            ) {
                return "h265";
            }
        }
    },

    watch: {
        $route(to, from) {
            this.loadChart();
        }
    }
};
</script>
