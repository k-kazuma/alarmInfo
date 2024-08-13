import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const postAction = (e) => {
  e.preventDefault();
  console.log("hi");
};

export default function Home() {
  return (
    <>
      <h1>ご意見・ご要望</h1>
      <form onSubmit={postAction}>
        <textarea name="textarea"></textarea>
        <button type="submit">送信</button>
      </form>
    </>
  );
}

//adfafaf
