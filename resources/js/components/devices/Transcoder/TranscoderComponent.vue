<template>
    <div>
        <v-container fluid class="pl-6">
            <!-- konec zobrazeni nazvu encoderu -->
            <v-row class="justify-center body-2">
                <!-- Využitá RAM -->
                <!-- <v-spacer></v-spacer> -->
                <v-col sm="12" md="2" lg="2">
                    <div v-if="parseInt(ramPercent) < 75">
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="ramPercent"
                            color="green"
                        >
                            <small>
                                <strong>
                                    Celkem RAM {{ ramUsage.total }}
                                </strong>

                                <v-divider></v-divider>
                                <strong> Volná RAM {{ ramUsage.free }} </strong>
                            </small>
                        </v-progress-circular>
                    </div>
                    <div
                        v-if="
                            parseInt(ramPercent) >= 75 &&
                                parseInt(ramPercent) < 88
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="parseInt(ramPercent)"
                            color="orange"
                        >
                            <small>
                                <strong>
                                    Celkem RAM {{ ramUsage.total }}
                                </strong>

                                <v-divider></v-divider>
                                <strong> Volná RAM {{ ramUsage.free }} </strong>
                            </small></v-progress-circular
                        >
                    </div>
                    <div v-if="parseInt(ramPercent) >= 88">
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="parseInt(ramPercent)"
                            color="red"
                        >
                            <small>
                                <strong>
                                    Celkem RAM {{ ramUsage.total }}
                                </strong>

                                <v-divider></v-divider>
                                <strong> Volná RAM {{ ramUsage.free }} </strong>
                            </small></v-progress-circular
                        >
                    </div>
                </v-col>
                <!-- Encoding -->
                <!-- <v-spacer></v-spacer> -->
                <v-col
                    sm="12"
                    md="2"
                    lg="2"
                    v-for="encoder in gpuStat.gpu"
                    v-bind:key="encoder.id"
                    v-show="encoder.encoder_util"
                >
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                encoder.encoder_util
                            ) <= 75
                        "
                    >
                        <v-progress-circular
                            class="mt-2 "
                            :size="150"
                            :width="4"
                            :value="encoder.encoder_util"
                            color="green"
                        >
                            <strong>
                                Encoder
                                {{ encoder.encoder_util }}
                            </strong>
                        </v-progress-circular>
                    </div>
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                encoder.encoder_util
                            ) > 75 &&
                                convert_string_to_int_and_remove_percent(
                                    encoder.encoder_util
                                ) < 88
                        "
                    >
                        <v-progress-circular
                            class="mt-2 "
                            :size="150"
                            :width="4"
                            :value="encoder.encoder_util"
                            color="orange"
                            ><strong>
                                Encoder
                                {{ encoder.encoder_util }}
                            </strong></v-progress-circular
                        >
                    </div>
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                encoder.encoder_util
                            ) >= 88
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="encoder.encoder_util"
                            color="red"
                            ><strong>
                                Encoder
                                {{ encoder.encoder_util }}
                            </strong></v-progress-circular
                        >
                    </div>
                </v-col>
                <!-- <v-spacer></v-spacer> -->
                <!-- Decoder -->
                <v-col
                    sm="12"
                    md="2"
                    lg="2"
                    v-for="decoder in gpuStat.gpu"
                    v-bind:key="decoder.id"
                    v-show="decoder.decoder_util"
                >
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                decoder.decoder_util
                            ) <= 75
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="decoder.decoder_util"
                            color="green"
                        >
                            <strong>
                                Decoder
                                {{ decoder.decoder_util }}
                            </strong>
                        </v-progress-circular>
                    </div>
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                decoder.decoder_util
                            ) > 75 &&
                                convert_string_to_int_and_remove_percent(
                                    decoder.decoder_util
                                ) < 88
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="decoder.decoder_util"
                            color="orange"
                        >
                            <strong>
                                Decoder
                                {{ decoder.decoder_util }}
                            </strong></v-progress-circular
                        >
                    </div>
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                decoder.decoder_util
                            ) >= 88
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="decoder.decoder_util"
                            color="red"
                        >
                            <strong>
                                Decoder
                                {{ decoder.decoder_util }}
                            </strong></v-progress-circular
                        >
                    </div>
                </v-col>
                <!-- <v-spacer></v-spacer> -->
                <!-- GPU -->

                <v-col
                    sm="12"
                    md="2"
                    lg="2"
                    v-for="gpu in gpuStat.gpu"
                    v-bind:key="gpu.id"
                    v-show="gpu.gpu_util"
                >
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                gpu.gpu_util
                            ) <= 75
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="gpu.gpu_util"
                            color="green"
                        >
                            <strong> GPU {{ gpu.gpu_util }} </strong>
                        </v-progress-circular>
                    </div>
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                gpu.gpu_util
                            ) > 75 &&
                                convert_string_to_int_and_remove_percent(
                                    gpu.gpu_util
                                ) < 88
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="gpu.gpu_util"
                            color="orange"
                        >
                            <strong>
                                GPU {{ gpu.gpu_util }}
                            </strong></v-progress-circular
                        >
                    </div>
                    <div
                        v-if="
                            convert_string_to_int_and_remove_percent(
                                gpu.gpu_util
                            ) >= 88
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="gpu.gpu_util"
                            color="red"
                        >
                            <strong>
                                GPU {{ gpu.gpu_util }}
                            </strong></v-progress-circular
                        >
                    </div>
                </v-col>
                <!-- <v-spacer></v-spacer> -->
                <!-- Teplota GPU -->

                <v-col
                    sm="12"
                    md="2"
                    lg="2"
                    v-for="gpuTemp in gpuStat.gpu"
                    v-bind:key="gpuTemp.id"
                    v-show="gpuTemp.gpu_temp"
                >
                    <div v-if="gpuTemp.gpu_temp <= '70 C'">
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="gpuTemp.gpu_temp"
                            color="green"
                        >
                            <strong>
                                GPU Temp
                                {{ gpuTemp.gpu_temp }}
                            </strong>
                        </v-progress-circular>
                    </div>
                    <div
                        v-if="
                            gpuTemp.gpu_temp > '70 C' &&
                                gpuTemp.gpu_temp < '88 C'
                        "
                    >
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="gpuTemp.gpu_temp"
                            color="orange"
                            ><strong>
                                GPU Temp
                                {{ gpuTemp.gpu_temp }}
                            </strong></v-progress-circular
                        >
                    </div>
                    <div v-if="gpuTemp.gpu_temp >= '88 C'">
                        <v-progress-circular
                            class="mt-2"
                            :size="150"
                            :width="4"
                            :value="gpuTemp.gpu_temp"
                            color="red"
                            ><strong>
                                GPU Temp
                                {{ gpuTemp.gpu_temp }}
                            </strong></v-progress-circular
                        >
                    </div>
                </v-col>
                <!-- <v-spacer></v-spacer> -->
                <!-- Power -->

                <v-col
                    sm="12"
                    md="2"
                    lg="2"
                    v-for="powerDraw in gpuStat.gpu"
                    v-bind:key="powerDraw.id"
                    v-show="powerDraw.power_draw"
                >
                    <v-progress-circular
                        class="mt-2"
                        :size="150"
                        :width="4"
                        :value="powerDraw.power_draw"
                        color="green"
                    >
                        <strong> Power {{ powerDraw.power_draw }} </strong>
                    </v-progress-circular>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            transcoderData: null,
            gpuStat: "",
            ramUsage: "",
            ramTotal: "",
            ramUsed: "",
            ramPercent: "",
            loadingInterval: null
        };
    },

    mounted() {
        this.loadingInterval = setInterval(
            function() {
                this.loadTranscoderData();
            }.bind(this),
            10000
        );
    },

    created() {
        this.loadTranscoderData();
    },
    methods: {
        convert_string_to_int_and_remove_percent(string) {
            if (string) {
                string = string.replace(" %", "");
                return parseInt(string);
            }
        },
        loadTranscoderData() {
            let currentObj = this;
            axios
                .post("device/transcoderData", {
                    deviceId: this.$route.params.id
                })
                .then(function(response) {
                    if (response.data != null) {
                        currentObj.transcoderData = "string";
                        if (response.data.gpu) {
                            if (
                                typeof response.data.gpu.fb_memory_usage !==
                                "undefined"
                            ) {
                                currentObj.gpuStat = response.data;
                                if (
                                    typeof response.data.gpu.fb_memory_usage !==
                                    "undefined"
                                ) {
                                    currentObj.ramUsage =
                                        response.data.gpu.fb_memory_usage;
                                    currentObj.ramTotal = currentObj.ramUsage.total.replace(
                                        " MiB",
                                        ""
                                    );
                                    currentObj.ramUsed = currentObj.ramUsage.used.replace(
                                        " MiB",
                                        ""
                                    );
                                    currentObj.ramPercent =
                                        (currentObj.ramUsed * 100) /
                                        currentObj.ramTotal;
                                }
                            }
                        } else {
                            currentObj.transcoderData = null;
                        }
                    }
                });
        },
        destroyEveryThing() {
            this.gpuStat = "";
            this.ramUsage = "";
            this.ramTotal = "";
            this.ramUsed = "";
            this.ramPercent = "";
            this.loadingInterval = null;
        }
    },
    watch: {
        $route(to, from) {
            this.loadTranscoderData();
            this.destroyEveryThing();
        }
    },
    beforeDestroy: function() {
        clearInterval(this.loadingInterval);
    }
};
</script>
