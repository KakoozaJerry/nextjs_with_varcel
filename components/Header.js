import Link from "next/link"
import styles from "./Header.module.css"

export default function Header({ title }){
    return (
        <div>
        <ul>
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
            <Link href="/schedule">
                <a>Schedule</a>
            </Link>
            </li>
        </ul>
        <h1 className={styles.title}>{title ? title : "Default title"}</h1>
    </div>
    )

}