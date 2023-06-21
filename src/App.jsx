import "./App.css";
import Routing from "./routes/Routing";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <NavBar />
      <Routing />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
