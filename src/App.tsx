import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import { CartProvider } from "./context/CartContext"

function App() {


  return (
    <div className="bg-slate-700 w-full h-full">
      <div className="max-w-7xl mx-auto">
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
          </Routes>
        </CartProvider>
      </div>
    </div>
  )
}

export default App
