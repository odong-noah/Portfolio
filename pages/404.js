import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | Odong Noah</title>
      </Head>
      <div className={styles.page}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.sub}>The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className={styles.btn}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </>
  );
}
