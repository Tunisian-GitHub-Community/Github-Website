import { createSelector } from "reselect";

const selectEvent = (state) => state.event;

export const selectEventData = createSelector([selectEvent], (event) => event);
export default selectEvent;
