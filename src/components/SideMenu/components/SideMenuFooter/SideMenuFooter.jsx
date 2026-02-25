import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const SideMenuFooter = () => {
  return (
    <NavLink
      to={"/settings"}
      className={({ isActive }) =>
        isActive
          ? "flex gap-5 items-center p-2 bg-yellow-400/50 border-yellow-400 border-2 w-52 rounded transition-all"
          : "flex gap-5 items-center p-2 hover:bg-gray-700/50 hover:border-gray-600 hover:border-2 w-52 border-2 border-transparent rounded transition-all"
      }
    >
      {({ isActive }) => {
        return (
          <div className="flex gap-6 items-center">
            <Cog8ToothIcon
              className={isActive ? "w-8 text-yellow-300" : "w-8 text-gray-200"}
            />
            <p
              className={
                isActive ? "text-yellow-300" : "text-gray-300 font-semibold"
              }
            >
              Configurações
            </p>
          </div>
        );
      }}
    </NavLink>
  );
};

export default SideMenuFooter;
