import React from "react";
import Header from "./Header";
import { useRouter } from "next/router";
import Link from "next/link";

const Confirmation = () => {
  const router = useRouter();
  const comment = router.query.comment;
  const content = router.query.content;

  const submit = async () => {
    console.log("click");
    console.log(comment);
    console.log(content);

    try {
      const res = await fetch("http://127.0.0.1:5000/post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment, content }),
      });

      console.log(res);
      if (res.ok) {
        const result = await res.json();
        router.push({
          pathname: "/finish",
          query: { data: JSON.stringify(result) },
        });
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="max-h-screen h-screen overflow-hidden">
      <Header />
      <div className="h-screen flex justify-center items-center">
        <div className="w-10/12">
          <div className="bg-slate-600 p-5">
            <p className="border-b-2">問合せ内容：{content}</p>
            <div className="my-3">
              <p>本文：</p>
              <p>{comment}</p>
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
};

export default Confirmation;
