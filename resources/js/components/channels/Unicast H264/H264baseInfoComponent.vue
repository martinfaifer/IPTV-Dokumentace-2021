<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div>
                <!-- Zobrazení názvu kanálu -->
                <h2>{{ channelName }} - H264</h2>
                <v-divider inline> </v-divider>
            </div>

            <div v-if="exist === 'exist'">
                <v-row class="mt-4">
                    <v-col>
                        <!-- component pro získání chunk store id -->
                        <chunkstoreid-component></chunkstoreid-component>
                    </v-col>
                    <v-col>
                        <!-- kvality component -->
                        <kvalityoutput-component></kvalityoutput-component>
                    </v-col>
                    <v-col>
                        <!-- m3u8 component -->
                        <m3u8-component></m3u8-component>
                    </v-col>
                </v-row>

                <v-row class="mt-4">
                    <v-col>
                        <!-- transcoder component -->
                        <transcoder-component></transcoder-component>
                    </v-col>
                    <v-col>
                        <!-- note component -->
                    </v-col>
                </v-row>
            </div>
            <div v-else-if="exist === 'notexist'" class="mt-4">
                <v-alert type="warning">
                    Tento formát není nastaven
                </v-alert>
            </div>

            <div v-else class=" mt-4">
                <span class="mt-12">
                    <i
                        style="color:#EAF0F1"
                        class="fas fa-spinner fa-spin fa-5x"
                    ></i>
                </span>
            </div>
        </v-container>
    </v-main>
</template>
<script>
import chunkStoreIdComponent from "./_chunkStoreIdComponent";
import kvalityOutputComponent from "./_kvalityOutputComponent";
import m3u8Component from "./_M38uComponent";
import transcoderComponent from "./_unicastDeviceComponent";

export default {
    data() {
        return {
            channelName: "",
            exist: ""
        };
    },
    components: {
        "chunkstoreid-component": chunkStoreIdComponent,
        "kvalityoutput-component": kvalityOutputComponent,
        "m3u8-component": m3u8Component,
        "transcoder-component": transcoderComponent
    },
    created() {
        this.loadChannelNameById();
        this.checkIfIs();
    },
    methods: {
        loadChannelNameById() {
            axios
                .post("channel/name", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.channelName = response.data;
                });
        },
        checkIfIs() {
            axios
                .post("h264/check", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.exist = response.data;
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
