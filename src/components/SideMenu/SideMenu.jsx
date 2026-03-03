import React from "react";
import SideMenuLogo from "./components/SideMenuLogo/SideMenuLogo";
import SideMenuList from "./components/SideMenuList/SideMenuList";
const SideMenu = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen bg-[#1A1A1A] flex flex-col border-r border-zinc-800 ">
      <SideMenuLogo />
      <SideMenuList />
    </aside>
  );
};

export default SideMenu;
