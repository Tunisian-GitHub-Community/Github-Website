import React from 'react';
import Projects from '../components/Projects';
import useFetchRepos from '../hooks/organization/useFetchRepos';

export const ProjectsPage = () => {
  const { isLoading, error, data } = useFetchRepos();
  return (
    <div data-test="ProjectsPage">
      <Projects repos={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default ProjectsPage;
