"use client";
import React, { useState, useEffect } from "react";
import { FiAlertOctagon } from "react-icons/fi";
//Components
import ListData from "@/components/content/ListData";


export default function Home() {
  const [limit, setLimit] = useState(2);

  const listData = [];
  for (let i = 1; i < limit; i++) {
    listData.push(<ListData limit={i} key={i} />);
  }

  return (
    <main className="flex flex-col items-center justify-between py-10">
      {/* Alert */}
      <div role="alert" className="alert my-10">
        <FiAlertOctagon size={32} className="text-primary" />

        <div className="text-primary">
          <h4 className="font-bold">Infinite Loading</h4>
          <div className="text-xs">ดึงข้อมูลเพิ่ม หากมีการกด Load more</div>
          <div className="text-xs">สามารถแคชข้อมูลไว้ได้ หากเป็นข้อมูลที่เคยโหลดไว้แล้วจะไม่ขึ้นสถานะ Loading เมื่อกดปุ่ม Load more</div>
        </div>
      </div>

      {/* Show Data */}
      {listData}

      <button
        className="w-full btn btn-outline mt-5"
        onClick={() => setLimit(limit + 1)}
      >
        Load More
      </button>
    </main>
  );
}
