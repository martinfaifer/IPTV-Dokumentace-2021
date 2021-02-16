<template>
    <v-main>
        <v-card flat color="#F5F5F7" height="250">
            <v-card-subtitle @contextmenu="show($event)">
                <v-row class="ml-1 mr-1 mt-1">
                    <strong>
                        Kalendář
                    </strong>
                    <v-spacer></v-spacer>
                    <v-icon small @click="createEventDialog = true">
                        mdi-plus
                    </v-icon>
                </v-row>
            </v-card-subtitle>
            <v-card-text class=" text--center">
                <v-container v-if="events != null">
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
                            <v-icon
                                small
                                color="red"
                                @click="deleteEvent(event.id)"
                            >
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
                <v-list-item @click="createEventDialog = true">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat událost
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-dialog v-model="createEventDialog" persistent max-width="1000px">
            <v-card>
                <v-card-title>
                    <span class="headline">Přidání nové události</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                    label="Den začátku události"
                                    type="date"
                                    v-model="start_day"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                    label="Čas začátku události"
                                    type="time"
                                    required
                                    v-model="start_time"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                    label="Den konce události"
                                    type="date"
                                    v-model="end_day"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-text-field
                                    label="Čas konce události"
                                    type="time"
                                    v-model="end_time"
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Popis události"
                                    v-model="event_note"
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-switch
                                    v-model="vypadek"
                                    label="Kanál bude mít výpadek"
                                ></v-switch>
                            </v-col>

                            <v-col cols="12" v-if="vypadek === true">
                                <v-checkbox
                                    v-model="checkbox_create_to_dohled"
                                    label="
                                            Propsání události do dohledu
                                        "
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog()">
                        Zavřít
                    </v-btn>
                    <v-btn color="green darken-1" text @click="saveEvent()">
                        Uložit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            x: 0,
            y: 0,
            events: null,
            start_day: "",
            start_time: "",
            end_day: "",
            end_time: "",
            event_note: "",
            vypadek: false,
            checkbox_create_to_dohled: false,
            createEventDialog: false
        };
    },

    created() {
        this.getEvents();
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
        getEvents() {
            axios
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
        },
        closeDialog() {
            this.start_day = "";
            this.start_time = "";
            this.end_day = "";
            this.end_time = "";
            this.event_note = "";
            this.vypadek = false;
            this.checkbox_create_to_dohled = false;
            this.createEventDialog = false;
        },
        saveEvent() {
            axios
                .post("event/create", {
                    channelId: this.$route.params.id,
                    start_day: this.start_day,
                    start_time: this.start_time,
                    end_day: this.end_day,
                    end_time: this.end_time,
                    event_note: this.event_note,
                    vypadek: this.vypadek,
                    checkbox_create_to_dohled: this.checkbox_create_to_dohled
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.createEventDialog = false;

                    this.getEvents();
                });
        },
        deleteEvent(eventId) {
            axios
                .delete("event/delete", {
                    data: {
                        eventId: eventId
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.getEvents();
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
