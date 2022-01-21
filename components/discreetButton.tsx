import { FC } from "react";
import styles from "./DiscreetButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const DiscreetButton: FC = ({ children }) => {
    return (
        <div className={`btn ${styles.btn}`}>
            {children}
            <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
        </div>
    );
}

export default DiscreetButton;
