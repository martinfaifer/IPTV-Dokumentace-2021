import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        alerts: null,
        dohledAccess: null,
        user: [],
        events: [],
        categories: [],
        foto: null
    },
    actions: {},
    mutations: {
        update(state, alert) {
            state.alerts.push(alert);
        },

        updateUser(state, user) {
            state.user.push(user);
        },

        updateFoto(state, foto) {
            state.foto.push(foto);
        },

        updateDohledSatatus(state, dohledStatus) {
            state.dohledAccess.push(dohledStatus);
        },
        updateEvent(state, events) {
            state.events.push(events);
        },
        updateWiki(state, categories) {
            state.categories.push(categories);
        }
    },
    getters: {}
});
