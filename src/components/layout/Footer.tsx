import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Logo removed per request */}
        <p className={styles.copy}>
          Designed & built by <span className={styles.accent}>Akash Sareen</span> · {new Date().getFullYear()}
        </p>
        <p className={styles.sub}>// crafted with precision //</p>
      </div>
    </footer>
  );
}
