import React, { FC } from "react";
import styles from "./TextButton.module.css";

const TextButton: FC = ({ children }) => {
    return (
        <div className={`btn ${styles.btn}`}>
            {children}
        </div>
    );
};

export default TextButton;
