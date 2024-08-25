import React from "react";
import Header from "./Header";
import { useRouter } from "next/router";
import Link from "next/link";

const Confirmation = () => {
  const router = useRouter();
  const comment = router.query.comment;
  const content = router.query.content;

  const submit = () => {
    console.log("click");
    console.log(comment);
    console.log(content);
  };

  return (
    <>
      <Header />
      <div>
        <p>問合せ内容：{content}</p>
        <p>{comment}</p>
        <button onClick={submit}>送信する</button>
        <Link href="/">戻る</Link>
      </div>
    </>
  );
};

export default Confirmation;
