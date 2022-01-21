import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <Link href="/docs"><a className={styles.item}>
                    Docs
                </a></Link>

                <a className={styles.item} href={process.env.SOURCE_URL}>
                    Source
                </a>
            </div>
        </footer>
    );
}

export default Footer;
