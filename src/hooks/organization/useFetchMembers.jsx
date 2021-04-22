import { useQuery } from 'react-query'
import { gql, GraphQLClient } from "graphql-request";

const fetchMembers = async () => {
  const endpoint = "https://api.github.com/graphql";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: 'bearer ' + process.env.REACT_APP_GITHUB_AUTH,
    },
  })
  const query = gql`
  {
    organization(login: "Tunisian-GitHub-Community") {
      memberStatuses(first: 10) {
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
  `
  const data = await graphQLClient.request(query);
  return data.organization.memberStatuses.edges
}

const useFetchRepos = () => {
  return useQuery('fetchMembers', fetchMembers, {
    staleTime: 60 * 10000 // refresh 5 minutes
  });
}

export default useFetchRepos;
// refrence : https://github.com/webmasterdevlin/react-query-course/tree/master/src/features/anti-heroes/hooks

