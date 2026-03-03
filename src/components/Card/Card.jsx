import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const colorVariants = {
  orange: "w-10 text-amber-400 rounded-2xl",
  red: "w-10 text-red-400 rounded-2xl",
  green: "w-10 text-emerald-400 rounded-2xl",
  purple: "w-10 text-purple-400 rounded-2xl"
};

const Card = ({
  title = "Membros ativos totais",
  number = "67",
  Icon = "",
  ColorStandard = "",
}) => {
  return (
    <div className="rounded-2xl w-76 bg-[#1A1A1A]   p-5 flex-col">
      <Icon className={colorVariants[ColorStandard]} />
      <h2 className="text-zinc-300 font-semibold">{title}</h2>
      <p className="text-4xl font-bold">{number}</p>
    </div>
  );
};

export default Card;
