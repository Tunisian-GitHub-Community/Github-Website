import React from "react"
import { shallow } from "enzyme"

import { findByTestAtrr, checkProps } from "../utils"
import { Navbar } from "../../components/Navbar"

const setUp = (props = {}) => {
    const component = shallow(<Navbar challenge={props} />);
    return component;
};

const props = { isOpen: true, reviewTime: false, formLink: 'https://form.typeform.com/to/l8JESrOz?typeform-medium=embed-snippet' }
let wrapper;
describe("Navbar component", () => {
    beforeEach(() => {
        wrapper = setUp(props)
    });
    it("should render without errors", () => {
        expect(wrapper.find("[data-test='Navbar']").length).toBe(1);
    })

    it('Should not throw a props error', () => {
        const propsErr = checkProps(Navbar, props)
        expect(propsErr).toBeUndefined();
    });
    it('Should render logo', () => {
        const desc = findByTestAtrr(wrapper, 'logo');
        expect(desc.length).toBe(1);
    });
})