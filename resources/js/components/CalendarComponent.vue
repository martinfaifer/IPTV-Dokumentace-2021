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
                                                            >Day</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                    <v-list-item
                                                        @click="type = 'week'"
                                                    >
                                                        <v-list-item-title
                                                            >Week</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                    <v-list-item
                                                        @click="type = 'month'"
                                                    >
                                                        <v-list-item-title
                                                            >Month</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                    <v-list-item
                                                        @click="type = '4day'"
                                                    >
                                                        <v-list-item-title
                                                            >4
                                                            days</v-list-item-title
                                                        >
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
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
                                        ></v-calendar>
                                    </v-sheet>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
    data: () => ({
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
        }
    }
};
</script>
