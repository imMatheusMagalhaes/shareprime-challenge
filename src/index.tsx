import ReactDOM from "react-dom";
import { mergeStyles } from "@fluentui/react";
import { StrictMode } from "react";
import Routers from "./pages";

mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

ReactDOM.render(
  <StrictMode>
    <Routers />
  </StrictMode>,
  document.getElementById("root")
);
