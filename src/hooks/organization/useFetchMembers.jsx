import axios from "axios";
import { useQuery } from 'react-query'
// refrence : https://github.com/webmasterdevlin/react-query-course/tree/master/src/features/anti-heroes/hooks
const fetchMembers = async () => {
    const res = await axios.get("https://api.github.com/orgs/Tunisian-GitHub-Community/public_members");
    return (res.data)
}

const useFetchRepos = () => {
    return useQuery('fetchMembers', fetchMembers, {
        staleTime: 60 * 5000 // refresh 5 minutes
    });
}


export default useFetchRepos
