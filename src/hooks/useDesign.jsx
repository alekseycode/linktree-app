import { useQuery } from "@tanstack/react-query";
import { getDesign } from "../api/design";
import { GUEST_USER } from "../constants/constants";
import GUEST_DESIGN from "../../data";
import { DESIGN } from "../constants/queryKeys";

/*
Fetch the design data
*/
const useDesign = (designId, config = {}) => {
  const { data, ...rest } = useQuery({
    queryKey: [DESIGN, designId],
    queryFn: () =>
      designId === GUEST_USER.activeDesignId
        ? GUEST_DESIGN
        : getDesign(designId),

    staleTime: Infinity,
    ...config,
  });

  return {
    design: data,
    ...rest,
  };
};

export default useDesign;
