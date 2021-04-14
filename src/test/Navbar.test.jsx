import React from "react"
import { shallow } from "enzyme"
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Navbar from "../components/Navbar"

const mockStore = configureMockStore();
const store = mockStore({
    challenge: { isOpen: true, reviewTime: false, formLink: 'https://form.typeform.com/to/l8JESrOz?typeform-medium=embed-snippet' }
});
let wrapper

describe("Header Component", () => {
    beforeEach(() => {
        wrapper = shallow(<Navbar store={store} />).shallow();
    });

    it("should render without errors", () => {
        expect(wrapper.find("#Navbar").length).toBe(1);
    })

})