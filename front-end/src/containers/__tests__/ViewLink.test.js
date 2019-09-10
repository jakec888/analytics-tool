import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import ViewLink from "../ViewLink";

describe("<ViewLink /> Test", () => {
  let wrapper;

  const initialState = {
    Selected: {
      data: [],
      redirectURL:
        "http://localhost:3001/redirect/2059fa03-2f11-4db7-9c82-17c189360e57",
      userId: "65ce5dad-85df-4355-94f5-2669d8fce4de",
      link: "https://www.rust-lang.org",
      title: "Rust",
      date: "Sun, 08 Sep 2019 09:28:25 GMT"
    }
  };

  // initialState={initialState}

  beforeEach(() => {
    wrapper = mount(
      <Root initialState={initialState}>
        <ViewLink />
      </Root>
    );
  });

  it("shows one input", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });

  it("shows one copy button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  // it("copy button should have proper text", () => {
  //   expect(wrapper.find("button").text()).toEqual("Copy");
  // });

  it("check if text shows from redux", () => {
    expect(wrapper.find("a.link-title").text()).toEqual("Rust");
  });
});
