import React from "react";
import { api } from "../../services/api";

const UserColumn = ({ user }) => {

  const deleteUser = async (data) => {
    try {
      const res = await api.delete("/users/delete", data);
      console.log(res);
    } catch (error) {
      console.error("Error", error);
    }
  }


  return (
    <tr key={user.id} className="hover:bg-[#202020] transition-colors cursor-pointer">
      <td className="px-4 py-3 font-medium">
        <p className="text-left font-extrabold capitalize text-white">
          {user.name}
        </p>
      </td>
      <td className="px-4 py-3 text-gray-400">
        <p className="text-gray-400/50 font-semibold">{user.email}</p>
      </td>
      <td className="px-4 py-3">
        {user.role === "admin" ? (
          <p className="bg-orange-200/35 text-center p-2 border-orange-400 border rounded-2xl text-amber-500 font-bold capitalize">
            {user.role}
          </p>
        ) : (
          <p className="bg-green-300/35 text-center p-2 border-emerald-600 border rounded-2xl text-emerald-500 font-bold capitalize">
            {user.role}
          </p>
        )}
      </td>
      <td>
        <button value={user.id} onClick={deleteUser}>Deletar</button>
      </td>
    </tr>
  );
};

export default UserColumn;
