/* eslint-disable no-undef */
import React from "react"
import { shallow } from "enzyme"
import { QueryClient, QueryClientProvider } from 'react-query'

import { checkProps } from "./utils"
import { ProjectsPage } from "../pages/ProjectsPage"
import { Projects } from '../components/Projects';

const queryClient = new QueryClient();
const setUp = (props = {}) => {
    const component = shallow(
        <QueryClientProvider client={queryClient}>
            <ProjectsPage />
        </QueryClientProvider >
    );
    return component;
};

let wrapper;
const repos = [{
    node: {
        name: "",
        description: "",
        full_name: ""
    }
}];
const projects = shallow(<Projects repos={repos} />);

describe("ProjectsPage component", () => {
    beforeEach(() => {
        wrapper = setUp()
    });
    it("should render without errors", () => {
        expect(wrapper.find(ProjectsPage).length).toBe(1);
    })

    it('Should render project table without errors', () => {
        const propsErr = checkProps(projects, repos)
        expect(propsErr).toBeUndefined();
    });

    it('Should render atleast 1 repo', () => {
        expect(projects.find("[data-test='repo']").length).toBeGreaterThanOrEqual(1);
    })
})