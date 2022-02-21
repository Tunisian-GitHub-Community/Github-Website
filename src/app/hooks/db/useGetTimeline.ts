import { useQuery } from 'react-query';
import { getTimeline } from '../../firebase';
const useGetTimeline = () => {
  return useQuery('getTimeline', getTimeline, {
    staleTime: 60 * 10000, // refresh 5 minutes
  });
};

export default useGetTimeline;
