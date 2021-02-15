<template>
    <v-main>
        <div v-if="!this.$route.params.id" class="ml-12 mt-3 mr-10">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container fluid class="ml-10 mt-3 mr-10">
                <v-card flat class="ml-10 mt-3 mr-10">
                    <v-container fluid class="ml-16">
                        <topic-compoennt></topic-compoennt>
                    </v-container>
                </v-card>
            </v-container>
        </div>
    </v-main>
</template>
<script>
import DefaultComponent from "../Default/DefaultComponent";
import TopicCompoennt from "./TopicComponent";

export default {
    data() {
        return {};
    },

    components: {
        "default-component": DefaultComponent,
        "topic-compoennt": TopicCompoennt
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
