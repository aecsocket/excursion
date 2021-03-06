import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Icon from "../public/icon.svg";
import IconButton from "./iconButton";
import TextButton from "./textButton";
import PrimaryButton from "./primaryButton";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TextInput from "./textInput";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div>
                        <Link href="/"><a className="block">
                            <IconButton className={styles.iconButton}>
                                <Icon className={styles.icon} width={32} />
                            </IconButton>
                        </a></Link>
                    </div>

                    <form>
                        <TextInput className={`ifLarge ${styles.search}`} placeholder="Search" />
                    </form>

                    <div className="ifSmall">
                        <IconButton icon={faSearch} className={styles.searchIcon} />
                    </div>
                </div>
                <div className={styles.user}>
                    <div>
                        <Link href="/logIn"><a>
                            <TextButton>
                                Log In
                            </TextButton>
                        </a></Link>
                    </div>

                    <div>
                        <Link href="/register"><a>
                            <PrimaryButton>
                                Register
                            </PrimaryButton>
                        </a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
