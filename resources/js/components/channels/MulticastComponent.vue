<template>
    <v-main style="background-color: #F1F5F9">
        <v-container fluid class="pl-3" style="background-color: #F1F5F9">
            <div class="pr-5">
                <!-- Zobrazení názvu kanálu -->
                <v-row>
                    <v-col cols="12" sm="1" md="1" lg="1" v-if="logo != null">
                        <v-img
                            :lazy-src="logo"
                            max-height="64"
                            max-width="64"
                            :src="logo"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" sm="11" md="11" lg="11">
                        <h2 class="mt-6">
                            {{ channelName }}
                        </h2>
                    </v-col>
                </v-row>
                <v-divider> </v-divider>
            </div>

            <v-row class="pr-5 pt-6">
                <v-col cols="12" sm="12" lg="12" md="12">
                    <!-- component pro nacteni zdroje multicastu -->
                    <multicast-component></multicast-component>
                </v-col>
            </v-row>

            <v-row class="pt-4 pr-5">
                <v-col cols="12" sm="12" md="4" lg="4">
                    <!-- komponent chunkstoreid uz nedává vylozene smysl, byl prejmenován na nangu komponent protoze udrzuje v sobe informace o chunkstoreId a channel_code, který slouzí k vyhledání kanálu v xml nangu -->
                    <nangu-component></nangu-component>
                </v-col>
                <v-col cols="12" sm="12" md="8" lg="8">
                    <history-component></history-component>
                </v-col>
            </v-row>

            <v-row class="pr-5">
                <v-col cols="12" sm="12" md="4" lg="4">
                    <!-- multiplexor component -->
                    <multiplexor-component></multiplexor-component>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <!-- source component -->
                    <source-component></source-component>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <!-- backup component -->
                    <backup-component></backup-component>
                </v-col>
            </v-row>

            <v-row class="pt-4 pr-5">
                <v-col cols="12" sm="12" md="6" lg="6">
                    <!-- kalendar component -->
                    <calendar-component></calendar-component>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <!-- note component -->
                    <note-component></note-component>
                </v-col>
            </v-row>
            <v-row class="pr-5">
                <v-col cols="12" sm="12" lg="12" md="12">
                    <!-- kontakt  -->
                    <contact-component></contact-component>
                </v-col>
            </v-row>

            <!-- TEST napojení na dohled -->
            <v-row class="pt-4 pr-5">
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
import HistoryComponent from "../History/HistoryComponent";
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
        "nangu-component": ChunkStoreIdComponent,
        "contact-component": ContactComponent,
        "dohled-component": TestDohledComponent,
        "history-component": HistoryComponent
    },
    created() {
        this.loadChannelNameById();
        this.loadChannelLogo();
        this.$router
            .push("/channel/" + this.$route.params.id + "/multicast")
            .catch(err => {});
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
                    if (response.data === "not_exist") {
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
            this.$router
                .push("/channel/" + this.$route.params.id + "/multicast")
                .catch(err => {});
        }
    }
};
</script>
