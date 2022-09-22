import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MailBox from "./pages/MailBox/MailBox";
import React,{Fragment} from "react";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" exact element={<MailBox/>} />
       
      </Routes>
    </div>
  );
}

export default App;
