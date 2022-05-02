import { mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button", () => {
  it("renders a button", () => {
    const wrapper = mount(Button);
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
