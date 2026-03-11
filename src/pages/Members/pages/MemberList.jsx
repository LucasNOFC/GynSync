import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import MembersTable from "../components/MembersTable";
import Loading from "../../../components/Loading";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [countMember, setCountMember] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [direction, setDirection] = useState("asc");

  const loadMembers = async (page = 1, searchValue = search) => {
    try {
      setLoading(true);

      const res = await api.get("/members", {
        params: {
          page: page,
          search: searchValue,
          sort_by: sortBy,
          direction: direction
        },
      });

      setMembers(res.data.data);
      setCurrentPage(res.data.meta.current_page);
      setLastPage(res.data.meta.last_page);
      setCountMember(res.data.meta.total);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setDirection("asc");
    }
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      loadMembers(1);
      setCurrentPage(1);
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  useEffect(() => {
    loadMembers(currentPage);
  }, [currentPage, sortBy, direction]);

  const deleteMember = async (id) => {
    try {
      await api.delete(`/members/${id}`);
      loadMembers(currentPage);
    } catch (err) {
      console.error(err);
    }
  };

  const nextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="p-2 mb-8 flex flex-col gap-2">
        <p className="text-white text-2xl font-bold">Membros na base</p>

        <p className="text-gray-400 font-semibold">
          Atualmente temos {countMember} registrados na academia.
        </p>
      </div>

      <MembersTable
        members={members}
        deleteMember={deleteMember}
        search={search}
        setSearch={setSearch}
        handleSort={handleSort}
      />

      <div className="mt-5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="text-white"
        >
          Anterior
        </button>

        <span className="mx-10 text-gray-400">
          Página {currentPage} de {lastPage}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === lastPage}
          className="text-white"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default MemberList;
