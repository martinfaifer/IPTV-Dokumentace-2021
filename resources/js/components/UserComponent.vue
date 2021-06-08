<template>
    <v-main style="background-color: #F1F5F9">
        <div v-if="!this.$route.params.name" class="pl-16" style="background-color: #F1F5F9">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container fluid class="pl-16" style="background-color: #F1F5F9">
                <v-card flat class="pl-16" color="#F1F5F9">
                    <v-container fluid class="pl-16 pt-6" style="background-color: #F1F5F9">
                        <!-- INCLUDE KOMPONENTŮ -->

                        <userprehled-component v-if="this.$route.params.name === 'prehled'"></userprehled-component>
                        <userpassword-component v-if="this.$route.params.name === 'password'"></userpassword-component>
                        <userfoto-component v-if="this.$route.params.name === 'photo'"></userfoto-component>
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
import UserFotoComponent from "./UserFotoComponent";

export default {
    data() {
        return {
            deviceName: ""
        };
    },

    components: {
        "default-component": DefaultComponent,
        "userprehled-component": UserPrehledComponent,
        "userpassword-component": UserPasswordComponent,
        "userfoto-component": UserFotoComponent
    },
    created() {},
    methods: {
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
