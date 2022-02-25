import { GraphQLClient } from 'graphql-request';
import { useQuery } from 'react-query';

import { Utils } from '.';

export class GenericGitHubService<T> {
  protected prefix: string = '';
  protected query: string = '';

  private endpoint = Utils.GITHUB_URL;
  private client = new GraphQLClient(this.endpoint, this.getheaders());

  constructor(prefix: string, query: string) {
    this.prefix = prefix;
    this.query = query;
  }

  private getheaders() {
    return {
      headers: {
        Authorization: 'bearer ' + process.env.REACT_APP_GITHUB_AUTH,
      },
    };
  }

  getQuery = async () => {
    return ((await this.client.request(this.query)) as T) || [];
  };

  useGetQuery = () => {
    return useQuery(this.prefix, this.getQuery, {
      staleTime: 60 * 10000, // refresh 5 minutes
    });
  };
}
