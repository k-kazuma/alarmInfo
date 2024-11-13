import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ReactNode, useEffect } from "react";

interface AuthProps {
  children: ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => {
  //router
  const router = useRouter();
  const cookieKey = process.env.COOKIE_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const checkCookie = async () => {
    const res = await fetch(`${apiUrl}/admin/user/n/asdfghjkl11/`, {
      method: "GET",
    });
    //Cookieのチェック（これをいろいろ認証タイプにより変更）
    const responseText = await res.text();
    const signedIn = Cookies.get(`${cookieKey}`);
    //signedInがtrueじゃなければ/loginへ
    if (signedIn !== responseText) router.replace("/login");
    //何もなければ次へ（そのまま処理）
  };

  checkCookie();
  return children;
};

export default Auth;
