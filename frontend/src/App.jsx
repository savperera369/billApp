import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl px-4 py-6 mx-auto">
            <Outlet />
        </main>
    </>
  )
}

export default App
