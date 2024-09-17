import React from 'react';
import { motion } from "framer-motion";

function Loader(props) {
    return (
        <div className="loader loader-dateset-main flex-column">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    repeat: Infinity
                }}
            >
                <img src={"/apple-touch-icon.png"} alt="stc loader" />
            </motion.div>
        </div>
    );
}

export default Loader;