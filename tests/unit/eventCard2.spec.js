import { shallowMount } from "@vue/test-utils";
import EventCard from "@/components/EventCard.vue";
import routes from "../../src/router/index.js";

describe("EventCard Component", () => {
  it("adds the right params(id) for each event-card", async () => {
    const wrapper = shallowMount(EventCard, {
      mocks: {
        $route: { name: "single-event", params: { id: 2 } },
      },
      props: {
        event: {
          id: 2,
          title: "Park Cleanup",
          date: "Nov 12, 2018",
          time: "12:00",
          location: "132 N Magnolia Street, Orlando, Florida",
          description: "We're going to clean up this park.",
          organizer: "Adam Jahr",
          category: "nature",
          attendees: [
            {
              id: "ghi789",
              name: "Beth Swanson",
            },
          ],
        },
      },
    });
    expect(wrapper.text()).toContain("Park Cleanup");
  });
});
