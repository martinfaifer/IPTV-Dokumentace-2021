<template>
    <v-main class="ml-10 mr-15">
        <v-container fluid v-if="topic === null">
            <!-- alert -->
            <v-alert type="error">
                Neexistuje žádný článek s tímto ID
            </v-alert>
        </v-container>
        <v-container fluid v-else>
            <!-- content -->
            <v-toolbar fixed dense flat class="ml-16">
                <v-spacer></v-spacer>
                <v-icon @click="editDialog = true" small color="info"
                    >mdi-pencil</v-icon
                >
            </v-toolbar>
            <v-container v-html="topic"> </v-container>
        </v-container>

        <v-row justify="center">
            <v-dialog v-model="editDialog" persistent max-width="4098">
                <v-card>
                    <v-card-title class="headline"> </v-card-title>
                    <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-card-text>
                                <v-textarea
                                    height="100%"
                                    v-model="topic"
                                ></v-textarea
                            ></v-card-text>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                            <v-card-text v-html="topic"></v-card-text>
                            </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="closeDialog()"
                        >
                            Zavřít
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveDialog()"
                        >
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
            topic: null,
            editDialog: false
        };
    },
    created() {
        this.loadTopic();
    },
    methods: {
        loadTopic() {
            axios
                .post("wiki/topic", {
                    topicId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.topic = response.data.text;
                    } else {
                        this.topic = null;
                    }
                });
        },
        saveDialog() {
            axios
                .post("wiki/topic/save", {
                    topicId: this.$route.params.id,
                    topic: this.topic
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.editDialog = false;
                    this.loadTopic();
                });
        },
        closeDialog() {
            this.editDialog = false;
            this.loadTopic();
        }
    },
    watch: {
        $route(to, from) {
            this.loadTopic();
        }
    }
};
</script>
