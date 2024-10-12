import React from "react";
import Header from "./Header";

const policyData = [
  {
    id: 1,
    title: "1. データの収集",
    content:
      "当アプリは、ユーザーからのいかなる個人情報も収集しません。これは、名前、メールアドレス、位置情報、デバイス情報、その他の個人情報を含みます。",
  },
  {
    id: 2,
    title: "2. データの共有",
    content:
      "当アプリは、ユーザーの個人情報を第三者と共有することはありません。",
  },
  {
    id: 3,
    title: "3. データの保存期間",
    content:
      "当アプリは、ユーザーから収集するデータがないため、データの保存期間に関するポリシーはありません。",
  },
  {
    id: 4,
    title: "4. ユーザーの権利",
    content:
      "ユーザーは、当アプリ内で設定したアラームを自由に削除する権利を持っています。",
  },
  {
    id: 5,
    title: "5. セキュリティ対策",
    content:
      "当アプリは、ユーザーからのデータを収集しないため、特別なセキュリティ対策を講じていません。",
  },
  {
    id: 6,
    title: "6. 改定について",
    content:
      "本プライバシーポリシーは、必要に応じて改定されることがあります。改定が行われた場合は、当アプリ内または公式ウェブサイトにて通知いたします。",
  },
];

function Privacypolicy() {
  return (
    <>
      <Header />
      <div className="m-4 p-3">
        <h2 className="my-2 text-xl">プライバシーポリシー</h2>
        <p className="p-3">
          AlarmScheduler（以下「当アプリ」といいます）は、ユーザーのプライバシーを尊重し、ユーザーの個人情報を保護することに努めています。本プライバシーポリシーは、当アプリがユーザーの情報をどのように取り扱うかについて説明します。
        </p>
        {policyData.map((policy) => {
          return (
            <div className="mb-10" key={policy.id}>
              <h3 className="my-2 text-xl border-b-2">{policy.title}</h3>
              <p>{policy.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Privacypolicy;
