"use client";
import { useState, useEffect } from "react";
import axios from "axios";

//Components
import { FiAlertOctagon } from "react-icons/fi";

type Props = {};

function page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch API fail !!", +err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Alert */}
      <div role="alert" className="alert my-10">
        <FiAlertOctagon size={32} className="text-primary" />

        <div className="text-primary">
          <h4 className="font-bold">Fetch API By Axios</h4>
          <div className="text-xs">ดึงข้อมูลแบบปกติโดยใช้ Axios</div>
          <div className="text-xs">ทุกครั้งที่ render หรือ Fetch API จะขึ้น Loading ตลอด</div>
        </div>
      </div>

      {/* Show Loading */}
      {loading && <p className="text-blue-500">Loading...</p>}

      {/* List Data */}
      {data && data.map((item: any) => <h2 key={item.id} className="my-2">{item.title}</h2>)}
    </div>
  );
}

export default page;
