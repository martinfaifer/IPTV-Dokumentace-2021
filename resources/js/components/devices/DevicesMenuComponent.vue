<template>
    <v-main>
        <v-list dense nav class="ml-12" color="#F5F5F7">
            <v-list-item
                class="pl-3"
                link
                v-for="device in devices"
                :key="device.id"
                :to="'/device/' + device.id "
                @contextmenu="show($event, device.id)"
            >
                <v-list-item-title> {{ device.name }}</v-list-item-title>
            </v-list-item>
        </v-list>
        <v-menu
            dense
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
        >
            <v-list dense>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Upravit
                    </v-list-item-title>
                </v-list-item>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon x-small>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Přidat nové zařízení
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item @click="">
                    <v-list-item-icon>
                        <v-icon color="red" x-small>mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Odebrat zařízení
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- konec menu -->

        <!-- edit dialog -->

        <template>
            <v-row justify="center">

            </v-row>
        </template>
        <!-- konec edit dialogu -->
    </v-main>
</template>
<script>
export default {
    data() {
        return {
            devices: null,
            deviceId: null,
            showMenu: false,
            x: 0,
            y: 0,
        };
    },

    created() {
        this.loadDevices();
    },
    methods: {
        loadDevices() {
            axios.get("devices").then(response => {
                this.devices = response.data;
            });
        },
        show(e, deviceId) {
            this.deviceId = deviceId;
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
    }
};
</script>
