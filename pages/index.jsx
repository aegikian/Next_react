import styles from "../styles/index.module.css";
import { MainContainer } from "./MainContainer";

const Index = () => {
    return (
        <MainContainer title={'Главная'}>
            <h1 className={styles.title}>Главная страница</h1>
        </MainContainer>
    )
}

export default Index;