import Link from "next/link";
import styles from "../styles/users.module.css";
import { MainContainer } from "./MainContainer";

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: { users },
    }
}

const Users = ({ users }) => {

    return (
        <MainContainer keywords={'test keywords'} title={'Пользователи'}>
            <h1 className={styles.link_profile}>Users</h1>
            <ul>
                {users.map(user =>
                    <div key={user.id} className={styles.link_profile}>
                        <Link legacyBehavior href={`/users/${user.id}`}>
                            <a className={styles.link_profile_a}>{user.name}</a>
                        </Link>
                    </div>
                )}
            </ul>
        </MainContainer>
    )
}

export default Users;