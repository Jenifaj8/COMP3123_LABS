import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import App from "./App.jsx";

// Equivalent to 
// ReactDOM.render(<App>, document.getElementById("root"))
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
    </StrictMode>
)