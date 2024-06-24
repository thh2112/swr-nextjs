"use client";

import useUsers from "@/features/users/hooks/useUsers";

const User = () => {

    const {data} = useUsers();
    console.log(data);
  return (
    <div className="text-center">
      <h2>User</h2>
      <ul>
        <li>{data?.data?.email}</li>
      </ul>
    </div>
  );
};

export default User;
