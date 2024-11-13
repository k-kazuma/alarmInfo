import Auth from "@/pages/components/auth";
import React, { useEffect, useState } from "react";

type Inquiry = {
  comment: string;
  content: string;
  created: string;
  id: number;
};

function Admin() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [inquiriesList, setInquiriesList] = useState<[Inquiry]>([
    { comment: "無し", content: "無し", created: "無し", id: 1 },
  ]);

  const getInquiriesList = async () => {
    const res = await fetch(`${apiUrl}/`, {
      method: "GET",
    });

    // resのステータスで条件分岐
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    } else {
      const data = await res.json();
      console.log("DBからの返り値res", res);
      console.log("DBからの返り値data", data);
      return data;
    }
  };

  useEffect(() => {
    const fetchAndSetInquiriesList = async () => {
      const list = await getInquiriesList();
      setInquiriesList(list);
    };
    fetchAndSetInquiriesList();
  }, []);

  return (
    <Auth>
      <div>index</div>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">content</th>
            <th scope="col">comment</th>
            <th scope="col">day</th>
          </tr>
        </thead>
        <tbody>
          {inquiriesList.map((inquiry, index) => (
            <tr key={index}>
              <td>{inquiry.id}</td>
              <td>{inquiry.content}</td>
              <td>{inquiry.comment}</td>
              <td>{inquiry.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Auth>
  );
}

export default Admin;
