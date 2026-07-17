import AppRoute from "./AppRoute"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoute/>
      <Footer/>
    </div>
  )
}

export default App