import { mount, RouterLinkStub } from "@vue/test-utils";
import assert from "assert";
import NavBar from "@/components/NavBar.vue";

describe("NavBar Component", () => {
  it("ensures the right routes are passed to the 'to' attributes", () => {
    const wrapper = mount(NavBar, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
      },
    });

    const links = wrapper.findAllComponents(RouterLinkStub);

    assert.strictEqual(links.length, 3);
    assert.strictEqual(links.at(0).props().to.name, "home");
    assert.strictEqual(links.at(1).props().to.name, "event-list");
    assert.strictEqual(links.at(2).props().to.name, "event-create");
  });
});
