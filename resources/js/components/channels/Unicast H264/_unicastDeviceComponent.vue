<template>
    <v-main>
        <v-card flat color="#F5F5F7" @contextmenu="show($event)">
            <v-card-subtitle>
                <strong>
                    Transcodér
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row v-if="transcoder != null">
                        <span class="ml-6">
                            {{ transcoder.name }}
                            <!-- info -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn small icon>
                                        <v-icon small v-on="on">
                                            mdi-information
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Rychlá informace o zařízení</span>
                            </v-tooltip>
                            <!-- hyperlink na device -->
                            <v-tooltip bottom v-if="transcoder.ip != null">
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :href="'http://' + transcoder.ip"
                                        target="_blank"
                                    >
                                        <v-icon small v-on="on">
                                            mdi-earth
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span>Přímý proklik na zařízení</span>
                            </v-tooltip>
                            <!-- hyperlink v ramci doku -->
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        small
                                        icon
                                        link
                                        :to="'/device/' + transcoder.id"
                                        target="_blank"
                                    >
                                        <v-icon small v-on="on">
                                            mdi-arrow-right
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <span
                                    >Proklik na zařízení v rámci
                                    dokumentace</span
                                >
                            </v-tooltip>
                        </span>
                    </v-row>
                    <v-row v-else>
                        <strong class="blue--text">
                            Není nadefinován transcoder
                        </strong>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>

         <v-menu
            dense
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <!-- menu -->
            <v-list dense>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Změnit transcoder
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            transcoder: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadTranscoder();
    },
    methods: {
        show(e) {
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
        loadTranscoder() {
            axios
                .post("h264/transcoder", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.transcoder = response.data.data;
                    } else {
                        this.transcoder = null;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadTranscoder();
        }
    }
};
</script>
