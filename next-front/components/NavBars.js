import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav>
            <Link href="/" className={`${styles.link} ${router.locale === "/" ? styles.active : ""}`}>
                Home
            </Link>
            <Link href="/about" className={`${styles.link} ${router.locale === "/about" ? styles.active : ""}`}>
                About
            </Link>
        </nav>
    )
}