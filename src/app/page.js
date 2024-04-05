import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.home}>
            <div className={styles.backgroundImage}></div>
            <h1 className={styles.heading}>FAKE SBB</h1>
        </main>
    );
}
