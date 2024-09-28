import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"

function App() {


  return (
    <div className="bg-slate-800">
      <div className="max-w-5xl h-screen mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
