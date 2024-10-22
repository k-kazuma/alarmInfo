import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

const postAction = (e: any, comment: String, content: String) => {
  e.preventDefault();
  console.log(comment, content);
};

function Inquiry() {
  const [comment, setComment] = useState("");
  const [content, setContent] = useState("選択してください");
  const contents = [
    "選択してください",
    "不具合",
    "機能の追加希望",
    "機能の改修希望",
  ];

  const handleContents = (e: any) => {
    setContent(e.target.value);
  };

  return (
    <div className="max-h-screen overflow-hidden">
      <Header />
      <div className="h-screen max-w-96 mx-auto">
        <div className="text-center mt-5 max-w-80 mx-auto">
          <h2>【ご意見・ご要望】</h2>
          <p className="p-4">
            当アプリの不具合や、機能の追加、改修希望される内容など下記フォームより送信してください。
          </p>
        </div>
        <form
          onSubmit={(e) => postAction(e, comment, content)}
          className="flex justify-center items-center my-10"
        >
          <div className="ml-5 mr-5 w-screen">
            <div className="flex">
              <h3>問合せ内容：</h3>
              <select className="" onChange={handleContents}>
                {contents.map((content) => {
                  return <option key={content}>{content}</option>;
                })}
              </select>
            </div>
            <div className="px-4 py-2">
              <label className="sr-only">Your comment</label>
              <textarea
                id="comment"
                rows={7}
                className="w-full px-0 text-sm"
                placeholder="こちらにご記入をお願いします..."
                value={comment} // 状態の値を反映
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex items-center px-3 py-2 border-t">
              <Link
                href={{
                  pathname: `inquiry/confirmation`,
                  query: {
                    comment: comment,
                    content: content,
                  },
                }}
                content="aaa"
                type="submit"
                className={
                  content != "選択してください" && comment != ""
                    ? "button mr-0 ml-auto inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg"
                    : "button mr-0 ml-auto inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg opacity-20 pointer-events-none"
                }
              >
                確認画面へ
              </Link>
              <div>{/* <Confirmation /> */}</div>
              <div></div>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default Inquiry;
