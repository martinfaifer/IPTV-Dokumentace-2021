<template>
    <v-main>
        <div v-if="!this.$route.params.id" class="ml-12">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container class="ml-16">
                <!-- štítky component -->
                <!-- <tag-component></tag-component> -->
                <!-- konec štítků -->

                <v-card flat class="ml-16">
                    <v-container class="ml-16 mt-6">
                        <!-- INCLUDE KOMPONENTŮ -->

                        <!-- Device information component -->
                        <obecneCard-component></obecneCard-component>

                    </v-container>
                </v-card>
            </v-container>
        </div>
    </v-main>
</template>
<script>
import DefaultComponent from "../Default/DefaultComponent";
import TagComponent from "../Tags/TagComponent";
import ObecneCardComponent from "./CardObecnyComponent";
export default {
    data() {
        return {
            deviceName: ""
        };
    },

    components: {
        "default-component": DefaultComponent,
        "tag-component": TagComponent,
        "obecneCard-component": ObecneCardComponent
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
