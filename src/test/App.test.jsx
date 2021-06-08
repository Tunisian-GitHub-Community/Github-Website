/* eslint-disable no-undef */
import React from "react"
import { shallow } from "enzyme"

import { App } from "../App"

let wrapper;
describe("App component", () => {
    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    it("App should render without erros! duh", () => {
        expect(wrapper.find("[data-test='App']").length).toBe(1);
    })
})

