import { Route, Link, Routes } from "react-router-dom";
import Home from "./components/pages/header";
import Hello from "./hello";
import SignUp from "./components/createAccount/signUp";
import MyRoutes from "./components/route/myRoutes";

const App = () => {
  return (
    <>
    {/* <SignUp/> */}
   
     <MyRoutes/>
    </>
  );
};

export default App;