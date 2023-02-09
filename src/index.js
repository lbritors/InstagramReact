
import reactDOm from "react-dom/client";
import App from "./components/App";



const elemento = document.querySelector(".root");
const root = reactDOm.createRoot(elemento);
root.render(App());