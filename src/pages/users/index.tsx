import React, { useEffect, useState } from "react";
import { ApiClient, User } from "../../api-client";
import Loader from "../../components/loader";

const Users = () => {
  const [users, setUser] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiClient = new ApiClient();
        const userData = await apiClient.requestUsers();
        setUser(userData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!users) {
    return <p>No data...</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user, idx) => {
          return (
            <div key={idx}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
