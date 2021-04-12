import OrganizationTypes from './organization.types';

const INITIAL_STATE = {
    repos: []
};

const organizationReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case OrganizationTypes.SET_REPOS:
            return {
                ...state,
                repos: payload,
            };
        default:
            return state;
    }
};

export default organizationReducer;
