import { createStore } from "vuex";
import * as event from "@/store/modules/events.js";
import * as notifications from "@/store/modules/notifications.js";

export default createStore({
  state: {
    categories: [
      "Sustainability",
      "Nature",
      "Animal Welfare",
      "Housing",
      "Education",
      "Food",
      "Community",
    ],
  },
  modules: { event, notifications },
});
