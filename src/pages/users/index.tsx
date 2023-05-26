import React, { useEffect, useState } from "react";
import { ApiClient, User } from "../../api-client";
import Loader from "../../components/loader";
import { ColumnsType } from "antd/es/table";
import TableComponent from "../../components/table";

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

  const columns: ColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
  ];

  const data: User[] = users;

  if (isLoading) {
    return <Loader />;
  }

  if (!users) {
    return <p>No data...</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      <TableComponent data={data} columns={columns} />
    </div>
  );
};

export default Users;
