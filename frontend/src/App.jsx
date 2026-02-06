import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import  Navbar  from './components/navbar/navbar'
import Footer from "./components/footer/footer"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
