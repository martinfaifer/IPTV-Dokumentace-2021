<template>
    <v-main>
        <v-card flat color="#F5F5F7" height="250">
            <v-card-subtitle>
                <strong>
                    Kalendář
                </strong>
            </v-card-subtitle>
            <v-card-text class=" text--center">
                <v-container  v-if="events != null">
                    <v-row>
                         <v-col cols="12" sm="12" md="2">
                             <strong>
                                 Den začátku
                             </strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="2">
                            <strong>
                                Čas začátku
                            </strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="2">
                            <strong>
                                Den konce
                            </strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="2">
                            <strong>
                                Čas konce
                            </strong>
                        </v-col>
                        <v-col cols="12" sm="12" md="2">
                            <strong>
                                Popis
                            </strong>
                        </v-col>
                         <v-col cols="12" sm="12" md="2">
                            <strong>
                                Akce
                            </strong>
                        </v-col>
                    </v-row>
                    <v-row v-for="event in events" :key="event.id">
                        <v-col cols="12" sm="12" md="2">
                            {{ event.start_day }}
                        </v-col>
                        <v-col cols="12" sm="12" md="2">
                            {{ event.start_time }}
                        </v-col>
                        <v-col cols="12" sm="12" md="2">
                            {{ event.end_day }}
                        </v-col>
                        <v-col cols="12" sm="12" md="2">
                            {{ event.end_time }}
                        </v-col>
                        <v-col cols="12" sm="12" md="2">
                            {{ event.note }}
                        </v-col>
                         <v-col cols="12" sm="12" md="2">
                            <v-icon small color="red">
                                mdi-delete
                            </v-icon>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container v-else> 
                    Neexistuje žádná událost
                </v-container>
            </v-card-text>
        </v-card>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            events: null
        };
    },

    created() {
        this.getEvents();
    },
    methods: {
        async getEvents() {
            await axios
                .post("event/channel", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.events = response.data.data;
                    } else {
                        this.events = null;
                    }
                });
        }
    },

    watch: {
        $route(to, from) {
            this.getEvents();
        }
    }
};
</script>
