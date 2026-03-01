import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

const CreateUser = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "",
    },
  });

  const showContainer = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const onSubmit = async (data) => {
    try {
      await api.post("/register", data);
      showContainer();
      reset();
    } catch (error) {
      console.error("Erro ao logar", error);
    }
  };

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto text-white bg-gray-900 p-5 w-150 rounded-2xl border-2 border-yellow-400/50 shadow-[7px_12px_19px_2px_rgba(0,_0,_0,_0.17)]"
    >
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
        Usuário cadastrado com sucesso!
      </div>

      <form className="p-2 flex flex-col items-center  gap-5">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-bold text-gray-200">
            Cadastrar novo colaborador
          </h1>
          <p className="text font-semibold text-gray-400">
            Informações do colaborador
          </p>
          <div className="grid grid-cols-2 grid-rows-2 justify-center gap-5">
            <div className="flex flex-col p-2  gap-2">
              <label className="mb-2 text-gray-300 font-semibold">
                Nome Completo
              </label>
              <input
                {...register("name", {
                  required: "O nome do colaborador é obrigatório",
                })}
                type="text"
                placeholder="e.x. Lucas Nobre"
                className="p-2 w-60 bg-slate-800 rounded border-2 border-yellow-400/50"
              />
              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.name?.message}
              </span>
            </div>

            <div className="flex flex-col p-2 gap-2">
              <label className="mb-2 text-gray-300 font-semibold">
                Endereço de email
              </label>
              <input
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email inválido",
                  },
                })}
                type="email"
                placeholder="lucas@hotmail.com"
                className="p-2 w-60 bg-slate-800 rounded border-2 border-yellow-400/50"
              />
              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.email?.message}
              </span>
            </div>
            <div className="flex flex-col p-2 gap-2">
              <label className="mb-2 text-gray-300 font-semibold">Senha</label>
              <input
                {...register("password", {
                  required: "A senha é obrigatória",
                  minLength: {
                    value: 8,
                    message: "Mínimo é 8 caracteres",
                  },
                })}
                type="password"
                placeholder="Senha"
                className="p-2 w-60 bg-slate-800 rounded border-2 border-yellow-400/50"
              />
              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.password?.message}
              </span>
            </div>

            <div className="flex flex-col p-2 gap-2">
              <label className="mb-2 text-gray-300 font-semibold">Cargo</label>
              <select
                {...register("role", {
                  required: "O cargo é obrigatório",
                })}
                className="p-2 w-60 bg-slate-800 text-gray-300 rounded border-2 border-yellow-400/50"
              >
                <option value="">Selecione o cargo</option>
                <option value="admin">Admin</option>
                <option value="collaborator">Colaborador</option>
              </select>
              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.role?.message}
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-yellow-600 p-3 rounded border-yellow-400/25 border-2 font-bold text-gray-200 cursor-pointer hover:bg-yellow-700 hover:text-gray-300 transition-colors shadow-[4px_11px_15px_2px_rgba(219,_130,_6,_0.1)]"
          >
            Cadastrar novo usuário
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
