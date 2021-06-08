<template>
    <v-main style="background-color: #F1F5F9">
        <v-container style="background-color: #F1F5F9" class="mr-10">
            <v-row no-gutters>
                <v-col sm="1" md="1" lg="1">
                    <span class="text--disabled">Uživatelé</span>
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.users }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    Aktivní
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col sm="1" md="1" lg="1" class="mt-6">
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.users_blocket }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    Blokovaní
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
                <v-col sm="12" md="1" lg="1">
                    <span class="text--disabled">Kanály</span>
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.multicasts }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    Multicast
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col sm="12" md="1" lg="1" class="mt-6">
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.h264s }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    H264
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col sm="12" md="1" lg="1" class="mt-6">
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.h265s }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    H265
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
                <v-col sm="12" md="1" lg="1">
                    <span class="text--disabled">Zařízení</span>
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.devices }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    Celkem
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col sm="12" md="1" lg="1" class="mt-6">
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.cards }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    Karty
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
                <v-col sm="12" md="1" lg="1">
                    <span class="text--disabled">Wiki</span>
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.categories }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    Kategorie
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col sm="12" md="1" lg="1" class="mt-6">
                    <v-card outlined class="mx-auto" height="85px">
                        <v-container align="center" justify="center" fluid>
                            <p class="text-center headline">
                                {{ dashboard.topics }}
                            </p>
                            <p class="text-center text--disabled">
                                <small>
                                    Články
                                </small>
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-if="loading_charts === false" class="mr-10">
                <v-col cols="12" sm="12" md="4" lg="4">
                    <v-card flat height="400">
                        <v-card-subtitle>
                            <strong>
                                Celkový počet kanálů vs Celkový počet vazeb na
                                Nangu
                            </strong>
                        </v-card-subtitle>
                        <apexchart
                            height="300"
                            type="pie"
                            :options="chartOptions"
                            :series="series"
                        ></apexchart>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="8" lg="8">
                    <v-card flat height="400">
                        <v-card-subtitle>
                            <strong>
                                Počet změn za měsíc v kanálech
                            </strong>
                        </v-card-subtitle>
                        <apexchart
                            height="295"
                            type="area"
                            :options="chartOptions_changes"
                            :series="series_changes"
                        ></apexchart>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-if="loading_charts === false" class="mr-10">
                <v-col cols="12" sm="12" md="4" lg="4">
                    <v-card flat height="400">
                        <v-card-subtitle>
                            <strong>
                                TV Kanály vs Rádia
                            </strong>
                        </v-card-subtitle>
                        <apexchart
                            height="300"
                            type="pie"
                            :options="chartOptions_radio"
                            :series="series_radio"
                        ></apexchart>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            loading_charts: true,
            dashboard: [],
            chartOptions: {
                dataLabels: {
                    enabled: false
                },
                labels: []
            },
            series: null,
            chartOptions_radio: {
                dataLabels: {
                    enabled: false
                },
                labels: []
            },
            series_radio: null,
            chartOptions_changes: {
                dataLabels: {
                    enabled: false
                },
                chart: {
                    id: "Počet změn za měsíc"
                },
                xaxis: {
                    categories: null
                }
            },
            series_changes: [
                {
                    data: null
                }
            ]
        };
    },
    components: {},
    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("dashboard").then(response => {
                this.dashboard = response.data;
                this.series = response.data.piechart_series;
                this.chartOptions.labels = response.data.piechart_labels;

                this.series_radio = response.data.piechart_series_radio;
                this.chartOptions_radio.labels =
                    response.data.piechart_labels_radio;

                this.chartOptions_changes.xaxis.categories =
                    response.data.channles_chart.xaxis;
                this.series_changes[0].data =
                    response.data.channles_chart.seriesData;

                this.loading_charts = false;
            });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
