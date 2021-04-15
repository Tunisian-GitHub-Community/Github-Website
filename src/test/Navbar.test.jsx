import React from "react"
import { shallow } from "enzyme"
import { Navbar } from "../components/Navbar"


const store = {
    challenge: { isOpen: true, reviewTime: false, formLink: 'https://form.typeform.com/to/l8JESrOz?typeform-medium=embed-snippet' }
};
let wrapper

describe("Header Component", () => {
    beforeEach(() => {
        wrapper = shallow(
            <Navbar challenge={store.challenge} />
        );
    });
    it("should render without errors", () => {
        expect(wrapper.find("[data-test='Navbar']").length).toBe(1);
    })

})