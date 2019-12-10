import React from "react";
import { mount } from "enzyme";

import moment from "moment";

import Root from "../../Root";
import ViewLink from "../ViewLink";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null
}));

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
      date: "September 8, 2019 2:28 AM"
    }
  };

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

  it("shows three buttons (copy, edit, and delete)", () => {
    expect(wrapper.find("button").length).toEqual(3);
  });

  it("copy button should have proper text", () => {
    expect(wrapper.find("button.copy-button").text()).toEqual("Copy");
  });

  it("check if date is properly shown", () => {
    expect(wrapper.find("span.link-date").text()).toEqual(
      initialState.Selected.date
    );
  });

  it("check if date format is properly displayed", () => {
    expect(wrapper.find("span.link-time").text()).toEqual(
      moment(new Date(initialState.Selected.date)).fromNow()
    );
  });

  it("check if text shows from redux", () => {
    expect(wrapper.find("a.link-title").text()).toEqual("Rust");
  });

  it("check if input value is redirectURL", () => {
    expect(wrapper.find("input.link-redirect").props().value).toEqual(
      "http://localhost:3001/redirect/2059fa03-2f11-4db7-9c82-17c189360e57"
    );
  });
});
