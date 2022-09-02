import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { Liff } from "@line/liff";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);
  const [userID, setUserID] = useState<string | null>(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        liff
          // liffオブジェクトを作成
          .init({ liffId: "1657404848-rBBb50eR" })
          .then(() => {
            // liffオブジェクトをstateに保存
            setLiffObject(liff);
            // LINEの情報を元にuserIDを取得
            // liff.getIDToken()をパラメーターにフェッチでuserIDを取得
            // 取得したuserIDをsetUserID()でstateに保存する
          })
          .catch((error: Error) => {
            setLiffError(error.toString());
          });
      });
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  pageProps.userID = userID;
  return <Component {...pageProps} />;
}

export default MyApp;
