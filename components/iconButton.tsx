import React, { FC } from "react";
import styles from "./IconButton.module.css";

const IconButton: FC = ({ children }) => {
    return (
        <div className={`btn ${styles.btn}`}>
            {children}
        </div>
    );
};

export default IconButton;
