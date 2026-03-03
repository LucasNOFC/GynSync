import { NavLink } from "react-router-dom";

const SideMenuItemList = ({ itemName, url, ItemIcon }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        `flex items-center gap-4 p-3 w-full rounded-lg border-2 transition-all
         ${
           isActive
             ? "bg-yellow-400/20 border-yellow-400"
             : "border-transparent hover:bg-zinc-800"
         }`
      }
    >
      {({ isActive }) => (
        <>
          <ItemIcon
            className={`w-6 h-6 ${
              isActive ? "text-yellow-300" : "text-gray-400"
            }`}
          />

          <span
            className={`text-sm font-medium ${
              isActive ? "text-yellow-300" : "text-gray-300"
            }`}
          >
            {itemName}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default SideMenuItemList;
