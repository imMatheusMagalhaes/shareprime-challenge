import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "./home/Home";
import InsertForm from "./insert-form/InsertForm";

const Routers: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/admin" element={<InsertForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
