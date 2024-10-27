import React, { useEffect, useState } from "react";

function Admin() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [inquiriesList, setInquiriesList] = useState<object>({});

  const getInquiriesList = async () => {
    const res = await fetch(`${apiUrl}/`, {
      method: "GET",
    });

    // resのステータスで条件分岐
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  };

  useEffect(() => {
    setInquiriesList(getInquiriesList());
    console.log(inquiriesList);
  }, []);
  return <div>index</div>;
}

export default Admin;
