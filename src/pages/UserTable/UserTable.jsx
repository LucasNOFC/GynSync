import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import UserColumn from "./UserColumn";
import Loading from "../../components/Loading";

const UserTable = ({ getUsers, getAdmins }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    const getGroup = () => {
      let countAdmin = 0;

      users.forEach((userRole) => {
        if (userRole.role === "admin") {
          countAdmin += 1;
        }
      });

      return { countAdmin };
    };

    const countedUsers = getGroup();

    getUsers?.(totalUser);
    getAdmins?.(countedUsers.countAdmin);
  }, [users, getUsers, getAdmins, totalUser]);

  useEffect(() => {
    const loadUsers = async (page = 1) => {
      try {
        const res = await api.get(`/users?page=${page}`);
        setUsers(res.data.users.data);
        setTotalUser(res.data.users.total);
        setCurrentPage(res.data.users.current_page);
        setLastPage(res.data.users.last_page);
      } catch (error) {
        console.error("Errors", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > lastPage) return;
    setCurrentPage(page);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-2xl shadow">
        <table className="bg-[#262626]">
          <thead className="bg-[#151515] text-left text-sm font-semibold">
            <tr className="">
              <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
                NOME
              </th>
              <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
                ENDEREÇO DE EMAIL
              </th>
              <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
                CARGO
              </th>
              <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
                CONTROLES
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <UserColumn user={user} key={user.id} attUsers={setUsers} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
