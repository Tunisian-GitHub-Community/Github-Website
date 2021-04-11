import { createSelector } from 'reselect';

const selectOrganization = (state) => state.organization;

export const selectReposData = createSelector(
    [selectOrganization],
    (repos) => repos.list,
);
export default selectChallenge;
