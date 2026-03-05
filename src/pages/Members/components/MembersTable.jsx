import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { api } from "../../../services/api";

const MembersTable = ({ members, attMembers }) => {
  const [error, setError] = useState(false);

  const deleteMember = async (id) => {
    try {
      await api.delete(`/members/${id}`);
      attMembers((prev) => prev.filter((member) => member.id !== id));
    } catch {
      setError("Erro ao deletar usuário");
    }
  };

  return (
    <table className="bg-[#262626]">
      <thead className="bg-[#151515] text-left text-sm font-semibold">
        <tr>
          <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
            Nome
          </th>
          <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
            Email
          </th>
          <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
            Plano
          </th>
          <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
            Status
          </th>
          <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
            Dia de vencimento
          </th>
          <th className="px-4 py-3 font-bold text-gray-600/74 text-center">
            Ações
          </th>
        </tr>
      </thead>

      <tbody className="divide-y">
        {members.map((member) => {
          return (
            <tr
              key={member.id}
              className="hover:bg-[#202020] transition-colors cursor-pointer"
            >
              <td className="px-4 py-3 font-medium ">
                <p className="text-center font-extrabold capitalize text-white">
                  {member.name}
                </p>
              </td>
              <td className="px-4 py-3 font-medium ">
                <p className="text-gray-400/50 font-semibold text-center">
                  {member.email}
                </p>
              </td>
              <td className="px-4 py-3 font-medium ">
                <p className="text-gray-400/50 font-semibold text-center">
                  {member.plan.name}
                </p>
              </td>
              <td className="px-4 py-3 font-medium ">
                <p className="text-gray-400/50 font-semibold text-center">
                  {member.status}
                </p>
              </td>
              <td className="px-4 py-3 font-medium">
                <p className="text-gray-400/50 font-semibold text-center">
                  {member.due_day}
                </p>
              </td>
              <td className="px-4 py-3 font-medium flex gap-2">
                <button onClick={() => deleteMember(member.id)}>
                  <TrashIcon className="w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
                </button>
                <Link to={`/members/edit/${member.id}`}>
                  <PencilIcon className="w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MembersTable;
