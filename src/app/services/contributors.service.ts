import { gql } from 'graphql-request';

import { IContributor } from 'app/types/contributor.interface';
import { GenericGitHubService } from './github.service';

export class ContributorsService extends GenericGitHubService<IContributor> {
  constructor() {
    super(
      'contributors',
      gql`
        {
          organization(login: "Tunisian-GitHub-Community") {
            memberStatuses(first: 20) {
              edges {
                node {
                  emoji
                  user {
                    bio
                    name
                    url
                    avatarUrl
                  }
                }
              }
            }
          }
        }
      `,
    );
  }
}
