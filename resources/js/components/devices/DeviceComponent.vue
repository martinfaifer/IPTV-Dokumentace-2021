<template>
    <v-main>
        <div v-if="!this.$route.params.id" class="ml-12">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container fluid class=" ml-10">
                <!-- štítky component -->
                <tag-component class="mr-15"></tag-component>
                <!-- konec štítků -->

                <v-card flat class="ml-16">
                    <v-container fluid class="ml-16 mt-6">
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
