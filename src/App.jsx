import SideMenu from "./components/SideMenu/SideMenu"
import { Routes, Route } from "react-router-dom"
import Hero from "./pages/Hero/Hero"
import Members from "./pages/Members/Members"

function App() {

  return (
    <div className="flex justify-between">
      <SideMenu/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/members" element={<Members/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default App
