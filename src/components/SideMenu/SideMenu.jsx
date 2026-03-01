import React from "react";
import SideMenuLogo from "./components/SideMenuLogo/SideMenuLogo";
import SideMenuList from "./components/SideMenuList/SideMenuList";
import SideMenuFooter from "./components/SideMenuFooter/SideMenuFooter";

const SideMenu = () => {
  return (
    <div className="bg-[#1A1A1A] h-screen w-72 p-5 flex flex-col items-center justify-between relative z-1 ">
      <SideMenuLogo />
      <SideMenuList />
        <SideMenuFooter />
    </div>
  );
};

export default SideMenu;
