/* eslint-disable no-undef */
import React from "react"
import { shallow } from "enzyme"
import { QueryClient, QueryClientProvider } from 'react-query'

import { checkProps } from "./utils"
import { TeamPage } from "../pages/TeamPage"
import TeamData from '../pages/TeamPage.data';
import { Team } from '../components/Team';

const queryClient = new QueryClient();
const setUp = (props = {}) => {
    const component = shallow(
        <QueryClientProvider client={queryClient}>
            <TeamPage />
        </QueryClientProvider >

    );
    return component;
};

let wrapper;
const members = shallow(<Team team={TeamData} />);
describe("TeamPage component", () => {
    beforeEach(() => {
        wrapper = setUp()
    });
    it("should render without errors", () => {
        expect(wrapper.find(TeamPage).length).toBe(1);
    })

    it('Should render members team grid without errors', () => {
        const propsErr = checkProps(members, TeamData)
        expect(propsErr).toBeUndefined();
    });

    it('Should render team grid with more than 3 members', () => {
        expect(members.find("[data-test='member']").length).toBeGreaterThanOrEqual(3);
    })
})