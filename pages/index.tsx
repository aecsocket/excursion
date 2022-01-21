import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DiscreetButton from '../components/discreetButton';

const Home: NextPage = () => {
    const sourceUrl = process.env.SOURCE_URL;
    return (
        <main>
            <Head>
                <title>Excursion</title>
            </Head>
            <div className={styles.jumbotron}>
                <div className={styles.column}>
                    <h1 className={styles.title}>Meet your new financial dashboard.</h1>
                    <p className={styles.subtitle}>A convenient, free and open-source webapp for your stocks and crypto.</p>
                </div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <div className={styles.section}>
                        <h2>Excursion</h2>
                        <p>
                            A free and open-source webapp, designed from the ground up
                            to allow users to track stocks and cryptocurrencies without hassle.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>Technologies</h2>
                        <p>
                            Built on the industry standards, this site uses:
                        </p>
                        <ul>
                            <li><a className="em" href="https://nextjs.org">Next.js</a> for rendering</li>
                            <li><a className="em" href="https://www.postgresql.org">PostgreSQL</a> as the backend database</li>
                            <li><a className="em" href="https://www.prisma.io">Prisma</a> as the database ORM</li>
                            <li><a className="em" href="https://fontawesome.com">Font Awesome</a> for the icon sets</li>
                        </ul>
                        {
                            sourceUrl ?
                                <div>
                                    <a style={{display: "inline-block"}} href={sourceUrl}>
                                        <DiscreetButton>
                                            View the source
                                        </DiscreetButton>
                                    </a>
                                </div>
                                : ""
                        }
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Home;
