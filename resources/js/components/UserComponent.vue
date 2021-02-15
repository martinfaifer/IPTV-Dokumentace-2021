<template>
    <v-main>
        <div v-if="!this.$route.params.name" class="ml-12">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container fluid class="ml-16">
                <v-card flat class="ml-16">
                    <v-container fluid class="ml-16 mt-6">
                        <!-- INCLUDE KOMPONENTŮ -->

                        <userprehled-component v-if="this.$route.params.name === 'prehled'"></userprehled-component>
                        <userpassword-component v-if="this.$route.params.name === 'password'"></userpassword-component>

                    </v-container>
                </v-card>
            </v-container>
        </div>
    </v-main>
</template>
<script>
import DefaultComponent from "./Default/DefaultComponent";
import UserPrehledComponent from "./UserPrehledComponent"
import UserPasswordComponent from "./UserPasswordComponent";


export default {
    data() {
        return {
            deviceName: ""
        };
    },

    components: {
        "default-component": DefaultComponent,
        "userprehled-component": UserPrehledComponent,
        "userpassword-component": UserPasswordComponent
    },
    created() {},
    methods: {
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
