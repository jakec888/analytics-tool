import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import Login from "../Login";

describe("<Login /> Test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Login />
      </Root>
    );
  });

  it("shows one form", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("shows two inputs", () => {
    expect(wrapper.find("input").length).toEqual(2);
  });

  it("shows one login button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("button should have login text", () => {
    expect(wrapper.find("button").text()).toEqual("Login");
  });
});
