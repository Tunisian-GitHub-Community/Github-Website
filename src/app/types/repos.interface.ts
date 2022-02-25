export interface IProjects {
  name: string;
  description: string;
  url: string;
}

export interface IReposResponse {
  data: {
    organization: {
      repositories: {
        edges: {
          node: IProjects;
        };
      };
    };
  };
}
