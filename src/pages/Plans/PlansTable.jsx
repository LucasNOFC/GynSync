import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { api } from "../../services/api";
import PlansColumns from "./PlansColumns";

const PlansTable = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await api.get("/plans");
        setLoading(true);
        setPlans(res.data);
      } catch (err) {
        setError(
          "Erro ao carregar os planos. Tente novamente mais tarde.",
          err,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  console.log(plans.data);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="bg-[#5c471f21]  p-5 border border-zinc-800 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <table className="bg-[#262626] w-full">
        <thead className="bg-[#151515] text-sm font-semibold">
          <tr>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer">
              Nome do plano
            </th>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer">
              Valor do plano
            </th>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer">
              Duração do plano
            </th>
            <th className="px-4 py-3 text-center text-gray-600/74 cursor-pointer">
              Descrição do plano
            </th>
            <th className="px-4 py-3 text-center text-gray-600/74">Ações</th>
          </tr>
        </thead>
        <PlansColumns plans={plans} />
      </table>
    </main>
  );
};

export default PlansTable;
