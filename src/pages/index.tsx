import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import InsertForm from "./insert-form/InsertForm";

const Routers: FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Header />

      <Routes>
        <Route index element={<InsertForm />} />
        {/* <Route path="/write/:id" element={<Write />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
