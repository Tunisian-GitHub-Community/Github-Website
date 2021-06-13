/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { ChallengeForm } from "../pages/ChallengeForm";

const setUp = (props = {}) => {
  const component = shallow(<ChallengeForm />);
  return component;
};

let wrapper;
describe("FormPage component", () => {
  beforeEach(() => {
    wrapper = setUp(props);
  });
  it("should render without errors", () => {
    expect(wrapper.find("[data-test='ChallengeForm']").length).toBe(1);
  });

  it("Should not throw a props error", () => {
    const propsErr = checkProps(FormPage, props);
    expect(propsErr).toBeUndefined();
  });
  it("Should render an iframe", () => {
    const desc = wrapper.find("iframe");
    expect(desc.length).toBe(1);
  });
});
