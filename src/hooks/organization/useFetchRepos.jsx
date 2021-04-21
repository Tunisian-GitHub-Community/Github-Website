import axios from "axios";
import { useQuery } from 'react-query'
// refrence : https://github.com/webmasterdevlin/react-query-course/tree/master/src/features/anti-heroes/hooks
const fetchRepos = async () => {
    const res = await axios.get("https://api.github.com/orgs/Tunisian-GitHub-Community/repos");
    return (res.data)
}

const useFetchRepos = () => {
    return useQuery('fetchRepos', fetchRepos, {
        staleTime: 60 * 5000 // refresh 5 minutes
    });
}


export default useFetchRepos
