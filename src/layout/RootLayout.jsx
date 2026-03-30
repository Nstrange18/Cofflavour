import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import "../styles/RootLayout.css"
import { Outlet } from "react-router-dom"
import ScrollToTop from "../component/ScrollToTop"

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout