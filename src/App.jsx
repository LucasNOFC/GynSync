import SideMenu from "./components/SideMenu/SideMenu";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import Members from "./pages/Members/Members";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Index from "./pages/Index/Index";
import PrivateRoute from "./routes/PrivateRoutes";
import Payment from "./pages/Payment/Payment";
import Plans from "./pages/Plans/Plans";
import Settings from "./pages/Settings/Settings";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  const authUser = user?.data;

  console.log(user)

  return (
    <div className="flex justify-between bg-linear-to-r from-slate-900 to-slate-700">
      <SideMenu />
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={(!authUser ? <Login /> : <Index/>)} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Hero />} />
          <Route path="/members" element={<Members />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
