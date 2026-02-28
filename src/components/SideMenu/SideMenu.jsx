import React from "react";
import SideMenuLogo from "./components/SideMenuLogo/SideMenuLogo";
import SideMenuList from "./components/SideMenuList/SideMenuList";
import SideMenuFooter from "./components/SideMenuFooter/SideMenuFooter";

const SideMenu = () => {
  return (
    <div className="bg-gray-900 h-screen w-72 p-5 flex flex-col items-center justify-between relative z-1 border-r-yellow-500/50 border-r-2">
      <SideMenuLogo />
      <SideMenuList />
        <SideMenuFooter />
    </div>
  );
};

export default SideMenu;
