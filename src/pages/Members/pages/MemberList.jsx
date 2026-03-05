import React, { useEffect, useState } from "react";
import { api } from "../../../services/api";
import MembersTable from "../components/MembersTable";
import UserTable from "../../UserTable/UserTable";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [countMember, setCountMember] = useState(67);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastpage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const loadMembers = async (page = 1) => {
    try {
      setLoading(true);

      const res = await api.get(`/customers?page=${page}`);

      setMembers(res.data.data);
      setCurrentPage(res.data.meta.current_page);
      setLastPage(res.data.meta.last_page);
      setCountMember(res.data.meta.total)

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMembers(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < lastpage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <p className="text-4xl m-auto text-white font-bold">Carregando...</p>
    );
  }

  return (
    <div>
      <div className="p-2 mb-8 flex flex-col gap-2">
        <p className="text-white text-2xl font-bold">Membros na base</p>
        <p className="text-gray-400 font-semibold text">Atualmente temos {countMember} registrados na academia.</p>
      </div>
      <MembersTable members={members} attMembers={setMembers}/>
      <div className="mt-20">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="text-white"
        >
          Anterior
        </button>
        <span className="mx-10 text-gray-400">
          Página {currentPage} de {lastpage}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === lastpage}
          className="text-white"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default MemberList;
