import React, { useEffect, useState } from "react";

function Admin() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [inquiriesList, setInquiriesList] = useState<[object]>([{}]);

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
    <>
      <div>index</div>;
      <div>
        {inquiriesList.map((inquiry, index) => (
          <div key={index}>{JSON.stringify(inquiry)}</div>
        ))}
      </div>
    </>
  );
}

export default Admin;
