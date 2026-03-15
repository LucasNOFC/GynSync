import sideMenuItems from "./components/Data/SideMenuItem.json";
import SideMenuItemList from "./components/SideMenuItemList/SideMenuItemList";
import { ICONS_MAP } from "./components/Data/Icons";
import { ChartBarIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import SideMenuLink from "../SideMenuLink";
import Accodion from "../Accodion";
import { useState } from "react";

const SideMenuList = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col flex-1 p-4">
      <div>
        <SideMenuLink
          Icon={ChartBarIcon}
          text={"Dashboard"}
          url={"/dashboard"}
        />
      </div>

      <div className="space-y-2 flex flex-col mt-5">
        {sideMenuItems.map((item) => {
          const IconComponent = ICONS_MAP[item.icon];

          return (
            <SideMenuItemList
              key={item.id}
              itemName={item.name}
              ItemIcon={IconComponent}
              childrenLinks={item.children}
            />
          );
        })}
      </div>

      <div className="mt-auto pt-4 border-t border-zinc-800">
        {open && <Accodion />}

        <button onClick={toggleMenu}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Cog8ToothIcon className="w-6 h-6 text-yellow-300" />
            <span className="text-sm font-medium text-yellow-300">
              Configurações
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SideMenuList;
