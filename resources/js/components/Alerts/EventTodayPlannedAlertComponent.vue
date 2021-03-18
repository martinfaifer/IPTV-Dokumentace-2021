<template>
    <div>
        <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
                <v-badge
                    :content="count"
                    :value="count"
                    color="info"
                    bottom
                    overlap
                    class="mr-6"
                    v-on="on"
                >
                    <v-icon v-on="on" color="info">
                        mdi-email
                    </v-icon>
                </v-badge>
            </template>
            <v-list class="text-center body-2" v-if="events.length > 0">
                <v-list-item v-for="event in events" :key="event.id">
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ event.note }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Událost je plánovaná od {{ event.start_day }}
                            {{ event.start_time }} do {{ event.end_day }}
                            {{ event.end_time }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list v-else>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="green">
                            mdi-check
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Není zde žádná notifikace
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [],
            count: "0"
        };
    },

    created() {
        this.getEvents();
    },
    methods: {
        async getEvents() {
            await axios.get("event/notify").then(response => {
                if (response.data.status === "success") {
                    this.events = response.data.events;
                    this.count = response.data.count;
                } else {
                    this.events = [];
                    this.count = "0";
                }
            });
        }
    },

    mounted() {
        setInterval(
            function() {
                try {
                    this.getEvents();
                } catch (error) {}
            }.bind(this),
            10000
        );
    }
};
</script>
