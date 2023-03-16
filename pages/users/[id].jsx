import axios from "axios";
import { useRouter } from "next/router"
import { useRef, useState } from "react";
import styles from "../../styles/user.module.scss";
import { MainContainer } from "../MainContainer";

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: { user },
    }
}


    export default function ({ user }) {
            const input_site = useRef()
            const { query } = useRouter();
            const [userInfo, setUser] = useState(user)


    const handleChange = (e) => {
        setUser(prevState => {
            let user = [prevState];
            user.website = e.target.value;
            console.log('====================================');
            console.log(e.target.value);
            console.log('====================================');
            return user;
        })
    }

        const handleSend = () => {
        // axios
        //     .post(`http://localhost:3002/about`, {
        //         user: userInfo
        //     })
        //         async function getServerSideProps({params}) {
        //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        //     const user = await response.json()
        //     return {
        //         props: { user },
        //     }
        // }
            console.log('====================================');
            console.log(userInfo);
            console.log('====================================');
    }

    return (
        <MainContainer title={user.name}>
        <div className={styles.flex_container}>
                <h2 className={styles.h1_red}>Пользователь c id: <br /> {query.id}</h2>
                <h2>Имя пользователя <br /> {user.name}</h2>
                <input type="text" onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} defaultValue={user.website} />
                <button onClick={() => handleSend()}> Изменить </button>
            </div>
        </MainContainer>
    )
}