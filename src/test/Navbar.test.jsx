import React from "react"
import { shallow } from "enzyme"
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { Navbar } from "../components/Navbar"


const middlewares = []
const mockStore = configureStore(middlewares)

const store = mockStore({
    challenge: { isOpen: true, reviewTime: false, formLink: 'https://form.typeform.com/to/l8JESrOz?typeform-medium=embed-snippet' }
});
let wrapper

describe("Header Component", () => {
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}>
            <Navbar />
        </Provider>);
    });
    console.log(wrapper.debug());
    it("should render without errors", () => {
        expect(wrapper.find("#Navbar").length).toBe(1);
    })

})