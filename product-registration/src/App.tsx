import { ToastContainer } from "react-toastify";
import "./App.css";
import RegisterProductFormComponent from "./components/RegisterProductFormComponent";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <RegisterProductFormComponent />
    </>
  );
}

export default App;
