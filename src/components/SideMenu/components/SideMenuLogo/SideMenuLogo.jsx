import React from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SideMenuLogo = () => {
  return (
    <Link to={"/"} className="flex items-center justify-center gap-5 w-full">
      <TrophyIcon className="w-15 text-black bg-yellow-500 p-2 rounded" />
      <div className="flex flex-col w-full">
        <h1 className="text-white font-bold text-3xl">GYM SYNC</h1>
        <p className="text-yellow-500 font-semibold">PORTAL DE CONTROLE</p>
      </div>
    </Link>
  );
};

export default SideMenuLogo;
