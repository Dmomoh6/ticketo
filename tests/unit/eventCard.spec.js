import { mount } from "@vue/test-utils";

import EventCard from "@/components/EventCard.vue";

describe("EventCard Component", () => {
  it("adds the right params(id) for each event-card", async () => {
    const mockRoute = { name: "single-event", params: { id: 2 } };
    const mockRouter = {
      push: jest.fn(),
    };

    const wrapper = mount(EventCard, {
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
            {
              id: "jkl101",
              name: "Mary Gordon",
            },
          ],
        },
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });

    await wrapper.find("div.event").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith("/events/2");

    expect(wrapper.find("div.event").exists()).toBe(true);
  });
});
