import { useQuery } from "react-query";
import { getDesign } from "../api/design";
import { DESIGN } from "../constants/queryKeys";

/*
Fetch the design data
*/
const useDesign = (designId, config = {}) => {
  const { data, ...rest } = useQuery(
    [DESIGN, designId],
    () => getDesign(designId),
    {
      staleTime: Infinity,
      ...config,
    }
  );

  return {
    design: data,
    ...rest,
  };
};

export default useDesign;
