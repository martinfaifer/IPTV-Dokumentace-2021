<template>
    <v-main>
        <v-container fluid class="ml-3">
            <v-row class="mt-4 mr-15">
                <v-col cols="12" class="ml-15"
                    ><v-row class="ml-15">
                        <v-col class="ml-15">
                            <v-row class="fill-height">
                                <v-col>
                                    <div>
                                        <!-- Zobrazení názvu zařízení -->
                                        <h2>Plánované události</h2>
                                        <v-divider inline> </v-divider>
                                    </div>

                                    <v-sheet height="64" class="mt-6">
                                        <v-toolbar flat>
                                            <v-btn
                                                outlined
                                                class="mr-4"
                                                color="grey darken-2"
                                                @click="setToday"
                                            >
                                                Dnes
                                            </v-btn>
                                            <v-btn
                                                fab
                                                text
                                                small
                                                color="grey darken-2"
                                                @click="prev"
                                            >
                                                <v-icon small>
                                                    mdi-chevron-left
                                                </v-icon>
                                            </v-btn>
                                            <v-btn
                                                fab
                                                text
                                                small
                                                color="grey darken-2"
                                                @click="next"
                                            >
                                                <v-icon small>
                                                    mdi-chevron-right
                                                </v-icon>
                                            </v-btn>
                                            <v-toolbar-title
                                                v-if="$refs.calendar"
                                            >
                                                {{ $refs.calendar.title }}
                                            </v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-menu bottom right>
                                                <template
                                                    v-slot:activator="{
                                                        on,
                                                        attrs
                                                    }"
                                                >
                                                    <v-btn
                                                        outlined
                                                        color="grey darken-2"
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    >
                                                        <span>{{
                                                            typeToLabel[type]
                                                        }}</span>
                                                        <v-icon right>
                                                            mdi-menu-down
                                                        </v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item
                                                        @click="type = 'day'"
                                                    >
                                                        <v-list-item-title
                                                            >Denní</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                    <v-list-item
                                                        @click="type = 'week'"
                                                    >
                                                        <v-list-item-title
                                                            >Týdenní</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                    <v-list-item
                                                        @click="type = 'month'"
                                                    >
                                                        <v-list-item-title
                                                            >Měsíční</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>

                                            <v-spacer></v-spacer>
                                            <v-btn
                                                outlined
                                                color="green"
                                                @click="newEvent = true"
                                            >
                                                Nová událost
                                            </v-btn>
                                        </v-toolbar>
                                    </v-sheet>
                                    <v-sheet height="600">
                                        <v-calendar
                                            ref="calendar"
                                            v-model="focus"
                                            color="primary"
                                            :events="events"
                                            :event-color="getEventColor"
                                            :type="type"
                                            weekdays="1,2,3,4,5,6,0"
                                            locale="cs"
                                            @click:event="showEvent"
                                            @click:more="viewDay"
                                            @click:date="viewDay"
                                        ></v-calendar>
                                        <v-menu
                                            v-model="selectedOpen"
                                            :close-on-content-click="false"
                                            :activator="selectedElement"
                                            offset-x
                                        >
                                            <v-card
                                                color="grey lighten-4"
                                                min-width="350px"
                                                flat
                                            >
                                                <v-toolbar
                                                    :color="selectedEvent.color"
                                                    dark
                                                >
                                                    <v-toolbar-title
                                                        v-html="
                                                            selectedEvent.name
                                                        "
                                                    ></v-toolbar-title>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        icon
                                                        @click="
                                                            editEventDialog = true
                                                        "
                                                    >
                                                        <v-icon
                                                            >mdi-pencil</v-icon
                                                        >
                                                    </v-btn>
                                                </v-toolbar>
                                                <v-card-text>
                                                    <v-container>
                                                        <span>
                                                            <strong>
                                                                Začátek
                                                                události:
                                                            </strong>
                                                            {{
                                                                selectedEvent.start
                                                            }}
                                                        </span>
                                                        <span>
                                                            <strong>
                                                                Konec události:
                                                            </strong>
                                                            {{
                                                                selectedEvent.end
                                                            }}
                                                        </span>
                                                    </v-container>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        color="red darken-1"
                                                        text
                                                        @click="
                                                            deleteEvent(
                                                                selectedEvent.id
                                                            )
                                                        "
                                                    >
                                                        Smazat
                                                    </v-btn>
                                                    <v-btn
                                                        color="green darken-1"
                                                        text
                                                        @click="
                                                            selectedOpen = false
                                                        "
                                                    >
                                                        Zavřít
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-menu>
                                    </v-sheet>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <!-- event dialog -->

            <v-row justify="center">
                <v-dialog
                    v-model="newEvent"
                    persistent
                    max-width="1000px"
                    class="text-center"
                >
                    <v-card>
                        <v-card-title>
                            <span class="headline">Nová událost</span>
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
                                        <v-checkbox
                                            v-model="early_notify"
                                            label="Přejete si zaslat upozornění dříve?"
                                        ></v-checkbox>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        v-if="early_notify === true"
                                    >
                                        <v-text-field
                                            label="Kdy si přejete zaslat upozornění"
                                            type="date"
                                            v-model="when_to_notify"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="red darken-1"
                                text
                                @click="newEvent = false"
                            >
                                Zavřít
                            </v-btn>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="createEvent()"
                            >
                                Vytvořit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <!-- edit -->

                <v-dialog
                    v-model="editEventDialog"
                    persistent
                    max-width="1000px"
                    class="text-center"
                >
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editace události</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="12" md="6">
                                        <v-text-field
                                            label="Den začátku události"
                                            type="date"
                                            v-model="selectedEvent.start_day"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6">
                                        <v-text-field
                                            label="Čas začátku události"
                                            type="time"
                                            required
                                            v-model="selectedEvent.start_time"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6">
                                        <v-text-field
                                            label="Den konce události"
                                            type="date"
                                            v-model="selectedEvent.end_day"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6">
                                        <v-text-field
                                            label="Čas konce události"
                                            type="time"
                                            v-model="selectedEvent.end_time"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-text-field
                                            label="Popis události"
                                            v-model="selectedEvent.event_note"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="red darken-1"
                                text
                                @click="editEventDialog = false"
                            >
                                Zavřít
                            </v-btn>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="editDialog(selectedEvent.id)"
                            >
                                Upravit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
    data: () => ({
        early_notify: false,
        when_to_notify: null,
        start_day: null,
        start_time: null,
        end_day: null,
        end_time: null,
        event_note: null,
        newEvent: false,
        focus: "",
        type: "month",
        typeToLabel: {
            month: "Měsíc",
            week: "Týden",
            day: "Den"
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        editEventDialog: false,
        events: []
    }),
    mounted() {
        this.$refs.calendar.checkChange();
    },
    created() {
        this.getEvents();
    },
    methods: {
        getEvents() {
            axios.get("event").then(response => {
                this.events = response.data;
            });
        },

        async createEvent() {
            await axios
                .post("event/create", {
                    start_day: this.start_day,
                    start_time: this.start_time,
                    end_day: this.end_day,
                    end_time: this.end_time,
                    event_note: this.event_note,
                    when_to_notify: this.when_to_notify
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.newEvent = false;
                    this.getEvents();
                    this.start_day = null;
                    this.start_time = null;
                    this.end_day = null;
                    this.end_time = null;
                    this.event_note = null;
                    this.when_to_notify = null;
                    this.early_notify = false;
                });
        },

        viewDay({ date }) {
            this.focus = date;
            this.type = "day";
        },
        getEventColor(event) {
            return event.color;
        },
        setToday() {
            this.focus = "";
        },
        prev() {
            this.$refs.calendar.prev();
        },
        next() {
            this.$refs.calendar.next();
        },

        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a;
        },

        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event;
                this.selectedElement = nativeEvent.target;
                setTimeout(() => {
                    this.selectedOpen = true;
                }, 10);
            };

            if (this.selectedOpen) {
                this.selectedOpen = false;
                setTimeout(open, 10);
            } else {
                open();
            }

            nativeEvent.stopPropagation();
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
                    this.selectedOpen = false;
                    this.getEvents();
                });
        },
        async editDialog(eventId) {
            await axios
                .post("event/update", {
                    eventId: eventId,
                    start_day: this.selectedEvent.start_day,
                    start_time: this.selectedEvent.start_time,
                    end_day: this.selectedEvent.end_day,
                    end_time: this.selectedEvent.end_time,
                    event_note: this.selectedEvent.event_note
                })
                .then(response => {
                    this.editEventDialog = false;
                    this.$store.state.alerts = response.data.alert;
                    this.selectedOpen = false;
                    this.getEvents();
                });
        }
    }
};
</script>
