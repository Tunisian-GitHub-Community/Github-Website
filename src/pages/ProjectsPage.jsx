import React from 'react';
import axios from "axios";
import { useQuery } from 'react-query'
import Projects from '../components/Projects';
import Spinner from '../components/Spinner';


function ProjectsPage() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    axios.get("https://api.github.com/orgs/Tunisian-GitHub-Community/repos").then((res) => res.data)
  )

  if (isLoading) return <Spinner />

  if (error) return 'An error has occurred'
  return (
    <Projects projects={data} />
  );
}

export default ProjectsPage;
