import { mount } from "@vue/test-utils";
import EventCardSingle from "@/components/EventCardSingle.vue";

describe("EventCardSingle Component", () => {
  it("displays event information", () => {
    const wrapper = mount(EventCardSingle, {
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
    });

    expect(wrapper.html()).toContain("Park Cleanup");
    expect(wrapper.html()).toContain("12:00 on Nov 12, 2018");
    expect(wrapper.html()).toContain("132 N Magnolia Street, Orlando, Florida");
    expect(wrapper.html()).toContain("We're going to clean up this park.");
    expect(wrapper.html()).toContain("Beth Swanson");
    expect(wrapper.html()).toContain("nature");
  });
});
