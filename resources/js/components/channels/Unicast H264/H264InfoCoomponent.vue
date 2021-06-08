<template>
    <v-main>
        <v-card
            flat
            color="white"
            v-if="kvalityOutput != null"
            @contextmenu="show($event)"
        >
            <v-card-subtitle>
                <v-row class="ml-3 mr-3 mt-1">
                    <strong>
                        Výstupní kvality
                    </strong>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon
                                class="justify-end"
                                v-on="on"
                                @click="removeH264()"
                                small
                                color="red"
                                >mdi-delete</v-icon
                            >
                        </template>
                        <span>Odebrání H264</span>
                    </v-tooltip>
                </v-row>
            </v-card-subtitle>

            <v-card-text
                class="ml-12 text--center"
                v-if="kvalityOutput != null"
            >
                <v-container fluid>
                    <v-list-item
                        v-for="output in kvalityOutput"
                        :key="output.output"
                    >
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                <span>
                                    <strong> {{ output.format }}p: </strong>
                                </span>
                                <span class="ml-3">
                                    {{ output.output }}
                                </span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-container>
            </v-card-text>

            <v-divider class="ml-6" width="95%"></v-divider>

            <v-card-subtitle v-if="m3u8s != null">
                <v-row class="ml-3 mr-3">
                    <strong>
                        Výstupy
                    </strong>
                    <v-spacer></v-spacer>

                    <v-icon
                        v-if="show_m3u8s === true"
                        class="justify-end"
                        icon
                        @click="show_m3u8s = false"
                        >mdi-arrow-up-bold-circle-outline</v-icon
                    >
                    <v-icon
                        v-else
                        class="justify-end"
                        icon
                        @click="show_m3u8s = true"
                        >mdi-arrow-down-bold-circle-outline</v-icon
                    >
                </v-row>
            </v-card-subtitle>

            <v-card-text class="ml-1 text--center" v-if="m3u8s != null">
                <v-container fluid v-if="show_m3u8s === true">
                    <v-data-table
                        :headers="headers"
                        :items="m3u8s"
                        :search="search"
                        show-expand
                        :expanded.sync="expanded"
                    >
                        <template v-slot:item.ottstring="{ item }">
                            <v-icon v-if="item.ottstring === false" color="red">
                                mdi-close
                            </v-icon>
                            <v-icon v-else color="green">
                                mdi-check
                            </v-icon>
                        </template>
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length">
                                <v-col
                                    cols="12"
                                    v-if="item.ctypes_mobile.length > 0"
                                >
                                    <v-row class="mt-3 ml-1">
                                        <v-col cols="12" sm="2" md="2" lg="2">
                                            <strong>
                                                Mobilní zařízení:
                                            </strong>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="10"
                                            md="10"
                                            lg="10"
                                        >
                                            <span>
                                                <v-list-item
                                                    v-for="(ctype,
                                                    index) in item.ctypes_mobile"
                                                    :key="index"
                                                >
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle>
                                                            <span>
                                                                <strong
                                                                    >Ctype ID:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.ctype_id
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Kodek:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.kodek
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Rozlišení:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.resolution
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Datový tok:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.bitrate
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </span>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col
                                    cols="12"
                                    v-if="item.ctypes_stb.length > 0"
                                >
                                    <v-row class="mt-3 ml-1">
                                        <v-col cols="12" sm="2" md="2" lg="2">
                                            <strong>
                                                STB:
                                            </strong>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="10"
                                            md="10"
                                            lg="10"
                                        >
                                            <span>
                                                <v-list-item
                                                    v-for="(ctype,
                                                    index) in item.ctypes_stb"
                                                    :key="index"
                                                >
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle>
                                                            <span>
                                                                <strong
                                                                    >Ctype ID:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.ctype_id
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Kodek:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.kodek
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Rozlišení:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.resolution
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Datový tok:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.bitrate
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </span>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col
                                    cols="12"
                                    v-if="item.ctypes_stb_h265.length > 0"
                                >
                                    <v-row class="mt-3 ml-1">
                                        <v-col cols="12" sm="2" md="2" lg="2">
                                            <strong>
                                                STB H265:
                                            </strong>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="10"
                                            md="10"
                                            lg="10"
                                        >
                                            <span>
                                                <v-list-item
                                                    v-for="(ctype,
                                                    index) in item.ctypes_stb_h265"
                                                    :key="index"
                                                >
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle>
                                                            <span>
                                                                <strong
                                                                    >Ctype ID:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.ctype_id
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Kodek:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.kodek
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Rozlišení:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.resolution
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Datový tok:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.bitrate
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </span></v-col
                                        >
                                    </v-row>
                                </v-col>

                                <v-col
                                    cols="12"
                                    v-if="item.ctypes_screenshoter.length > 0"
                                >
                                    <v-row class="mt-3 ml-1">
                                        <v-col cols="12" sm="2" md="2" lg="2">
                                            <strong>
                                                Screenshoter:
                                            </strong>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="10"
                                            md="10"
                                            lg="10"
                                        >
                                            <span>
                                                <v-list-item
                                                    v-for="(ctype,
                                                    index) in item.ctypes_screenshoter"
                                                    :key="index"
                                                >
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle>
                                                            <span>
                                                                <strong
                                                                    >Ctype ID:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.ctype_id
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Kodek:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.kodek
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Rozlišení:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.resolution
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Datový tok:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.bitrate
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </span>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col
                                    cols="12"
                                    v-if="item.ctypes_samsung_tv.length > 0"
                                >
                                    <v-row class="mt-3 ml-1">
                                        <v-col cols="12" sm="2" md="2" lg="2">
                                            <strong>
                                                Samsung Tizen:
                                            </strong>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="10"
                                            md="10"
                                            lg="10"
                                        >
                                            <span>
                                                <v-list-item
                                                    v-for="(ctype,
                                                    index) in item.ctypes_samsung_tv"
                                                    :key="index"
                                                >
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle>
                                                            <span>
                                                                <strong
                                                                    >Ctype ID:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.ctype_id
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Kodek:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.kodek
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Rozlišení:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.resolution
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Datový tok:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.bitrate
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </span>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col
                                    cols="12"
                                    v-if="item.ctypes_android_tv.length > 0"
                                >
                                    <v-row class="mt-3 ml-1">
                                        <v-col cols="12" sm="2" md="2" lg="2">
                                            <strong>
                                                Android TV:
                                            </strong>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="10"
                                            md="10"
                                            lg="10"
                                        >
                                            <span>
                                                <v-list-item
                                                    v-for="(ctype,
                                                    index) in item.ctypes_android_tv"
                                                    :key="index"
                                                >
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle>
                                                            <span>
                                                                <strong
                                                                    >Ctype ID:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.ctype_id
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Kodek:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.kodek
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Rozlišení:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.resolution
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Datový tok:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.bitrate
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </span>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col
                                    cols="12"
                                    v-if="item.ctypes_pc.length > 0"
                                >
                                    <v-row class="mt-3 ml-1">
                                        <v-col cols="12" sm="2" md="2" lg="2">
                                            <strong>
                                                PC:
                                            </strong>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="10"
                                            md="10"
                                            lg="10"
                                        >
                                            <span>
                                                <v-list-item
                                                    v-for="(ctype,
                                                    index) in item.ctypes_pc"
                                                    :key="index"
                                                >
                                                    <v-list-item-content>
                                                        <v-list-item-subtitle>
                                                            <span>
                                                                <strong
                                                                    >Ctype ID:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.ctype_id
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Kodek:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.kodek
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Rozlišení:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.resolution
                                                                    }}</span
                                                                >
                                                                <strong
                                                                    class="ml-3"
                                                                    >Datový tok:
                                                                </strong>
                                                                <span
                                                                    class="ml-2"
                                                                    >{{
                                                                        ctype.bitrate
                                                                    }}</span
                                                                >
                                                            </span>
                                                        </v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </span>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </td>
                        </template>
                    </v-data-table>
                </v-container>

                <v-container v-else fluid>
                    <span class="ml-6">
                        ...
                    </span>
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
                <v-list-item @click="openDialog()">
                    <v-list-item-icon>
                        <v-icon color="info" x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit výstupní kvality
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="AnalyzeChannel()">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-magnify</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Analyzovat kanál
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="openDohledDialog()">
                    <v-list-item-icon>
                        <v-icon color="green" x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat url streamu do dohledu
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-row justify="center">
            <v-dialog v-model="editDataDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Upravení kvalit</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p1080"
                                        label="URL pro 1080p"
                                        placeholder="například: 239.251.1.1:1234"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p720"
                                        label="URL pro 720p"
                                        placeholder="například: 239.251.21.1:1234"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p576"
                                        label="URL pro 576p"
                                        placeholder="například: 239.251.21.11:1234"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="kvalityForDialog.p404"
                                        label="URL pro 404p"
                                        placeholder="například: 239.251.21.21:1234"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="closeDialog()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            :loading="loading"
                            color="green darken-1"
                            text
                            @click="savedata()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dohledDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Napojení na dohled</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col
                                    cols="12"
                                    v-for="output in kvalityOutput"
                                    :key="output.output"
                                >
                                    <v-text-field
                                        v-model="output.output"
                                        readonly
                                    ></v-text-field>

                                    <v-checkbox
                                        label="Dohleduje se"
                                        color="green"
                                        v-model="output.in_dohled"
                                    ></v-checkbox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="closeDialog()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            :loading="loading"
                            color="green darken-1"
                            text
                            @click="saveToDohled()"
                        >
                            Uložit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-main>
</template>
<script>
export default {
    computed: {
        dohled() {
            return this.$store.state.dohledAccess;
        }
    },
    data() {
        return {
            loading: false,
            m3u8s: [],
            show_m3u8s: false,
            editDataDialog: false,
            kvalityOutput: null,
            kvalityForDialog: [],
            showMenu: false,
            x: 0,
            y: 0,
            dohledDialog: false,
            expanded: [],
            search: "",
            headers: [
                {
                    text: "Popis",
                    align: "start",
                    value: "description"
                },
                { text: "URL", value: "uri" },
                { text: "OTT", value: "ottstring" }
            ]
        };
    },
    created() {
        this.loadOutputKvality();
    },
    methods: {
        openDohledDialog() {
            this.dohledDialog = true;
            this.loadOutputKvality();
        },
        async removeH264() {
            await axios
                .post("h264/delete", {
                    channelId: this.$route.params.id
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    if (response.data.status === "success") {
                        this.$router
                            .push("/channel/" + response.data.channelId)
                            .catch(err => {});
                    }
                });
        },
        async loadM3u8Kvality() {
            await axios
                .post("h264/channel/m3u8", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.m3u8s = response.data.data;
                    } else {
                        this.m3u8s = null;
                    }
                });
        },
        savedata() {
            this.loading = true;
            axios
                .post("h264/channel/edit", {
                    channelId: this.$route.params.id,
                    p1080: this.kvalityForDialog.p1080,
                    p720: this.kvalityForDialog.p720,
                    p576: this.kvalityForDialog.p576,
                    p404: this.kvalityForDialog.p404,
                    type: "h264"
                })
                .then(response => {
                    this.loading = false;
                    this.$store.state.alerts = response.data.alert;
                    this.editDataDialog = false;
                    this.loadOutputKvality();
                });
        },
        openDialog() {
            axios
                .post("h264/channel/kvalityForEdit", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    this.kvalityForDialog = response.data;
                });
            this.editDataDialog = true;
        },

        closeDialog() {
            this.dohledDialog = false;
            this.editDataDialog = false;
            this.kvalityForDialog = [];
        },
        show(e) {
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },

        async loadOutputKvality() {
            await axios
                .post("h264/channel/kvality", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.kvalityOutput = response.data.data;
                    } else {
                        this.kvalityOutput = null;
                    }
                });
        },
        AnalyzeChannel() {
            axios
                .post("channel/analyze", {
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                });
        },
        saveToDohled() {
            axios
                .post("dohled/createOrDelete", {
                    data: this.kvalityOutput,
                    channelId: this.$route.params.id,
                    type: "h264"
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadOutputKvality();
                    this.dohledDialog = false;
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadOutputKvality();
            this.loadM3u8Kvality();
        },
        show_m3u8s: function() {
            if (this.show_m3u8s === false) {
                this.m3u8s = [];
            } else {
                this.loadM3u8Kvality();
            }
        }
    }
};
</script>
