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
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(TrendChart);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Chartkick.use(Chart));
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

// Auth
// Login
// const LoginComponent = () =>
//     import(
//         "./components/Auth/LoginComponent" /* webpackChunkName: "resource/js/components/Auth/LoginComponent" */
//     );
import LoginComponent from "./components/Auth/LoginComponent";
// const NavigationComponent = () =>
//     import(
//         "./components/NavigationComponent" /* webpackChunkName: "resource/js/components/NavigationComponent" */
//     );
import NavigationComponent from "./components/NavigationComponent";

// const ChannelComponent = () =>
//     import(
//         "./components/channels/ChannelComponent.vue" /* webpackChunkName: "resource/js/components/channels/ChannelComponent.vue" */
//     );
import ChannelComponent from "./components/channels/ChannelComponent";

// const DeviceComponent = () =>
//     import(
//         "./components/devices/DeviceComponent" /* webpackChunkName: "resource/js/components/devices/DeviceComponent" */
//     );

import DeviceComponent from "./components/devices/DeviceComponent";

// const CardComponent = () =>
//     import(
//         "./components/Cards/CardComponent" /* webpackChunkName: "resource/js/components/Cards/CardComponent" */
//     );
import CardComponent from "./components/Cards/CardComponent";

// const SettinsComponent = () =>
//     import(
//         "./components/Settings/_obecneSettingsComponent" /* webpackChunkName: "resource/js/components/Settings/_obecneSettingsComponent" */
//     );

import SettinsComponent from "./components/Settings/_obecneSettingsComponent";

// const PageNotFoundComponent = () =>
//     import(
//         "./components/PageNotFoundComponent" /* webpackChunkName: "resource/js/components/PageNotFoundComponent" */
//     );

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
            },
            {
                path: "card",
                component: CardComponent,
                children: [
                    {
                        path: "/card/:id",
                        component: CardComponent
                    }
                ]
            },
            {
                path: "/settings",
                component: SettinsComponent,
                children: [
                    {
                        path: "/settings/:name",
                        component: SettinsComponent
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
