<template>
    <div>
        <v-menu transition="scroll-y-transition" max-height="350">
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
            <v-list dense class="text-center body-2" v-if="events.length > 0">
                <div>
                    <v-subheader
                        ><v-divider class="mr-3"></v-divider>Kalendář
                        <v-divider class="ml-3"></v-divider
                    ></v-subheader>
                </div>

                <v-list-item dense v-for="event in events" :key="event.id">
                    <v-list-item-icon>
                        <v-icon small color="info">mdi-calendar</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-html="event.title">
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <v-row>
                                <v-col cols="12">
                                    <span v-html="event.note">

                                    </span>
                                </v-col>
                                <v-col cols="12">
                                    Událost je plánovaná od
                                    {{ event.start_day }}
                                    {{ event.start_time }} do
                                    {{ event.end_day }}
                                    {{ event.end_time }}
                                </v-col>
                            </v-row>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list
                dense
                class="text-center body-2"
                v-if="rebootedChannels.length > 0"
            >
                <div>
                    <v-subheader
                        ><v-divider class="mr-3"></v-divider>Informace z
                        transcodérů <v-divider class="ml-3"></v-divider
                    ></v-subheader>
                </div>
                <v-list-item
                    dense
                    v-for="rebootedChannel in rebootedChannels"
                    :key="rebootedChannel.stream_dst"
                >
                    <v-list-item-icon>
                        <v-icon small color="red">mdi-alert-circle</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>
                            {{ rebootedChannel.stream }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="red--text">
                            byl restartován za 24h

                            {{ rebootedChannel.pocet_restartu }}x
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list v-if="rebootedChannels.length === 0 && events.length === 0">
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
            rebootedChannels: [],
            count: 0
        };
    },

    created() {
        this.getEvents();
        this.getRebootedChannelsFromTranscoder();
    },
    methods: {
        async getEvents() {
            await axios.get("event/notify").then(response => {
                if (response.data.status === "success") {
                    this.events = response.data.events;
                    this.count = response.data.count;
                } else {
                    this.events = [];
                    this.count = 0;
                }
            });
        },
        async getRebootedChannelsFromTranscoder() {
            await axios.get("channel/channels/rebooted").then(response => {
                this.rebootedChannels = response.data;
                this.count =
                    this.count + parseInt(this.rebootedChannels.length);
            });
        }
    },

    mounted() {
        setInterval(
            function() {
                try {
                    this.getEvents();
                    this.getRebootedChannelsFromTranscoder();
                } catch (error) {}
            }.bind(this),
            30000
        );
    }
};
</script>
