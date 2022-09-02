import Head from "next/head";
import App from "../App";
import styles from "../styles/Home.module.css";
import { Box } from @mui/material;

import type { Liff } from "@line/liff";
import type { NextPage } from "next";

const Home: NextPage<{
  liff: Liff | null;
  liffError: string | null;
  userID: string | null;
}> = ({ liff, liffError, userID }) => {
  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>create-liff-appです</h1>
        {liff && <App />}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
        <a
          href="https://developers.line.biz/ja/docs/liff/"
          target="_blank"
          rel="noreferrer"
        >
          LIFF Documentation
        </a>
        <Box>
          <img src="../images/iriomote.jpg" alt="" />
        </Box>

      </main>
    </div>
  );
};

export default Home;
