import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true // compDidMount and compDidUpdate are not called after setProps/setContext
});