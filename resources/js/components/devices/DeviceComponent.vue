<template>
    <v-main style="background-color: #F1F5F9">
        <div v-if="!this.$route.params.id" class="pl-16">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container fluid class=" pl-16">
                <!-- štítky component -->
                <tag-component class="pr-5"></tag-component>
                <!-- konec štítků -->

                <v-card flat class="pl-16">
                    <v-container fluid class="pl-16 mt-6" style="background-color: #F1F5F9">
                        <!-- INCLUDE KOMPONENTŮ -->

                        <!-- Device information component -->
                        <obecnedevice-component></obecnedevice-component>

                    </v-container>
                </v-card>
            </v-container>
        </div>
    </v-main>
</template>
<script>
import DefaultComponent from "../Default/DefaultComponent";
import TagComponent from "../Tags/TagComponent";
import ObecneDeviceComponent from "./_obecnyDeviceComponent";
export default {
    data() {
        return {
            deviceName: ""
        };
    },

    components: {
        "default-component": DefaultComponent,
        "tag-component": TagComponent,
        "obecnedevice-component": ObecneDeviceComponent
    },
    created() {},
    methods: {
        OpenDialogForNewTag() {}
    },
    watch: {
        $route(to, from) {}
    }
};
</script>
