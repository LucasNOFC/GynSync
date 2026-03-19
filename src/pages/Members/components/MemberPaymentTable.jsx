import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { api } from "../../../services/api";
import MemberPaymentColumns from "./MemberPaymentColumns";

const MemberPaymentTable = () => {
  const [payments, setPayments] = useState([]);
  const [meta, setMeta] = useState({});
  const [links, setLinks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  const fetchPayments = useCallback(
    async (url = null) => {
      try {
        setLoading(true);

        const endpoint = url || `/members/${id}/payments`;
        const res = await api.get(endpoint);

        setPayments(res?.data?.data || []);
        setMeta({
          current_page: res?.data?.current_page,
          last_page: res?.data?.last_page,
        });
        setLinks({
          prev: res?.data?.prev_page_url,
          next: res?.data?.next_page_url,
        });
      } catch {
        setError("Erro ao carregar os pagamentos.");
      } finally {
        setLoading(false);
      }
    },
    [id],
  );

  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-5 rounded-2xl">
      <table className="bg-[#262626] w-full rounded-2xl">
        <thead className="bg-[#151515] text-sm font-semibold">
          <tr>
            <th className="px-4 py-3 text-center text-gray-600/74">
              Data de pagamento
            </th>
            <th className="px-4 py-3 text-center text-gray-600/74">
              Valor do pagamento
            </th>
          </tr>
        </thead>
        <MemberPaymentColumns payments={payments} id={id} />
      </table>

      <div className="flex justify-center gap-2 mt-4 text-sm">
        <button
          disabled={!links.prev}
          onClick={() => fetchPayments(links.prev)}
          className="px-3 py-1 bg-[#151515] text-gray-400 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="text-gray-500">
          Página {meta.current_page} de {meta.last_page}
        </span>

        <button
          disabled={!links.next}
          onClick={() => fetchPayments(links.next)}
          className="px-3 py-1 bg-[#151515] text-gray-400 rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default MemberPaymentTable;
