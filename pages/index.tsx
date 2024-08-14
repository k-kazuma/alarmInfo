import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const postAction = (e: any) => {
  e.preventDefault();
  console.log("hi");
};

export default function Home() {
  return (
    <div className="h-screen">
      <div className="text-center mt-5">
        <h2>【ご意見・ご要望】</h2>
        <p className="p-4">
          当アプリの不具合や、追加希望の機能、改修希望される内容など下記フォームより送信してください。
        </p>
      </div>
      <form
        onSubmit={postAction}
        className="w-screen flex items-center justify-center"
      >
        <div className=" w-screen ml-5 mr-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows={7}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="flex items-center px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className=" mr-0 ml-auto inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              送信する
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

//adfafaf
