import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen max-w-screen-2xl px-4 py-6 mx-auto">
      <Outlet />
    </main>
  )
}

export default App
