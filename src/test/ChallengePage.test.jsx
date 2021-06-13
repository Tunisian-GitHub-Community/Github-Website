/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { ChallengeForm } from "../pages/ChallengeForm";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const setUp = (props = {}) => {
  const component = shallow(
    <QueryClientProvider client={queryClient}>
      <ChallengeForm />
    </QueryClientProvider>
  );

  return component;
};

let wrapper;
describe("FormPage component", () => {
  beforeEach(() => {
    wrapper = setUp();
  });
  it("should render without errors", () => {
    expect(wrapper.find("[data-test='ChallengeForm']").length).toBe(1);
  });

  it("Should render an iframe", () => {
    const desc = wrapper.find("iframe");
    expect(desc.length).toBe(1);
  });
});
