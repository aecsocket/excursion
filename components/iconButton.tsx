import React, { FC } from "react";
import styles from "./IconButton.module.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    icon: IconDefinition,
    className?: string
} | {
    className?: string
};

const IconButton: FC<Props> = ({ children, className, ...props }) => {
    if ("icon" in props) {
        return (
            <div className={`btn ${styles.btn}`}>
                <FontAwesomeIcon icon={props.icon} className={`${styles.icon} ${className ?? ""}`} />
            </div>
        );
    } else {
        return (
            <div className={`btn ${styles.btn} ${className ?? ""}`}>
                {children}
            </div>
        );
    }
};

export default IconButton;
