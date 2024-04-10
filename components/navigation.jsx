"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const path = usePathname();
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link> {path === "/" ? "⭐" : ""}
          </li>
          <li>
            <Link href="/about">about</Link> {path === "/about" ? "⭐" : ""}
          </li>
        </ul>
      </nav>
    </div>
  );
}
