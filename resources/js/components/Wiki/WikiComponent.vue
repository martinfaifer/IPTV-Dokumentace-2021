<template>
    <v-main style="background-color: #F1F5F9">
        <div v-if="!this.$route.params.id" class="pl-16 pt-3 pr-5">
            <!-- default komponent -->
            <default-component></default-component>
        </div>

        <div v-else>
            <v-container fluid class="pt-3 pr-10" style="background-color: #F1F5F9">
                <v-card flat class="pt-3 pr-10" color="#F1F5F9">
                    <v-container fluid style="background-color: #F1F5F9">
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
