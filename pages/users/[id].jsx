import axios from "axios";
import { useRouter } from "next/router"
import styles from "../../styles/user.module.scss";
import { MainContainer } from "../MainContainer";

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: { user },
    }
}


export default function ({user}) {
    const { query } = useRouter();

    return (
        <MainContainer title={user.name}>
        <div className={styles.flex_container}>
                <h2 className={styles.h1_red}>Пользователь c id: <br /> {query.id}</h2>
            <h2>Имя пользователя <br /> { user.name }</h2>
            </div>
        </MainContainer>
    )
}