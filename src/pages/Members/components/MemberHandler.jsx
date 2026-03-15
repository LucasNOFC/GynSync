import { BanknotesIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";
import Confirm from "../../../components/Confirm";

const MemberHandler = ({ member }) => {
  const [confirm, setConfirm] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);

  const handleDelete = async (id) => {
    if (!confirm) return;

    const res = await api.delete(`/customers/${id}`);
    
  };

  const toggleMenu = () => {
    console.log("test");
    setConfirmBox((prev) => !prev);
  };

  return (
    <div className="bg-[#262626] p-5 rounded-3xl w-100 mt-5 flex flex-col gap-5 border border-zinc-700">
      {confirmBox && (
        <Confirm action={"deletar o membro"} toggleMenu={toggleMenu} />
      )}

      <p className="text-[18px]">Ações Rápidas</p>
      <ul className="flex flex-col gap-5">
        <Link
          to={`/members/edit/${member.id}`}
          className="flex gap-2 items-center justify-center p-3 text-center bg-yellow-500/15 border rounded-2xl border-yellow-400 cursor-pointer hover:bg-yellow-600/15 transition-all"
        >
          <PencilIcon className="w-8 text-yellow-400" />
          <p className="text-[15px] text-yellow-400">Editar Perfil</p>
        </Link>
        <Link
          to={`/members/payment/${member.id}`}
          className="flex gap-2 items-center justify-center p-3 text-center bg-green-500/15 border rounded-2xl border-green-400 cursor-pointer hover:bg-green-600/15 transition-all"
        >
          <BanknotesIcon className="w-8 text-green-400" />
          <p className="text-[15px] text-green-400">Registrar Pagamento</p>
        </Link>
        <button
          onClick={toggleMenu}
          className="flex gap-2 items-center justify-center p-3 text-center bg-red-500/15 border rounded-2xl border-red-400 cursor-pointer hover:bg-red-600/15 transition-all"
        >
          <TrashIcon className="w-8 text-red-400" />
          <p className="text-[15px] text-red-400 cursor-pointer">
            Deletar Membro
          </p>
        </button>
      </ul>
    </div>
  );
};

export default MemberHandler;
