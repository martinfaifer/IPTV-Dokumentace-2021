<template>
    <v-main>
        <div v-if="events != null">
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="800">
                    <v-card>
                        <v-card-title class="headline">
                            Na dnešní den jsou plánované události
                        </v-card-title>
                        <v-container class="body-1">
                            <v-list>
                                <v-list-item
                                    class="pl-3"
                                    link
                                    v-for="event in events"
                                    :key="event.id"
                                    :to="'/channel/' + event.channelId"
                                >
                                    <v-list-item-icon>
                                        <v-icon color="red" large
                                            >mdi-alert</v-icon
                                        >
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title class="headline"
                                            v-html="event.title"
                                        ></v-list-item-title>
                                        <v-divider ></v-divider>
                                        <v-list-item-subtitle
                                            class="pl-3 mt-3"
                                            v-html="event.note"
                                        ></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-container>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                            >
                                Zavřít
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </div>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            events: null,
            dialog: false
        };
    },

    created() {
        this.getEvents();
    },
    methods: {
        getEvents() {
            axios.get("events/today").then(response => {
                if (response.data.status === "success") {
                    this.events = response.data.events;
                    this.dialog = true;
                } else {
                    this.events = null;
                }
            });
        }
    }
};
</script>
