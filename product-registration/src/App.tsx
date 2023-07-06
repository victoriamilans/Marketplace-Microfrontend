import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import RegisterProductFormComponent from "./components/RegisterProductFormComponent";
import React from "react";

const HeaderComponent = React.lazy(() => import("home/HeaderComponent"));

function App() {
  return (
    <>
      <HeaderComponent />
      <ToastContainer></ToastContainer>
      <RegisterProductFormComponent />
    </>
  );
}

export default App;
