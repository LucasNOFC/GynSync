import { NavLink } from "react-router-dom";

const SideMenuItemList = ({ itemName, url , ItemIcon }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "flex gap-5 items-center p-2 bg-yellow-400/50 border-yellow-400 border-2 w-52 rounded transition-all"
          : "flex gap-5 items-center p-2 hover:bg-gray-700/50 hover:border-gray-600 hover:border-2 w-52 border-2 border-transparent rounded transition-all"
      }
      to={url}
    >
      {({ isActive }) => (
        <div className="flex items-center gap-5">
          <ItemIcon className={isActive ? "w-8 text-yellow-300" : "w-8 text-gray-300"}/>
          <p className={isActive ? "text-yellow-300" : "text-gray-300"}>{itemName}</p>
        </div>
      )}
    </NavLink>
  );
};

export default SideMenuItemList;
