import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        alerts: null,
        dohledAccess: null,
        user: [],
        events: []
    },
    actions: {},
    mutations: {
        update(state, alert) {
            state.alerts.push(alert);
        },

        updateUser(state, user) {
            state.user.push(user);
        },

        updateDohledSatatus(state, dohledStatus) {
            state.dohledAccess.push(dohledStatus);
        },
        updateEvent(state, events) {
            state.events.push(events);
        }
    },
    getters: {}
});
