import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
                Home
            </Link>
            <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>
                About
            </Link>
            <style jsx>
                {`
                    nav{
                        background-color: tomato;
                    }
                    a {
                        text-decoration:none;
                    }
                    .active {
                        color : yellow;
                    }
                `}
            </style>
        </nav>
    )
}