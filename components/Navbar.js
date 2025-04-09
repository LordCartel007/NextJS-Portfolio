// components/NavBar.js

import Link from "next/link";
import styles from "../components/NavBar.module.css";

export default function NavBar() {
  // This is a functional component for the navigation bar
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>MyPortfolio</h1>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <h1>Projects</h1>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <h1>Contact</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
