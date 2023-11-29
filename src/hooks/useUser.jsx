import { useQuery } from "@tanstack/react-query";
import { USER } from "../constants/queryKeys";
import getUser from "../api/getUser";

const useUser = (config = {}) => {
  const { data, ...rest } = useQuery({
    queryKey: [USER],
    queryFn: getUser,
    staleTime: Infinity,
    ...config,
  });
  return {
    user: data,
    ...rest,
  };
};

export default useUser;
