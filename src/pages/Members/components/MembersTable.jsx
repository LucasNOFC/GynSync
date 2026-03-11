import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const MembersTable = ({ members, deleteMember, search, setSearch, handleSort }) => {
  return (
    <div className="bg-[#5c471f21] w-[70%] p-5 border border-zinc-800 rounded-2xl">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 my-2 w-[50%] bg-[#262626] rounded border-zinc-800 border text-zinc-400 font-semibold"
          placeholder="Pesquise o membro"
        />

        
      </form>

      <table className="bg-[#262626] w-full">
        <thead className="bg-[#151515] text-sm font-semibold">
          <tr>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer" onClick={() => handleSort("name")} >Nome</th>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer" onClick={() => handleSort("email")} >Email</th>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer" onClick={() => handleSort("plan")} >Plano</th>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer"  onClick={() => handleSort("status")}>Status</th>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer" onClick={() => handleSort("due_day")}> 
              Dia de vencimento
            </th>
            <th className="px-4 py-3 text-center text-gray-600/74">Ações</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {members.map((member) => (
            <tr
              key={member.id}
              className="hover:bg-[#202020] transition-colors"
            >
              <td className="px-4 py-3">
                <NavLink
                  to={`/members/page/${member.id}`}
                  className="font-extrabold capitalize text-white"
                >
                  {member.name}
                </NavLink>
              </td>

              <td className="px-4 py-3 text-center text-gray-400">
                {member.email}
              </td>

              <td className="px-4 py-3 text-center text-gray-400">
                {member.plan?.name}
              </td>

              <td className="px-4 py-3 text-center text-gray-400">
                {member.status}
              </td>

              <td className="px-4 py-3 text-center text-gray-400">
                {member.due_day}
              </td>

              <td className="px-4 py-3 flex justify-center gap-2">
                <button onClick={() => deleteMember(member.id)}>
                  <TrashIcon className="w-6 text-gray-400 hover:text-gray-600" />
                </button>

                <Link to={`/members/edit/${member.id}`}>
                  <PencilIcon className="w-6 text-gray-400 hover:text-gray-600" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersTable;
