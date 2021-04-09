import React from 'react';
import axios from "axios";
import { useQuery } from 'react-query'
import Projects from '../components/Projects';
import Spinner from '../components/Spinner';

const fetchRepos = async () => {
  const res = await axios.get("https://api.github.com/orgs/Tunisian-GitHub-Community/repos");
  return (res.data)
}

function ProjectsPage() {
  const { isLoading, error, data } = useQuery('repoData', fetchRepos, {
    staleTime: 60 * 5000 // refresh 5 minutes
  });

  if (isLoading) return <Spinner />

  if (error) return 'An error has occurred ' // TO DO : Create error component 
  return (
    <Projects projects={data} />
  );
}

export default ProjectsPage;
