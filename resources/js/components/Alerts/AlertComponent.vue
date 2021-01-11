<template>
    <v-main>
        <v-snackbar
            v-if="alert != null"
            :timeout="-1"
            :value="true"
            absolute
            bottom
            :color="alert.status"
            right
        >
            <strong>
                {{ alert.msg }}
            </strong>
        </v-snackbar>
    </v-main>
</template>

<script>
export default {
    computed: {
        alert() {
            return this.$store.state.alerts;
        }
    },
    data() {
        return {};
    },

    methods: {},

    watch: {
        alert() {
            if(this.alert != null) {
                setTimeout(function() {
                    this.$store.state.alerts = null;
                }.bind(this), 2000)
            } else {
                return;
            }
        }
    }
};
</script>
