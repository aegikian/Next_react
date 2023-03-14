import { MainContainer } from "./MainContainer";
import styles from "../styles/404.module.css"

export default function Error() {
    return (
        <MainContainer >
            <div className={styles.flex_container}>
                <h1>ОЙ!...</h1>
                <h2>Такой страницы не существует!</h2>
            </div>
        </MainContainer>
    )
}