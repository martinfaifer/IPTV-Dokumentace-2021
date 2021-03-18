<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div class="mr-15">
                <!-- Zobrazení názvu kanálu -->
                <v-row>
                    <v-col cols="12" sm="4" md="1" lg="1" v-if="logo != null">
                        <v-img
                            :lazy-src="logo"
                            max-height="64"
                            max-width="64"
                            :src="logo"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="8" md="11" lg="11"
                        ><h2 class="mt-6">
                            {{ channelName }}
                        </h2></v-col
                    >
                </v-row>
                <v-divider inline> </v-divider>
            </div>

            <v-row class="mr-15 mt-6">
                <v-col cols="12" sm="12" lg="12" md="12">
                    <!-- component pro nacteni zdroje multicastu -->
                    <multicast-component></multicast-component>
                </v-col>
            </v-row>

            <v-row class="mt-6 mr-15">
                <chunkstoreid-component></chunkstoreid-component>
            </v-row>

            <v-row class="mt-6 mr-15">
                <!-- multiplexor component -->
                <multiplexor-component></multiplexor-component>

                <!-- source component -->
                <source-component></source-component>

                <!-- backup component -->
                <backup-component></backup-component>
            </v-row>

            <v-row class="mt-6 mr-15">
                <v-col>
                    <!-- kalendar component -->
                    <calendar-component></calendar-component>
                </v-col>
                <v-col>
                    <!-- note component -->
                    <note-component></note-component>
                </v-col>
            </v-row>
            <v-row class="mr-15">
                <v-col cols="12" sm="12" lg="12" md="12">
                    <!-- kontakt  -->
                    <contact-component></contact-component>
                </v-col>
            </v-row>

            <!-- TEST napojení na dohled -->
            <v-row class=" mt-6 mr-15">
                <v-col>
                    <dohled-component></dohled-component>
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
import ChunkStoreIdComponent from "./Multicast/_chunkStoreIdComponent";
import ContactComponent from "../Contacts/ContactComponent";
import TestDohledComponent from "./Dohled/TestDohledComponent";
export default {
    data() {
        return {
            channelName: "",
            logo: null
        };
    },
    components: {
        "multicast-component": MulticastComponent,
        "multiplexor-component": MultiplexorComponent,
        "source-component": SourceComponent,
        "backup-component": BackupComponent,
        "calendar-component": CalendarComponent,
        "note-component": NoteComponent,
        "chunkstoreid-component": ChunkStoreIdComponent,
        "contact-component": ContactComponent,
        "dohled-component": TestDohledComponent
    },
    created() {
        this.loadChannelNameById();
        this.loadChannelLogo();
    },
    methods: {
        async loadChannelNameById() {
            await axios
                .post("channel/name", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.channelName = response.data;
                });
        },
        async loadChannelLogo() {
            await axios
                .post("channel/logo", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    if(response.data === 'not_exist') {
                        this.logo = null;
                    } else {
                        this.logo = response.data;
                    }
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadChannelNameById();
            this.loadChannelLogo();
        }
    }
};
</script>
