<template>
    <v-main>
        <div v-if="template != null">
            <v-row>
                <v-col v-for="sablona in template" :key="sablona.id">
                    <v-card
                        flat
                        color="#F7F7F7"
                        width="390"
                        @contextmenu="show($event, sablona)"
                    >
                        <v-card-subtitle>
                            <strong>
                                Šablona
                            </strong>
                        </v-card-subtitle>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <span class="pl-6">
                                        <ul>
                                            <li
                                                v-for="(item, index) in sablona"
                                                :key="index"
                                            >
                                                {{ index }} : {{ item }}
                                            </li>
                                        </ul>
                                    </span>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

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
                    <v-list-item @click="openEditWindowForInterface()">
                        <v-list-item-icon>
                            <v-icon x-small>mdi-pencil</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Upravit
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <!-- dialog pro ediatci interafacu -->

            <template>
                <v-row justify="center">
                    <v-dialog
                        v-model="editInterfaceSablonaData"
                        persistent
                        max-width="600"
                    >
                        <v-card>
                            <v-card-title>
                                <span class="headline">Editace Interfacu</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <span class="ml-6">
                                        <v-col
                                            cols="12"
                                            v-for="(item,
                                            index) in currentSablona"
                                            :key="index"
                                        >
                                            <v-text-field
                                                :label="index"
                                                v-bind:value="item"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </span>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="editInterfaceSablonaData = false"
                                >
                                    Zavřít
                                </v-btn>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="saveInterface(item.index)"
                                >
                                    Uložit
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </template>
        </div>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            dataTest: "",
            editInterfaceSablonaData: false,
            currentSablona: null,
            template: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },

    created() {
        this.loadDeviceTemplate();
    },
    methods: {
        show(e, currentSablona) {
            this.currentSablona = currentSablona;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },

        loadDeviceTemplate() {
            axios
                .post("device/template", {
                    deviceId: this.$route.params.id
                })
                .then(response => {
                    if (response.data.status === "success") {
                        this.template = response.data.data.template;
                    } else {
                        this.template = null;
                    }
                });
        },

        openEditWindowForInterface() {
            this.editInterfaceSablonaData = true;
        },
        saveInterface(item) {
            console.log(item);
        }
    },
    watch: {
        $route(to, from) {
            this.loadDeviceTemplate();
        }
    }
};
</script>
