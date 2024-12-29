import styles from "./Footer.module.css"; // Import the CSS module for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; {new Date().getFullYear()} @LordCartel. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>
            About
          </a>
          <a href="/projects" className={styles.link}>
            Projects
          </a>
          <a href="/contact" className={styles.link}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
