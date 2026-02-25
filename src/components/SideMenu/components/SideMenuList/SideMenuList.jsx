import sideMenuItems from "./components/Data/SideMenuItem.json";
import SideMenuItemList from "./components/SideMenuItemList/SideMenuItemList";
import { ICONS_MAP } from "./components/Data/Icons";

const SideMenuList = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-10">
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
      </ul>
    </nav>
  );
};

export default SideMenuList;
