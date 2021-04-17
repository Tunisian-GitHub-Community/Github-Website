/* eslint-disable no-undef */
import React from "react"
import { shallow } from "enzyme"

import { GuidelinesPage } from "../pages/GuidelinesPage"

const setUp = (props = {}) => {
    const component = shallow(<GuidelinesPage challenge={props} />);
    return component;
};

let wrapper;
describe("GuidelinesPage component", () => {
    beforeEach(() => {
        wrapper = setUp()
    });
    it("should render without errors", () => {
        expect(wrapper.find("[data-test='GuidelinesPage']").length).toBe(1);
    })
})