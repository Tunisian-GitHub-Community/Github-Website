import { useQuery } from 'react-query';
import { getChallenge } from '../../firebase';
const useGetChallenge = () => {
  return useQuery('getChallenge', getChallenge, {
    staleTime: 60 * 10000, // refresh 5 minutes
  });
};

export default useGetChallenge;
