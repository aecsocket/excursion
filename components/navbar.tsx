import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <Link href="/"><a className={`${styles.item} ${styles.btn}`}>
                        TODO home icon
                    </a></Link>

                    <form>
                        <label className={`text ${styles.searchBox}`}>
                            <input type="text" className={`text ${styles.searchInput}`} placeholder="Search" />
                        </label>
                    </form>
                </div>
                <div className={styles.user}>
                    <div className={styles.item}>
                        <Link href="/logIn"><a>
                            <button className="transparent">Log In</button>
                        </a></Link>
                    </div>

                    <div className={styles.item}>
                        <Link href="/register"><a>
                            <button className="primary">Register</button>
                        </a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
