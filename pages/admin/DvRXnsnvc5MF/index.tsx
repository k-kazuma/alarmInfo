import Header from "@/pages/Header";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Login() {
  const [idText, setIdText] = useState("");
  const [pwText, setPwText] = useState("");
  const router = useRouter();
  const onChangeIdText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(idText);
    setIdText(event.target.value);
  };

  const onChangePwText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPwText(event.target.value);
  };

  const login = () => {
    console.log(idText, pwText);
    //ここで認証を行い認証できた場合問い合わせ一覧へ遷移

    router.push({
      pathname: "DvRXnsnvc5MF/inquiriesList/",
    });
  };

  return (
    <>
      <Header />
      <div>
        <h2>Login</h2>
        <input
          type="text"
          value={idText}
          onChange={onChangeIdText}
          className="block text-center"
        />
        <input
          type="text"
          value={pwText}
          onChange={onChangePwText}
          className="block text-center"
        />
        <button onClick={login}>login</button>
      </div>
    </>
  );
}

export default Login;

// [{"comment": "hihihihhiuh", "content": "不具合", "created": "Sat, 26 Oct 2024 03:17:01 GMT", "id": 1}]
