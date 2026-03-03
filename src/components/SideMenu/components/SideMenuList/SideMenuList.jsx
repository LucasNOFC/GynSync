import sideMenuItems from "./components/Data/SideMenuItem.json";
import SideMenuItemList from "./components/SideMenuItemList/SideMenuItemList";
import { ICONS_MAP } from "./components/Data/Icons";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";

const SideMenuList = () => {
  return (
    <div className="flex flex-col flex-1 p-4">
      <div className="space-y-2 ">
        {sideMenuItems.map((items) => {
          const IconComponent = ICONS_MAP[items.icon];
          return (
            <SideMenuItemList
              key={items.id}
              itemName={items.name}
              ItemIcon={IconComponent}
              url={items.url}
            />
          );
        })}
      </div>
      <div className="mt-auto pt-4 border-t border-zinc-800">
        <SideMenuItemList
        itemName={"Configurações"}
        url="/settings"
        ItemIcon={Cog8ToothIcon}
        />
      </div>
    </div>
  );
};

export default SideMenuList;
