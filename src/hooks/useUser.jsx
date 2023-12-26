import { useQuery, useQueryClient } from "@tanstack/react-query";
import { USER } from "../constants/queryKeys";
import getUser from "../api/getUser";
import { GUEST_USER } from "../constants/constants";
import { useSetAtom } from "jotai";
import { viewingDesignAtom } from "../appState/appState";

const useUser = (config = {}) => {
  const queryClient = useQueryClient();
  const setViewingDesignAtom = useSetAtom(viewingDesignAtom);
  const user = queryClient.getQueryData([USER]);
  const { data, ...rest } = useQuery({
    queryKey: [USER],
    queryFn: async () => {
      const data = user?.userId === GUEST_USER.id ? user : await getUser();
      setViewingDesignAtom(data.activeDesignId);
      return data;
    },
    staleTime: Infinity,
    ...config,
  });
  return {
    user: data,
    ...rest,
  };
};

export default useUser;
