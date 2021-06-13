/* eslint-disable no-undef */
import React from "react"
import { shallow } from "enzyme"
import { QueryClient, QueryClientProvider } from "react-query";

import { findByTestAtrr, checkProps } from "./utils"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

const queryClient = new QueryClient();

let wrapper;
describe("Navbar component", () => {
    beforeEach(() => {
        wrapper = shallow( <QueryClientProvider client={queryClient}>
            <Navbar />
          </QueryClientProvider>>);
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

describe("Footer component", () => {
    beforeEach(() => {
        wrapper = shallow(<Footer />)
    });
    it("should render without errors", () => {
        expect(wrapper.find("[data-test='Footer']").length).toBe(1);
    })
})