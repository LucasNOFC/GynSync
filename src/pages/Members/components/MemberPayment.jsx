import React, { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";

const MemberPayment = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(false);
  const [memberName, setMemberName] = useState("");

  const { id } = useParams();

  const onSubmit = async (data) => {
    try {
      await api.post(`/members/${id}/payments`, {
        member_id: id,
        paid_at: data.paid_at,
      });

      showContainer(setSuccess);
    } catch (err) {
      if (err.response?.data?.errors?.payment?.[0]) {
        setError(true);
        setErrorMessage(err.response.data.message);
      } else {
        setError(true);
        setErrorMessage("Erro ao registrar o pagamento.");
      }
      showContainer(setError);
    }
  };

  const showContainer = (setter) => {
    setter(true);

    setTimeout(() => {
      setter(false);
    }, 3000);
  };

  useEffect(() => {
    if (!id) return;

    const loadUser = async (id) => {
      setLoading(true);
      try {
        const res = await api.get(`/members/${id}`);
        setMember(res.data.data);
      } catch {
        setError("Erro ao acessar os dados do usuário para pagamento.");
      } finally {
        setLoading(false);
      }
    };

    loadUser(id);
  }, [id]);

  useEffect(() => {
    if (member?.name) {
      const splitted = member.name.split(" ");
      setMemberName(splitted.slice(0, 2).join(" "));
    }
  }, [member]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: member?.name,
      payment: member?.value,
      paid_at: new Date().toISOString().split("T")[0],
    },
  });

  useEffect(() => {
    reset({
      name: member?.name,
      payment: member?.plan?.price,
      paid_at: new Date().toISOString().split("T")[0],
    });
  }, [reset, member]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-[#1f1f1f] w-120 rounded-2xl">
      <div
        className={`
              absolute bottom-0 right-0 p-3 m-5
              bg-green-800 rounded-2xl font-bold text-gray-200
              shadow-[7px_12px_19px_2px_rgba(0,_0,_0,_0.17)]
              transition-all duration-500 ease-out
              ${
                success
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }
            `}
      >
        Pagamento registrado com sucesso!
      </div>

      <div
        className={`
              absolute bottom-0 right-0 p-3 m-5
              bg-red-800 rounded-2xl font-bold text-gray-200
              shadow-[7px_12px_19px_2px_rgba(0,_0,_0,_0.17)]
              transition-all duration-500 ease-out
              ${
                error
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }
            `}
      >
        {errorMessage}
      </div>

      <div className="bg-[#1f1f1f] p-5 rounded-2xl">
        <p className="text-orange-400 font-semibold tracking-wider">
          NOVA ENTRADA
        </p>
        <h1 className="text-zinc-200 text-2xl font-semibold tracking-wide">
          Registrar pagamento
        </h1>
        <p className="text-zinc-600 ">
          Revise informações do membro {memberName}
        </p>
      </div>

      <form className="bg-[#1a1a1a] p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 mb-5">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 font-semibold tracking-wider">
              NOME DO MEMBRO
            </span>
            <input
              value={member?.name}
              className="p-2 border-2 pl-5 text-zinc-400 rounded-2xl bg-[#262626] border-[#302d2d]"
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 font-semibold tracking-wider">
              VALOR DO PAGAMENTO
            </span>
            <input
              {...register("payment", {
                required: "O pagamento é obrigatório",
              })}
              type="text"
              className="p-2 border-2 pl-5  rounded-2xl text-zinc-400 bg-[#262626] border-[#302d2d]"
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <span className="text-zinc-600 font-bold tracking-wider">
                DATA DE PAGAMENTO
              </span>
              <input
                {...register("paid_at")}
                type="date"
                className="p-2 border-2 pl-5 rounded-2xl text-zinc-400 bg-[#262626] border-[#302d2d]"
              />
            </div>
          </div>
        </div>
        <button className="p-3 bg-yellow-500 w-full text-center text-white font-bold mt-5 rounded-2xl cursor-pointer hover:bg-yellow-600 transition-colors">
          Registrar pagamento
        </button>
      </form>
    </div>
  );
};

export default MemberPayment;
