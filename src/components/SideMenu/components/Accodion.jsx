import React from "react";
import { Link } from "react-router-dom";

const Accodion = () => {
  return (
    <div className="ml-8 flex flex-col gap-2 mb-2">
      <Link to="/user/create" className="text-sm font-medium text-yellow-300">
        Cadastrar novo usuário
      </Link>
      <Link to="/users" className="text-sm font-medium text-yellow-300">
        Listar usuários
      </Link>
    </div>
  );
};

export default Accodion;
