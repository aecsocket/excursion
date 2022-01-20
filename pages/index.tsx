import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <main>
            <div className={styles.column}>
                <div className={styles.section}>
                    <h1>Header text</h1>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        </main>
    )
};

export default Home;
