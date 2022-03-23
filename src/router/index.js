import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EventList from "../views/EventList.vue";
import EventCreate from "../views/EventCreate.vue";
import NetworkIssue from "../views/NetworkIssue.vue";
import NotFound from "../views/NotFound.vue";
import SingleEvent from "../views/SingleEvent.vue";
import NProgress from "nprogress";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/events",
    name: "event-list",
    component: EventList,
    props: true,
  },
  {
    path: "/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/event/:id",
    name: "single-event",
    component: SingleEvent,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("event/fetchEvent", routeTo.params.id)
        .then((event) => {
          routeTo.params.event = event;
          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "event" } });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/networkIssue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "404", params: { resource: "page" } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
