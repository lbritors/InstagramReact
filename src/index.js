
import ReactDOm from "react-dom/client";
import App from "./components/App";



const elemento = document.querySelector(".root");
const root = ReactDOm.createRoot(elemento);
root.render(App());