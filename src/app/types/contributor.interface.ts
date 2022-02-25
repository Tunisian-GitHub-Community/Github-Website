export interface IContributor {
  bio: string;
  name: string;
  url: string;
  avatarUrl: string;
}

export interface IContributorResponse {
  data: {
    organization: {
      memberStatuses: {
        edges: {
          node: {
            emoji: string;
            user: IContributor;
          };
        }[];
      };
    };
  };
}
