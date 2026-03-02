import React, { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import UserColumn from "./UserColumn";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await api.get("/users");
        setUsers(res.data.users.data);
        setLoading(false);
      } catch (error) {
        console.error("Errors", error);
      }
    };

    loadUsers();
  }, []);


  if (loading) {
    return <p className="text-white text-3xl font-semibold">Carregando...</p>
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-2xl shadow">
        <table className="min-w-full bg-[#262626]">
          <thead className="bg-[#151515] text-left text-sm font-semibold">
            <tr className="">
              <th className="px-4 py-3 font-bold text-gray-600/74">NOME</th>
              <th className="px-4 py-3 font-bold text-gray-600/74">ENDEREÇO DE EMAIL</th>
              <th className="px-4 py-3 font-bold text-gray-600/74">CARGO</th>
              <th className="px-4 py-3 font-bold text-gray-600/74">CONTROLES</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <UserColumn user={user} key={user.id} attUsers={setUsers}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
