import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const TotalAdmins = ({ adminNumber = 0 }) => {
  return (
    <div className="bg-[#262626] w-55 p-3 rounded-2xl border-2 border-[#202020]">
      <div className="flex items-center justify-between">
        <p className="ml-4 text-gray-500 font-semibold">Admins</p>
        <ShieldCheckIcon className="mr-3 w-8 text-yellow-500" />
      </div>
      <div>
        <p className="ml-5 text-white font-bold text-4xl">{adminNumber}</p>
      </div>
    </div>
  );
};

export default TotalAdmins;
