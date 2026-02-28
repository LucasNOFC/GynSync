import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {

    try {
      const res = await api.post("/auth/login", data);

      const token = res.data.token;

      localStorage.setItem("token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      navigate("/");
    } catch (error) {
      console.error("Erro ao logar", error);
    }
  };

  return (
    <form
      className="bg-linear-to-tr from-zinc-800 to-gray-900 rounded-2xl border-2 border-gray-950/20 flex flex-col items-center justify-evenly h-130 w-96 p-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center justify-center w-full p-2 gap-4">
        <LockClosedIcon className="w-15 bg-yellow-500/25 rounded-full p-2 text-orange-300" />
        <h1 className="text-4xl font-bold text-white">Login</h1>
        <p className="text-gray-500 font-semibold">
          Entre suas credenciais para acessar o portal
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col p-2">
          <label className="pb-2 text-gray-400 font-semibold">
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
            placeholder="email@hotmail.com"
            className="bg-gray-600 p-2 rounded border border-gray-500 text-gray-200"
          />
          {errors.email && (
            <span className="mt-2 text-red-400 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col p-2">
          <label className="pb-2 text-gray-400 font-semibold">Senha</label>
          <input
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: {
                value: 8,
                message: "Mínimo é 8 caracteres",
              },
            })}
            type="password"
            placeholder="*******"
            className="bg-gray-600 p-2 rounded border border-gray-500 text-gray-200"
          />
          {errors.password && (
            <span className="text-red-400 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="p-2 bg-linear-to-r from-yellow-500 to-orange-400 w-full ml-2 mr-2 font-bold rounded cursor-pointer"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
