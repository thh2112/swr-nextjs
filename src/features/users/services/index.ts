import axiosClient from "@/core/axios-config";

export const userService = {
  getUsers: async () => {
    const { data } = await axiosClient.get("api/users");
    return data;
  },
};
