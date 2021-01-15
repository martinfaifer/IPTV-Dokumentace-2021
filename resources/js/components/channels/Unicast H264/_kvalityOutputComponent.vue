<template>
    <v-main>
        <v-card flat color="#F5F5F7" v-if="kvalityOutput != null" @contextmenu="show($event)">
            <v-card-subtitle>
                <strong>
                    Výstupní kvality
                </strong>
            </v-card-subtitle>
            <v-card-text class="ml-1 text--center">
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
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit výstupní kvality
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            kvalityOutput: null,
            showMenu: false,
            x: 0,
            y: 0
        };
    },
    created() {
        this.loadOutputKvality();
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
        loadOutputKvality() {
            axios
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
        }
    },
    watch: {
        $route(to, from) {
            this.loadOutputKvality();
        }
    }
};
</script>
