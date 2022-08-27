import { useRouter } from "next/router";
import Head from 'next/head'
import styles from '../../styles/Game.module.css'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Game() {
    const router = useRouter()
    const gameId = router.query["id"]

    const { data, error } = useSWR('../api/staticdata', fetcher);
    // Handle error state
    if (error) return <div>Failed to load</div>;
    // Handle loading state
    if (!data) return <div>Loading...</div>;

    const gameArray = JSON.parse(data);

    let gameData;

    for (let i = 0; i < gameArray.length; i++) {
        if (gameArray[i].id == gameId) {
            gameData = gameArray[i]
        }
    }

    console.log(gameData)
// BREAKS ON REFRESH LOL

    return (
        <div className={styles.container}>
            <Head>
                <title>Game</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
            
                <h1>{ gameData.day }</h1> 
            
            </main>
        </div>
    )
}