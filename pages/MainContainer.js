import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";

export const MainContainer = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meta keywords={"nextJS, metatags, SSR, " + keywords}></meta>
                <title>{title}</title>
            </Head>
            <nav className={styles.navbar}>
                <Link legacyBehavior href="/">
                    <a className={styles.navbar_a}>Главная</a>
                </Link>
                <Link href="/users" legacyBehavior>
                    <a className={styles.navbar_a} >Пользователи</a>
                </Link>
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}
