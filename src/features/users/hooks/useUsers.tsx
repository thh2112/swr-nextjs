import useSWR from "swr";
import { userService } from "../services";

const useUsers = () => {
  const { data, ...restSWR } = useSWR("api/users", userService.getUsers);

  return {
    ...restSWR,
    data,
  };
};

export default useUsers;
