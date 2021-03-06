require("./bootstrap");

window.Vue = require("vue");

import { store } from "./store/store";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

import CKEditor from "@ckeditor/ckeditor5-vue2";

Vue.use(CKEditor);

Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(VueRouter);

import LoginComponent from "./components/Auth/LoginComponent";
import NavigationComponent from "./components/NavigationComponent";
import ChannelComponent from "./components/channels/ChannelComponent";
import DeviceComponent from "./components/devices/DeviceComponent";
import CardComponent from "./components/Cards/CardComponent";
import SettinsComponent from "./components/Settings/_obecneSettingsComponent";
import PageNotFoundComponent from "./components/PageNotFoundComponent";
import WikiComponent from "./components/Wiki/WikiComponent";
import CalendarComponent from "./components/CalendarComponent";
import UserComponent from "./components/UserComponent";

let routes = [
    {
        path: "/",
        component: NavigationComponent,
        children: [
            {
                path: "/user",
                component: UserComponent,
                children: [
                    {
                        path: "/user/:name",
                        component: UserComponent
                    }
                ]
            },
            {
                path: "/channel",
                component: ChannelComponent,
                children: [
                    {
                        path: "/channel/:id",
                        component: ChannelComponent
                    },
                    {
                        path: "/channel/:id/multicast",
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
                    },
                    {
                        path: "/channel/:id/storage",
                        component: ChannelComponent
                    },
                    {
                        path: "/channel/:id/nangu",
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
                path: "wiki",
                component: WikiComponent,
                children: [
                    {
                        path: "/wiki/:id",
                        component: WikiComponent
                    }
                ]
            },
            {
                path: "calendar",
                component: CalendarComponent
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
