import { render } from "./lib/react-dom/index.js";
import App from "./components/App.js";

render(
  new App(),
  document.getElementById("app")
);
