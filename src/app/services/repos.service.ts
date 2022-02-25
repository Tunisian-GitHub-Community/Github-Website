import { gql } from 'graphql-request';

import { IReposResponse } from 'app/types/repos.interface';
import { GenericGitHubService } from './github.service';

export class ReposService extends GenericGitHubService<IReposResponse> {
  constructor() {
    super(
      'repos',
      gql`
        {
          organization(login: "Tunisian-GitHub-Community") {
            repositories(isFork: true, first: 10) {
              edges {
                node {
                  name
                  description
                  url
                }
              }
            }
          }
        }
      `,
    );
  }
}
