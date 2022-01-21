import React, { FC } from "react";
import styles from "./PrimaryButton.module.css";

const PrimaryButton: FC = ({ children }) => {
    return (
        <div className={`btn ${styles.btn}`}>
            {children}
        </div>
    );
};

export default PrimaryButton;
