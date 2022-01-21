import React from "react";
import styles from "./TextInput.module.css";

type Props = {
    className?: string,
    placeholder?: string
};

const TextInput = ({ className, placeholder }: Props) => {
    return (
        <label className={`${styles.label} ${className ?? ""}`}>
            <input type="text" className={styles.input} placeholder={placeholder} />
        </label>
    );
};

export default TextInput;
