import React from "react";
import Header from "./Header";
import { useRouter } from "next/router";

const Confirmation = () => {
  const router = useRouter();
  const comment = router.query.comment;
  return (
    <>
      <Header />
      <div>confirmation</div>
      {comment == "" ? "問い合わせ内容を入力してください" : comment}
      <p>{comment}</p>
    </>
  );
};

export default Confirmation;
