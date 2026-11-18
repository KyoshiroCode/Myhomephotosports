import { createRouter, createWebHistory } from "vue-router";

import picture from "@/page/picture.vue"
import home from "@/page/home.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home,
    },
    {
        path: '/picture',
        name: 'Picture',
        component: picture,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior() {
    return { top: 0 };
  },

});

export default router;