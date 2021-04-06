import { getChallengeState } from './challengeUtils';

const INITIAL_STATE = getChallengeState();

const challengeReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
export default challengeReducer;
