import { BanknotesIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const MemberHandler = () => {
  return (
    <div className="bg-[#262626] p-5 rounded-3xl w-100 mt-5 flex flex-col gap-5 border border-zinc-700">
      <p className="text-[18px]">Ações Rápidas</p>
      <ul className="flex flex-col gap-5">
        <div className="flex gap-2 items-center justify-center p-3 text-center bg-yellow-500/15 border rounded-2xl border-yellow-400 cursor-pointer hover:bg-yellow-600/15 transition-all">
          <PencilIcon className="w-8 text-yellow-400" />
          <Link className="text-[15px] text-yellow-400">Editar Perfil</Link>
        </div>
        <div className="flex gap-2 items-center justify-center p-3 text-center bg-green-500/15 border rounded-2xl border-green-400 cursor-pointer hover:bg-green-600/15 transition-all">
          <BanknotesIcon className="w-8 text-green-400" />
          <Link className="text-[15px] text-green-400">Registrar Pagamento</Link>
        </div>
        <div className="flex gap-2 items-center justify-center p-3 text-center bg-red-500/15 border rounded-2xl border-red-400 cursor-pointer hover:bg-red-600/15 transition-all">
          <TrashIcon className="w-8 text-red-400" />
          <Link className="text-[15px] text-red-400">Deletar Membro</Link>
        </div>
      </ul>
    </div>
  );
};

export default MemberHandler;
