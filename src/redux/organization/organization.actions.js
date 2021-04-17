import OrganizationTypes from './organization.types';

export const setRepos = (repos) => ({
    type: OrganizationTypes.SET_REPOS,
    payload: repos
});

export default { setRepos }