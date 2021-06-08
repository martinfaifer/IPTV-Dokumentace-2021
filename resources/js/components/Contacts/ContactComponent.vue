<template>
    <v-main>
        <v-card
            flat
            color="white"
            v-if="contact != null"
            @contextmenu="show($event)"
        >
            <v-card-subtitle>
                <strong>
                    Kontakt
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-12 text--center">
                <v-container>
                    <v-row>
                        <v-col sm="12" md="4" lg="4">
                            <strong>
                                Kontaktní osoba:
                            </strong>
                            {{ contact.full_name }}
                        </v-col>
                        <v-col sm="12" md="4" lg="4">
                            <strong>
                                Telefon:
                            </strong>
                            {{ contact.telephone }}
                        </v-col>

                        <v-col sm="12" md="4" lg="4">
                            <strong>
                                Email:
                            </strong>
                            {{ contact.email }}
                        </v-col>
                    </v-row>
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
                <v-list-item @click="editDialog = true">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit
                    </v-list-item-title>
                </v-list-item>

                <v-list-item @click="remove()">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- dialog -->

        <v-row justify="center" v-if="contact != null">
            <v-dialog v-model="editDialog" persistent max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Editace </span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="contact.full_name"
                                        label="Kontaktní osoba"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="contact.telephone"
                                        label="Telefon"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        dense
                                        v-model="contact.email"
                                        label="Email"
                                        required
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
                            @click="editDialog = false"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn color="green darken-1" text @click="savedata()">
                            Upravit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            editDialog: false,
            contact: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadContact();
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

        async loadContact() {
            await axios
                .get("contact/channel/" + this.$route.params.id)
                .then(response => {
                    if (response.data.status) {
                        this.contact = response.data.data;
                    } else {
                        this.contact = null;
                    }
                });
        },

        remove() {
            axios
                .delete("contact", {
                    data: {
                        id: this.contact.id
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.loadContact();
                });
        },
        async savedata() {
            this.editDialog = false;
            await axios
                .patch("contact", {
                    full_name: this.contact.full_name,
                    telephone: this.contact.telephone,
                    email: this.contact.email,
                    id: this.contact.id
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;

                    this.loadContact();
                });
        }
    },
    watch: {
        $route(to, from) {
            this.loadContact();
        }
    }
};
</script>
