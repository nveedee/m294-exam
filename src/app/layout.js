import styles from "./page.module.css";
import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <div >
            {/* Verwenden Sie die Klasse "header" für Ihren Header */}
            <header className={styles.header}>

                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/verbindung">CONNECTIONS</Link>
                    <Link href="/Station-Board">STATION BOARD</Link>
                    <Link href="/Take-me-home">TAKE ME HOME</Link>
                </nav>
            </header>
            <main>{children}</main>
            <footer className={styles.footer}>
                <p>FAKE SBB</p>
            </footer>
        </div>
    );
}
