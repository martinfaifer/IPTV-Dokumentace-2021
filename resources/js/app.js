require("./bootstrap");

window.Vue = require("vue");

import { store } from "./store/store";
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

// Auth
// Login
import LoginComponent from "./components/Auth/LoginComponent";

import NavigationComponent from "./components/NavigationComponent.vue";
import ChannelComponent from "./components/channels/ChannelComponent.vue";

import DeviceComponent from "./components/devices/DeviceComponent";


import PageNotFoundComponent from "./components/PageNotFoundComponent";
let routes = [
    {
        path: "/",
        component: NavigationComponent,
        children: [
            {
                path: "/channel",
                component: ChannelComponent, 
                children: [
                    {
                        path: "/channel/:id",
                        component: ChannelComponent
                    },
                    {
                        path: "/channel/:id/h264",
                        component: ChannelComponent
                    },
                    {
                        path: "/channel/:id/h265",
                        component: ChannelComponent
                    },
                    {
                        path: "/channel/:id/dohled",
                        component: ChannelComponent
                    }
                ]
            },
            {
                path: "device",
                component: DeviceComponent,
                children: [
                    {
                        path: "/device/:id",
                        component: DeviceComponent
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        component: LoginComponent
    },
    {
        path: "*",
        component: PageNotFoundComponent
    }
];

const router = new VueRouter({
    routes
});
const opts = {};

//module.export
const app = new Vue({
    el: "#app",
    store,
    router,
    vuetify: new Vuetify({
        opts
    })
});
