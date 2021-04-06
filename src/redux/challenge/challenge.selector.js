import { createSelector } from 'reselect';

const selectChallenge = (state) => state.challenge;

export const selectChallengeData = createSelector(
  [selectChallenge],
  (challenge) => challenge,
);
export default selectChallenge;
