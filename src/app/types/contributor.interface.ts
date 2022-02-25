export interface IContributor {
  bio: string;
  name: string;
  url: string;
  avatarUrl: string;
}

export interface IContributorResponse {
  node: {
    emoji: string;
    user: IContributor;
  };
}
