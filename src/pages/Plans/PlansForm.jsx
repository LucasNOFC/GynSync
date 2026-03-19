import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

const PlansForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [planPage, setPlanPage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchPlan = async () => {
      if (id) {
        try {
          const res = await api.get(`/plans/${id}`);
          setPlanPage(res.data.data);
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchPlan();
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: planPage?.name,
      price: planPage?.price,
      duration_days: planPage?.duration_days,
      description: planPage?.description,
    },
  });

  useEffect(() => {
    if (planPage) {
      reset({
        name: planPage.name,
        price: planPage.price,
        duration_days: planPage.duration_days,
        description: planPage?.description,
      });
    }
  }, [planPage, reset]);

  const showContainer = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const createPlan = async (data) => {
    try {
      const res = await api.post("/plans", data);
    } catch (error) {
      setError(error.message);
    }
  };

  const editPlan = async (data) => {
    try {
      const res = await api.put(`/plans/${planPage.id}`, data);
      setPlanPage(res.data.data);
      reset(res.data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const onSubmit = (data) => {
    try {
      if (id) {
        editPlan(data);
        showContainer();
        reset();
      } else {
        createPlan(data);
        showContainer();
        reset();
      }
    } catch (error) {
      setError("Erro ao cadastrar plano", error);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <form
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white w-130 bg-[#1a1a1a] rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="p-3 flex flex-col items-center">
        <div
          className={`
              absolute top-full p-3 m-5
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
          {!id ? "Plano criado com sucesso!" : "Plano atualizado com sucesso!"}
        </div>

        <div className="flex flex-col m-auto">
          {!id ? (
            <div className="px-2 py-3 flex flex-col gap-2 text-start">
              <h1 className="text-[32px] font-semibold">
                Cadastro de <span className="text-yellow-500">Novo Plano</span>
              </h1>
              <p className="text-zinc-500">
                Cadastrar o novo plano na academia, defina os detalhes do plano
                abaixo
              </p>
            </div>
          ) : (
            <div className="px-2 py-3 flex flex-col gap-2 text-start">
              <h1 className="text-[32px] font-semibold">Editar Plano</h1>
              <p className="text-zinc-500">
                Edite o plano, mude os detalhes e salve as alterações.
              </p>
            </div>
          )}
          <div className="flex flex-col px-2">
            <label className="mb-2 text-gray-300 font-semibold">
              Nome do plano
            </label>
            <input
              {...register("name", {
                required: "O nome do plano é obrigatório",
              })}
              type="text"
              placeholder="e.x. Plano Premium"
              className="p-2 border-2 pl-5 rounded-2xl bg-[#262626] border-[#302d2d]"
            />
            <span className="text-red-400 mt-2 text-sm min-h-5">
              {errors.name?.message}
            </span>
          </div>

          <div className="flex flex-col px-2 w-full">
            <label className="mb-2 text-gray-300 font-semibold">
              Descrição do plano
            </label>
            <input
              {...register("description", {
                required: "A descrição do plano é obrigatória",
              })}
              type="text"
              placeholder="e.x. Plano com acesso ilimitado"
              className="p-2 border-2 pl-5 rounded-2xl bg-[#262626] border-[#302d2d] w-full"
            />
            <span className="text-red-400 mt-2 text-sm min-h-5">
              {errors.description?.message}
            </span>
          </div>
          <div className="flex m-auto justify-between w-full items-center px-2 gap-2">
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300 font-semibold">
                Preço do plano
              </label>
              <input
                {...register("price", {
                  required: "O preço do plano é obrigatório",
                })}
                type="number"
                placeholder="e.x. 99.99"
                className="p-2 border-2 pl-5 rounded-2xl bg-[#262626] border-[#302d2d]"
              />

              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.price?.message}
              </span>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300 font-semibold">
                Duração do plano (dias)
              </label>
              <input
                {...register("duration_days", {
                  required: "A duração do plano é obrigatória",
                })}
                type="number"
                placeholder="30 dias"
                className="p-2 border-2 pl-5 rounded-2xl bg-[#262626] border-[#302d2d]"
              />
              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.duration_days?.message}
              </span>
            </div>
          </div>

          <div className="flex flex-col px-2 gap">
            <button
              type="submit"
              className="bg-yellow-600 p-3 mx-3 my mb-3 rounded border-yellow-400/25 border-2 font-bold text-gray-200 cursor-pointer hover:bg-yellow-700 hover:text-gray-300 transition-colors shadow-[4px_11px_15px_2px_rgba(219,_130,_6,_0.1)]"
            >
              {!id ? "Cadastrar novo plano" : "Editar plano"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlansForm;
