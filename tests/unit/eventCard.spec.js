import { mount, RouterLinkStub } from "@vue/test-utils";
import assert from "assert";
import EventCard from "@/components/EventCard.vue";

describe("EventCard Component", () => {
  it("adds the right params(id) for each event-card in the router-link", () => {
    const wrapper = mount(EventCard, {
      props: {
        event: {
          id: 2,
        },
      },
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
    });

    const links = wrapper.findAllComponents(RouterLinkStub);

    assert.strictEqual(links.length, 1);
    assert.strictEqual(links.at(0).props().to.name, "single-event");
    assert.strictEqual(links.at(0).props().to.params.id, 2);
  });

  it("displays event information", () => {
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
        stubs: { RouterLink: RouterLinkStub },
      },
    });

    expect(wrapper.html()).toContain("Park Cleanup");
    expect(wrapper.html()).toContain("12:00 on Nov 12, 2018");
    expect(wrapper.html()).toContain("132 N Magnolia Street, Orlando, Florida");
  });
});
