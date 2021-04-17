import React from 'react'
import axios from "axios";
import { useQuery } from 'react-query'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setRepos } from "../redux/organization/organization.actions";
import { selectRepos } from "../redux/organization/organization.selector";

import Spinner from '../components/Spinner';

const fetchRepos = async () => {
    const res = await axios.get("https://api.github.com/orgs/Tunisian-GitHub-Community/repos");
    return (res.data)
}

function WithRepos({ setRepos, repos, children }) {
    const { isLoading, error } = useQuery('repoData', fetchRepos, {
        staleTime: 60 * 5000 // refresh 5 minutes
        , onSuccess: (data) => { setRepos(data) }
    });
    if (isLoading) return <Spinner />

    if (error) return 'An error has occurred ' // TO DO : Create error component 

    return (
        <>
            {React.cloneElement(children, { repos })}
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    repos: selectRepos
});

const mapDispatchToProps = dispatch => ({
    setRepos: (repos) => dispatch(setRepos(repos))
});
export default connect(mapStateToProps, mapDispatchToProps)(WithRepos)
