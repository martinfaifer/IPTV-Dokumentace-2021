<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div>
                <!-- Zobrazení názvu kanálu -->
                <h2>{{ channelName }}</h2>
                <v-divider inline> </v-divider>
            </div>

            <v-row class=" mt-6">
                <v-col>
                    <!-- component pro nacteni zdroje multicastu -->
                    <multicast-component></multicast-component>
                </v-col>
            </v-row>

            <v-row class="mt-4">
                <v-col>
                    <!-- multiplexor component -->
                    <multiplexor-component></multiplexor-component>
                </v-col>
                <v-col>
                    <!-- source component -->
                    <source-component></source-component>
                </v-col>
                <v-col>
                    <!-- backup component -->
                    <backup-component></backup-component>
                </v-col>
            </v-row>

            <v-row class="mt-4">
                <v-col>
                    <!-- kalendar component -->
                    <calendar-component></calendar-component>
                </v-col>
                <v-col>
                    <!-- note component -->
                    <note-component></note-component>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import MulticastComponent from "./Multicast/_multicastComponent";
import MultiplexorComponent from "./Multicast/_multiplexorComponent";
import SourceComponent from "./Multicast/_sourceComponent";
import BackupComponent from "./Multicast/_backupComponent";
import CalendarComponent from "./Multicast/_calendarComponent";
import NoteComponent from "./Multicast/_noteComponent";
export default {
    data() {
        return {
            channelName: ""
        };
    },
    components: {
        "multicast-component": MulticastComponent,
        "multiplexor-component": MultiplexorComponent,
        "source-component": SourceComponent,
        "backup-component": BackupComponent,
        "calendar-component": CalendarComponent,
        "note-component": NoteComponent
    },
    created() {
        this.loadChannelNameById();
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
        }
    },
    watch: {
        $route(to, from) {
            this.loadChannelNameById();
        }
    }
};
</script>
