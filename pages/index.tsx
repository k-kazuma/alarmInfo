import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const postAction = (e: any, comment: String, content: String) => {
  e.preventDefault();
  console.log(comment, content);
};

export default function Home() {
  const [comment, setComment] = useState("");
  const [content, setContent] = useState("不具合");
  const contents = ["不具合", "機能の追加希望", "機能の改修希望"];

  const handleContents = (e: any) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <div className="text-center mt-5 mx-auto">
        <h2>【ご意見・ご要望】</h2>
        <p className="p-4">
          当アプリの不具合や、機能の追加、改修希望される内容など下記フォームより送信してください。
        </p>
      </div>
      <form
        onSubmit={(e) => postAction(e, comment, content)}
        className="flex justify-center items-center my-20"
      >
        <div className="ml-5 mr-5 w-screen border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <select
            className="border bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleContents}
          >
            {contents.map((content) => {
              return <option key={content}>{content}</option>;
            })}
          </select>
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows={7}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="こちらにご記入をお願いします..."
              required
              value={comment} // 状態の値を反映
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center px-3 py-2 border-t dark:border-gray-600">
            <Link
              href={"/Confirmation"}
              content="aaa"
              type="submit"
              className=" mr-0 ml-auto inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              確認画面へ
            </Link>
            <div>{/* <Confirmation /> */}</div>
            <div></div>
          </div>
        </div>
      </form>
    </div>
  );
}

//adfafaf
