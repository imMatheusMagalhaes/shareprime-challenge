import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div id="header">
      <div id="logo">Carousel Challenger</div>
      <div id="header-right">
        <div id="active" onClick={() => navigate("/")}>
          Início
        </div>
        <div onClick={() => navigate("/admin")}>Administração</div>
      </div>
    </div>
  );
};

export default Header;
