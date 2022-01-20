import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <Link href="/docs"><a className={styles.item}>
                    Docs
                </a></Link>

                <Link href="/source"><a className={styles.item}>
                    Source
                </a></Link>
            </div>
        </footer>
    );
}

export default Footer;
