import React from "react";
import { motion } from "motion/react";

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-900">
            <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-7xl text-white text-shadow-cyan-700 text-shadow-lg"
            >
                Helix UI Template
            </motion.h1>
        </div>
    );
};

export default App;
