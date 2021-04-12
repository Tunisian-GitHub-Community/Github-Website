import React from 'react';
import WithRepos from "../container/WithRepos";
import Projects from '../components/Projects';

function ProjectsPage() {

  return (
    <WithRepos>
      <Projects />
    </WithRepos>
  );
}

export default ProjectsPage;
