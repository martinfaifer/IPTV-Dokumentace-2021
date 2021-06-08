<template>
    <v-main>
        <v-container fluid class="ml-3">
            <div class="mr-10">
                <v-row>
                    <v-col cols="12" sm="8" md="11" lg="11"
                        ><h2 class="mt-6">
                            Možnost nahrát si vlastního avatara
                        </h2></v-col
                    >
                </v-row>
                <v-divider class="mr-15" inline> </v-divider>
            </div>

            <v-row class="mr-10 mt-6">
                <v-col cols="12" sm="12" lg="12" md="12">
                    <!-- zobrazení nastavení uzivatele -->
                    <v-card class="mr-15" flat color="white">
                        <v-card-text color="white">
                            <v-col cols="12">
                                <v-file-input
                                    label="Foto"
                                    @change="selectFile"
                                ></v-file-input>
                            </v-col>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text color="success" @click="upload()">
                                    nahrát
                                </v-btn>
                            </v-card-actions>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" lg="12" md="12" v-if="photos != null">
                    <v-card flat class="mr-15">
                        <v-data-table
                            v-if="photos != null"
                            :headers="headers"
                            :items="photos"
                        >
                            <template v-slot:item.photo="{ item }">
                                <v-img
                                    :lazy-src="item.photo"
                                    max-height="48"
                                    max-width="48"
                                    :src="item.photo"
                                ></v-img>
                            </template>
                            <template v-slot:item.action="{ item }">
                                <v-btn @click="deleteThis()" icon>
                                    <v-icon small color="red"
                                        >mdi-delete</v-icon
                                    >
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            file: "",
            photos: null,
            snackbar: false,
            headers: [
                {
                    text: "IMG",
                    value: "photo"
                },
                { text: "Akce", value: "action" }
            ]
        };
    },

    created() {
        this.userPhoto();
    },
    methods: {
        selectFile(event) {
            this.file = event;
        },
        upload() {
            const formData = new FormData();
            formData.append("photo", this.file, this.file.name);
            axios.post("user/photo", formData).then(response => {
                this.$store.state.alerts = response.data.alert;
                this.file = "";
                // this.getUser();
                this.userPhoto();
            });
        },
        userPhoto() {
            axios.get("user/photo").then(response => {
                this.photos = response.data;
            });
        },
        getUser() {
            axios.get("user").then(response => {
                this.$store.state.foto = response.data.data.photo;
            });
        },
        deleteThis() {
            axios
                .delete("user/photo", {
                    data: {
                        delete: "delete"
                    }
                })
                .then(response => {
                    this.$store.state.alerts = response.data.alert;
                    this.$store.state.foto = null
                    this.photos = null;
                });
        }
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
