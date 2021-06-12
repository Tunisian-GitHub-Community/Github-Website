import { getEventState } from "./eventUtils";

const INITIAL_STATE = getEventState();

const eventReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
export default eventReducer;
