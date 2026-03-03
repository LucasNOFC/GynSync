import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

const HandleUser = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [userPage, setUserPage] = useState([]);
  const { id } = useParams();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (!id) return;

    const loadUser = async (id) => {
      try {
        const res = await api.get(`/user/${id}`);
        setUserPage(res.data.user);
      } catch (error) {
        setError("Erro ao buscar usuário", error);
      }
    };

    loadUser(id);
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userPage?.name,
      email: userPage?.email,
      role: userPage?.role,
    },
  });

  useEffect(() => {
    if (userPage) {
      reset({
        name: userPage.name,
        email: userPage.email,
        role: userPage.role,
      });
    }
  }, [userPage, reset]);

  const showContainer = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const createUser = async (data) => {
    await api.post("/register", data);
  };

  const editUser = async (data) => {
    const res = await api.put(`/users/${id}`, data);

    setUserPage(res.data.user);
    reset(res.data.user)
  }

  const onSubmit = async (data) => {
    if (!data.password) {
      delete data.password;
    }
    try {
        !id ? createUser(data) : editUser(data)
        showContainer();
        reset();
    } catch (error) {
      setError("Erro ao cadastrar usuário", error);
    }
  };

  if (error)
    return <div className="m-auto text-white font-bold text-4xl">{error}</div>;

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto text-white bg-[#1A1A1A] p-5 w-150 rounded-2xl shadow-[7px_12px_19px_2px_rgba(0,_0,_0,_0.17)]"
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
        {!id
          ? "Usuário cadastrado com sucesso!"
          : "Usuário editado com sucesso!"}
      </div>

      <form className="p-2 flex flex-col items-center  gap-5">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-bold text-gray-200">
            {!id ? "Cadastrar um novo usuário" : "Editar o usuário"}
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
                className="p-2 w-60  rounded border-2 bg-[#262626] border-[#302d2d]"
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
                className="p-2 w-60 rounded border-2 bg-[#262626] border-[#302d2d]"
              />
              <span className="text-red-400 mt-2 text-sm min-h-5">
                {errors.email?.message}
              </span>
            </div>
            <div className="flex flex-col p-2 gap-2">
              <label className="mb-2 text-gray-300 font-semibold">Senha</label>
              <input
                {...register("password", {
                  required: !isEditMode 
                  ? "A senha é obrigatória"
                  : false,
                  minLength: {
                    value: 8,
                    message: "Mínimo é 8 caracteres",
                  },
                })}
                type="password"
                placeholder="Senha"
                className="p-2 w-60 rounded border-2 bg-[#262626] border-[#302d2d]"
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
                className="p-2 w-60 text-gray-300 rounded border-2 bg-[#262626] border-[#302d2d]"
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
            {!id ? "Cadastrar novo usuário" : "Editar usuário"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HandleUser;
