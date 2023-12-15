import { useQuery, useQueryClient } from "@tanstack/react-query";
import { USER } from "../constants/queryKeys";
import getUser from "../api/getUser";
import { GUEST_USER } from "../constants/constants";

const useUser = (config = {}) => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData([USER]);
  const { data, ...rest } = useQuery({
    queryKey: [USER],
    queryFn: () => (user?.userId === GUEST_USER.id ? user : getUser()),
    staleTime: Infinity,
    ...config,
  });
  return {
    user: data,
    ...rest,
  };
};

export default useUser;
