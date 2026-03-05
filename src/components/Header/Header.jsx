import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {

  const { user } = useContext(AuthContext);
  const authUser = user?.data;

  return (
    <div className="h-20 w-full bg-[#1A1A1A] border-b border-zinc-800 flex items-center justify-end px-6">
      <NavLink className="text-right" to={!authUser ? "/login" : "/"}>
        <h1 className="text-white font-semibold leading-tight">{authUser?.name ? authUser?.name : "Login"}</h1>
        <p className="text-gray-400 terxt-sm capitalize">{(authUser?.role)}</p>
      </NavLink>
    </div>
  );
};

export default Header;
