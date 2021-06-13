/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";

import { checkProps } from "./utils";
import { HomePage } from "../pages/HomePage";
import cardsData from "../pages/data/HomePage.data";

import { ActiviesGrid } from "../components/ActiviesGrid";

const setUp = (props = {}) => {
  const component = shallow(<HomePage challenge={props} />);
  return component;
};

let wrapper;
const activities = shallow(<ActiviesGrid cards={cardsData} />);
describe("HomePage component", () => {
  beforeEach(() => {
    wrapper = setUp();
  });
  it("should render without errors", () => {
    expect(wrapper.find("[data-test='HomePage']").length).toBe(1);
  });

  it("Should render activities Grid without errors", () => {
    const propsErr = checkProps(activities, cardsData);
    expect(propsErr).toBeUndefined();
  });

  it("Should render activities Grid with 4 cards", () => {
    expect(activities.find("[data-test='ActiviesItem']").length).toBe(4);
  });
});
