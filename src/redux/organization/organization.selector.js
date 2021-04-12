import { createSelector } from 'reselect';

const selectOrganization = (state) => state.organization;

export const selectRepos = createSelector(
    [selectOrganization],
    (organization) => organization.repos,
);
export default selectOrganization;
