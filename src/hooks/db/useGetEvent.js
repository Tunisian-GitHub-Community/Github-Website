import { useQuery } from "react-query";
import { getEvent } from "../../firebase";
const useGetEvent = () => {
  return useQuery("getEvent", getEvent, {
    staleTime: 60 * 10000, // refresh 5 minutes
  });
};

export default useGetEvent;
