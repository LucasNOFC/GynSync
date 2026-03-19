import SideMenu from "./components/SideMenu/SideMenu";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import PrivateRoute from "./routes/PrivateRoutes";
import Payment from "./pages/Payment/Payment";
import Plans from "./pages/Plans/PlansForm";
import Settings from "./pages/Settings/Settings";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import HandleUser from "./pages/HandleUser/HandleUser";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateMember from "./pages/Members/pages/CreateMember";
import EditMember from "./pages/Members/pages/EditMember";
import MemberList from "./pages/Members/pages/MemberList";
import PageMember from "./pages/Members/pages/PageMember";
import UserTable from "./pages/UserTable/UserTable";
import MemberPayment from "./pages/Members/components/MemberPayment";
import PlanForm from "./pages/Plans/PlansForm";
import PlansTable from "./pages/Plans/PlansTable";
import PlansForm from "./pages/Plans/PlansForm";

function App() {
  const { user } = useContext(AuthContext);
  const authUser = user?.data;

  return (
    <div className="flex min-h-screen bg-[#0B0B0B]">
      <SideMenu />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 p-6">
          <Routes>
            <Route
              path="/"
              element={
                authUser ? (
                  <Navigate to="/Dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/login"
              element={!authUser ? <Login /> : <Dashboard />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/members" element={<MemberList />} />
              <Route path="/members/create" element={<CreateMember />} />
              <Route path="/members/edit/:id" element={<EditMember />} />
              <Route path="/members/page/:id" element={<PageMember />} />
              <Route path="/members/payment/:id" element={<MemberPayment />} />
              <Route path="/plans" element={<PlansTable />} />
              <Route path="/plans/create" element={<PlansForm />} />
              <Route path="/plans/edit/:id" element={<PlansForm />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<UserTable />} />
              <Route path="/user/create" element={<HandleUser />} />
              <Route path="/users/edit/:id" element={<HandleUser />} />
              <Route
                path="*"
                element={
                  <div className="m-auto text-4xl font-bold text-white">
                    404 - Página não encontrada
                  </div>
                }
              />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
