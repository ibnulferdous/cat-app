import Head from "next/head";
import Image from "next/image";
import Jumbotron from "../components/Jumbotron";
import TopNav from "../components/TopNav";
import DefaultLayout from "../layouts/Default";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cats World-Adopt your cat</title>
        <meta name="description" content="Adopt cats as friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <DefaultLayout>
          <Jumbotron />
        </DefaultLayout>
      </>
    </div>
  );
}
