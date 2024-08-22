import React from "react";
import Header from "./Header";

function privacypolicy() {
  return (
    <>
      <Header />
      <div className="m-4 p-3">
        <h2 className="my-2 text-xl">プライバシーポリシー</h2>
        <p className="p-3">
          AlarmScheduler（以下「当アプリ」といいます）は、ユーザーのプライバシーを尊重し、ユーザーの個人情報を保護することに努めています。本プライバシーポリシーは、当アプリがユーザーの情報をどのように取り扱うかについて説明します。
        </p>
        <h3 className="my-2 text-xl">1. データの収集</h3>
        当アプリは、ユーザーからのいかなる個人情報も収集しません。これは、名前、メールアドレス、位置情報、デバイス情報、その他の個人情報を含みます。
        <h3 className="my-2 text-xl">2. データの共有</h3>
        当アプリは、ユーザーの個人情報を第三者と共有することはありません。 3.
        データの保存期間
        当アプリは、ユーザーから収集するデータがないため、データの保存期間に関するポリシーはありません。
        <h3 className="my-2 text-xl">4. ユーザーの権利</h3>
        ユーザーは、当アプリ内で設定したアラームを自由に削除する権利を持っています。
        <h3 className="my-2 text-xl">5. セキュリティ対策</h3>
        当アプリは、ユーザーからのデータを収集しないため、特別なセキュリティ対策を講じていません。
        <h3 className="my-2 text-xl">6. 改定について</h3>
        本プライバシーポリシーは、必要に応じて改定されることがあります。改定が行われた場合は、当アプリ内または公式ウェブサイトにて通知いたします。
      </div>
    </>
  );
}

export default privacypolicy;
