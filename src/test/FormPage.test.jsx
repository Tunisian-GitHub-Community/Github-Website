/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";

import { checkProps } from "./utils";
import { FormPage } from "../pages/FormPage";

const setUp = (props = {}) => {
  const component = shallow(<FormPage challenge={props} />);
  return component;
};

const props = {
  isOpen: true,
  formLink:
    "https://form.typeform.com/to/l8JESrOz?typeform-medium=embed-snippet",
};
let wrapper;
describe("FormPage component", () => {
  beforeEach(() => {
    wrapper = setUp(props);
  });
  it("should render without errors", () => {
    expect(wrapper.find("[data-test='FormPage']").length).toBe(1);
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
