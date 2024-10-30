import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header/>
      <Container>
        <Sidebar/>
        <Outlet/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
