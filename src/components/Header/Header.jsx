import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {

  const { user } = useContext(AuthContext);
  const authUser = user?.data;

  return (
    <div className="flex items-center justify-end h-20  w-full absolute p-5 bg-[#1A1A1A]">
      <NavLink to={!authUser ? "/login" : "/"}>
        <h1 className="text-white">{authUser?.name ? authUser?.name : "Login"}</h1>
        <p className="text-gray-400 capitalize">{(authUser?.role)}</p>
      </NavLink>
    </div>
  );
};

export default Header;
