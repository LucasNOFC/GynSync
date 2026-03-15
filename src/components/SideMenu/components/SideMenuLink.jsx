import React from "react";
import { NavLink } from "react-router-dom";


const SideMenuLink = ({url, Icon, text}) => {
  return (
    <NavLink to={url}>
      <div className="flex items-center gap-5">
        <Icon className="w-6 h-6 text-yellow-300" />
        <span className="text-sm font-medium text-yellow-300">
          {text}
        </span>
      </div>
    </NavLink>
  );
};

export default SideMenuLink;
