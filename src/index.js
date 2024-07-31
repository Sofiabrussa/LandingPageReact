import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root")); //Debe coincidir con el div ingresado en el html para que se levante la pag
root.render(
	<>
		<GlobalStyles />
		<App />
	</>
);


reportWebVitals();