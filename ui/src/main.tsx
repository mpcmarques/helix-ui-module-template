import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityWrapper } from "@/components/VisibilityWrapper";
import App from "./containers/App";
import "./index.css";
import { debugData } from "./utils/debugData";
import { fetchUi } from "./utils/fetchUi";

// This timeout is necessary for window.hEvent to load
setTimeout(() => {
    // This will set the WebUI to visible if we are
    // developing in browser
    debugData([
        {
            name: "setVisible",
            data: true,
        },
    ]);

    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <VisibilityWrapper>
                <App />
            </VisibilityWrapper>
        </React.StrictMode>,
    );

    fetchUi("Ready", true);
}, 15);
