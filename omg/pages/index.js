import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <Link href="/tablet">
        <a>To getStaticProps page</a>
      </Link>
      <br />
    </div>
  );
}
