import React, { useEffect } from "react";
import { useUiEvent } from "../hooks/useUIEvent";
import { fetchUi } from "../utils/fetchUi";
import { isEnvBrowser } from "../utils/misc";
import { useVisibility } from "@store/visibility";
import { AnimatePresence, motion } from "motion/react";

export const VisibilityWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const visible = useVisibility((state) => state.visible);
    const setVisible = useVisibility((state) => state.setVisible);

    useUiEvent<boolean>("setVisible", setVisible);

    // Handle pressing escape/backspace
    useEffect(() => {
        // Only attach listener when we are visible
        if (!visible) return;

        const keyHandler = (e: KeyboardEvent) => {
            if (["Escape"].includes(e.key)) {
                e.preventDefault();

                if (!isEnvBrowser()) fetchUi("hideUI");
                else setVisible(!visible);
            }
        };

        window.addEventListener("keydown", keyHandler);

        return () => window.removeEventListener("keydown", keyHandler);
    }, [visible]);

    return (
        <AnimatePresence>
            {visible ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ width: "100%", height: "100%" }}
                >
                    {children}
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};
