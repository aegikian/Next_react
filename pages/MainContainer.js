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
                <Link href="/" className={styles.navbar_a}>
                    Главная
                </Link>
                <Link href="/users" className={styles.navbar_a}>
                    Пользователи
                </Link>
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}
