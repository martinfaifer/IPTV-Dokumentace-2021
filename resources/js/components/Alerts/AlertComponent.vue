<template>
    <v-main>
        <transition name="slide-fade" mode="out-in">
            <v-snackbar
                v-if="alert != null"
                :timeout="-1"
                :value="true"
                top
                right
                color="white"
                elevation-12
                border="left"
                class="pt-12"
                transition="slide-x-transition"
            >
                <v-row class="ml-1">
                    <!-- <v-sheet
                        :color="alert.status"
                        elevation="0"
                        fill-height
                        width="3"
                    ></v-sheet> -->
                    <v-icon
                        v-if="alert.status === 'success'"
                        :color="alert.status"
                    >
                        mdi-check-circle
                    </v-icon>

                    <v-icon
                        v-if="alert.status === 'error'"
                        :color="alert.status"
                    >
                        mdi-close
                    </v-icon>

                    <v-icon
                        v-if="
                            alert.status === 'warning' ||
                                alert.status === 'info'
                        "
                        :color="alert.status"
                    >
                        mdi-exclamation
                    </v-icon>
                    <span
                        class="text--secondary ml-12 body-1"
                        v-html="alert.msg"
                    ></span>
                </v-row>
            </v-snackbar>
        </transition>

        <!-- websocket notifikace -->
        <transition name="slide-fade" mode="out-in">
            <v-snackbar
                elevation="2"
                transition="slide-fade"
                v-model="websocketSnackBar"
                :timeout="4000"
                top
                right
                color="white"
                class="pt-3"
            >
                <v-row class="ml-3">
                    <v-icon color="info">
                        mdi-information-outline
                    </v-icon>
                    <span
                        class="text--secondary ml-12 body-1"
                        v-html="websocketNotifications.notification"
                    >
                    </span>
                </v-row>
            </v-snackbar>
        </transition>
    </v-main>
</template>

<script>
export default {
    computed: {
        alert() {
            return this.$store.state.alerts;
        }
    },
    data() {
        return {
            websocketNotifications: [],
            websocketSnackBar: false
        };
    },

    created() {
        this.websocketData();
    },

    methods: {
        websocketData() {
            Echo.channel("notification").listen(
                "Broadcast_notification",
                alerts => {
                    this.websocketNotifications = alerts;
                    this.websocketSnackBar = true;
                    setTimeout(
                        function() {
                            this.websocketSnackBar = false;
                            this.websocketNotifications = [];
                        }.bind(this),
                        5000
                    );
                }
            );

            Echo.channel("notification").listen(
                "Broadcast_every_body",
                alerts => {
                    this.websocketNotifications = alerts;
                    this.websocketSnackBar = true;
                    setTimeout(
                        function() {
                            this.websocketSnackBar = false;
                            this.websocketNotifications = [];
                        }.bind(this),
                        5000
                    );
                }
            );
        }
    },

    watch: {
        alert() {
            if (this.alert != null) {
                setTimeout(
                    function() {
                        this.$store.state.alerts = null;
                    }.bind(this),
                    4000
                );
            } else {
                return;
            }
        }
    }
};
</script>
