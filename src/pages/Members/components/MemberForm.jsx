import React, { useEffect, useState } from "react";
import { get, useForm } from "react-hook-form";
import { api } from "../../../services/api";

const MemberForm = ({ user, id }) => {
  const [success, setSuccess] = useState(false);
  const [todayDate, setTodayDate] = useState("");
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState(null);
  const [memberPage, setMemberPage] = useState([]);

  useEffect(() => {
    const getPlans = async () => {
      const res = await api.get("/plans");
      setPlans(res.data.data);
      setMemberPage(user);
    };

    getPlans();
  }, [user]);

  useEffect(() => {
    const getTodayDay = async () => {
      const today = new Date();

      const todayDay = String(today.getDate());

      setTodayDate(parseInt(todayDay));
    };

    getTodayDay();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: memberPage?.name,
      email: memberPage?.email,
      phone: memberPage?.phone,
      plan_id: memberPage?.plan?.id,
      due_day: todayDate,
    },
  });

  useEffect(() => {
    if (memberPage) {
      reset({
        name: memberPage?.name,
        email: memberPage?.email,
        phone: memberPage?.phone,
        plan_id: memberPage?.plan?.id,
        due_day: todayDate,
      });
    }
  }, [memberPage, reset, todayDate]);

  const showContainer = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const createMember = async (data) => {
    console.log(data);
    await api.post("/members", data);
  };

  const editMember = async (data) => {
    console.log(data);
    const res = await api.put(`/members/${id}`, data);
    setMemberPage(res.data.data);
    reset(res.data.data);
  };

  const onSubmit = async (data) => {
    try {
      !id ? createMember(data) : editMember(data, id);
      showContainer();
      reset();
    } catch (error) {
      setError("Erro ao cadastrar usuário", error);
    }
  };

  if (error)
    return <div className="m-auto text-white font-bold text-4xl">{error}</div>;

  return (
    <form
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white w-130 bg-[#1a1a1a] rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="p-3 flex flex-col items-center">
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
          {!id
            ? "Membro cadastrado com sucesso!"
            : "Membro editado com sucesso!"}
        </div>

        <div className="flex flex-col m-auto">
          {!id ? (
            <div className="px-2 py-3 flex flex-col gap-2 text-start">
              <h1 className="text-[32px] font-semibold">
                Cadastro de <span className="text-yellow-500">Novo Membro</span>
              </h1>
              <p className="text-zinc-500">
                Cadastrar o novo membro na academia, escolha o plano do membro
                abaixo
              </p>
            </div>
          ) : (
            <div className="px-2 py-3 flex flex-col gap-2 text-start">
              <h1 className="text-[32px] font-semibold">
                Editar membro
              </h1>
              <p className="text-zinc-500">Edite o membro, mude plano e altere número.</p>
            </div>
          )}
          <div className="flex flex-col px-2">
            <label className="mb-2 text-gray-300 font-semibold">
              Nome completo
            </label>
            <input
              {...register("name", {
                required: "O nome do membro é obrigatório",
              })}
              type="text"
              placeholder="e.x. Lucas Nobre"
              className="p-2 border-2 pl-5 rounded-2xl bg-[#262626] border-[#302d2d]"
            />
            <span className="text-red-400 mt-2 text-sm min-h-5">
              {errors.name?.message}
            </span>
          </div>

          <div className="flex m-auto justify-between w-full items-center px-2 gap-2">
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300 font-semibold">
                Endereço de email
              </label>
              <input
                {...register("email", {
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email inválido",
                  },
                })}
                type="email"
                placeholder="membro@hotmail.com"
                className="p-2 rounded-2xl pl-5 border-2 bg-[#262626] border-[#302d2d]"
              />
              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.email?.message}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300 font-semibold">
                Telefone
              </label>
              <input
                {...register("phone", {
                  required: "O telefone do membro é obrigatório",
                })}
                type="text"
                placeholder="e.x. (88) 00000-0000"
                className="p-2 w-60 pl-5 rounded-2xl border-2 bg-[#262626] border-[#302d2d]"
              />
              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.phone?.message}
              </span>
            </div>
          </div>

          <div className="flex flex-col px-2 gap">
            <label className="mb-2 text-gray-300 font-semibold">
              Plano do membro
            </label>
            <select
              {...register("plan_id", {
                required: "O plano do usuário é obrigatório",
              })}
              className="p-2 rounded-2xl pl-5 border-2 bg-[#262626] text-zinc-400 appearance-none border-[#302d2d]"
            >
              <option value="">Selecione o plano</option>
              {plans.map((plan) => {
                return (
                  <option key={plan.id} value={plan.id}>
                    {plan.name}
                  </option>
                );
              })}
            </select>
            <span className="text-red-400 mt-2 text-sm min-h-5">
              {errors.plan_id?.message}
            </span>

            <button
              type="submit"
              className="bg-yellow-600 p-3 mx-3 my mb-3 rounded border-yellow-400/25 border-2 font-bold text-gray-200 cursor-pointer hover:bg-yellow-700 hover:text-gray-300 transition-colors shadow-[4px_11px_15px_2px_rgba(219,_130,_6,_0.1)]"
            >
              {!id ? "Cadastrar novo membro" : "Editar membro"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MemberForm;
