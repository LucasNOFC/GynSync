import { useState } from "react";
import SideMenuLink from "../../../SideMenuLink";

const SideMenuItemList = ({ itemName, ItemIcon, childrenLinks }) => {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="w-full p-2 rounded cursor-pointer"
      >
        <div className="flex items-center gap-5">
          <ItemIcon className="w-6 h-6 text-yellow-300" />
          <span className="text-sm font-medium text-yellow-300">
            {itemName}
          </span>
        </div>
      </button>

      {open && (
        <div className="ml-8 mt-2 flex flex-col gap-2">
          {childrenLinks.map((link) => (
            <SideMenuLink
              key={link.id}
              Icon={ItemIcon}
              text={link.name}
              url={link.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideMenuItemList;