import React from 'react';
import WithRepos from "../container/WithRepos";
import Projects from '../components/Projects';

export const ProjectsPage = () => (
  <WithRepos data-test="ProjectsPage">
    <Projects />
  </WithRepos>
);

export default ProjectsPage;
