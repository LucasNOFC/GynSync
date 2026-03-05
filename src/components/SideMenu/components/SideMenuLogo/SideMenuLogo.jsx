import { useContext } from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";


const SideMenuLogo = () => {
  const { user } = useContext(AuthContext);
  const authUser = user?.data;

  return (
    <Link
      to={!authUser ? "/login" : "/dashboard"}
      className="h-20 flex items-center px-6 gap-2 border-b border-zinc-800"
    >
      <TrophyIcon className="w-9 text-black bg-yellow-500 p-2 rounded" />
      <div className="flex flex-col w-full">
        <h1 className="text-white font-bold text-3xl">GYM SYNC</h1>
        <p className="text-yellow-500 font-semibold">PORTAL DE CONTROLE</p>
      </div>
    </Link>
  );
};

export default SideMenuLogo;
