import { useQuery } from 'react-query'
import { gql, GraphQLClient } from "graphql-request";

const fetchRepos = async () => {
  const endpoint = "https://api.github.com/graphql";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: 'bearer ' + process.env.REACT_APP_GITHUB_AUTH,
    },
  })
  const query = gql`
  {
    organization(login: "Tunisian-GitHub-Community") {
      repositories(isFork: true, first: 10, affiliations: ORGANIZATION_MEMBER) {
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
  `
  const data = await graphQLClient.request(query);
  return data.organization.repositories.edges
}

const useFetchRepos = () => {
  return useQuery('fetchRepos', fetchRepos, {
    staleTime: 60 * 5000 // refresh 5 minutes
  });
}

export default useFetchRepos;
// refrence : https://github.com/webmasterdevlin/react-query-course/tree/master/src/features/anti-heroes/hooks
