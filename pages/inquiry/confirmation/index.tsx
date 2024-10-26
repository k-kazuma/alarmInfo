import React, { useState, Suspense } from "react";
import Header from "../../Header";
import { useRouter } from "next/router";
import Link from "next/link";
import Loading from "@/pages/Loading";

function Confirmation() {
  const router = useRouter();
  const comment = router.query.comment;
  const content = router.query.content;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const submit = async () => {
    console.log("click");
    console.log(comment);
    console.log(content);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(apiUrl);

    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/post/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment, content }),
      });

      console.log(res);
      setLoading(false);
      if (res.ok) {
        const result = await res.json();
        router.push({
          pathname: "confirmation/finish",
          query: { data: JSON.stringify(result) },
        });
      } else {
        console.error("Error during fetch:", error);
        setError(true);
        setErrorCount(errorCount + 1);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setError(true);
      setErrorCount(errorCount + 1);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="max-h-screen h-screen">
      <Header />
      <div className="min-h-screen flex justify-center items-center max-w-96 mx-auto mt-5">
        <div className="w-10/12">
          {error ? (
            <p className="my-5 text-rose-700	">
              {errorCount > 1 ? (
                <p>
                  {`繰り返しエラーが発生する場合は時間を空けて操作をお願いします。エラー回数：` +
                    errorCount}
                </p>
              ) : (
                <p>
                  エラーが発生し送信ができませんでした。再度送信ボタンを押してください。
                </p>
              )}
            </p>
          ) : (
            ""
          )}
          <div className="bg-slate-600 p-5 break-all block">
            <p className="border-b-2">問合せ内容：{content}</p>
            <div className="my-3">
              <p>本文：</p>
              <p className="">{comment}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="mt-10 mb-2 button items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg"
              onClick={submit}
            >
              送信する
            </button>
            <Link
              href="/"
              className="mb-2 backbutton items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg"
            >
              戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
