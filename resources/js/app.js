require("./bootstrap");

window.Vue = require("vue");

import Chartkick from "vue-chartkick";
import VueApexCharts from "vue-apexcharts";
import Chart from "chart.js";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vue from "vue";
import TrendChart from "vue-trend-chart";

Vue.use(TrendChart);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Chartkick.use(Chart));
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

import NavigationComponent from "./components/NavigationComponent.vue";
import ChannelComponent from "./components/channels/ChannelComponent.vue"

let routes = [
    {
        path: "/",
        component: NavigationComponent,
        children: [
            {
                path: "channel/:id",
                component: ChannelComponent
            }
        ]
    },
];

const router = new VueRouter({
    routes,
});
const opts = {};

//module.export
const app = new Vue({
    el: "#app",
    router,
    vuetify: new Vuetify({
        opts,
    }),
});
