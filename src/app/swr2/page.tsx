"use client";
import React, { useRef, useState } from "react";
import useSWR from "swr";
import axios from "axios";

//Components
import { FiAlertOctagon } from "react-icons/fi";

//Functions
import { listData } from "@/functions/getData";


type Title = {
  title: string;
};


function page() {
  const value = useRef<Title>();

  //onChange
  const handleChange = (e: any) => {
    value.current = {
      title: e.target.value,
    };
  };

  //Update Data and Mutate(Update state local)
  const SubmitUpdate = () => {
    //Bound Mutate
    mutate({ ...data, title: value?.current?.title });

    axios
      .put("https://fakestoreapi.com/products/1", value.current)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Update Title Fail!!" + err));
  };

  //Fetch Data
  const { data, error, isLoading, mutate } = listData(
    `https://fakestoreapi.com/products/1`
  );

  if (error) return <div className="text-red-500">failed to load</div>;
  if (isLoading) return <div className="text-blue-500">loading...</div>;

  return (
    <div className="mx-auto">

      {/* Alert */}
      <div role="alert" className="alert my-10">
        <FiAlertOctagon size={32} className="text-primary" />

        <div className="text-primary">
          <h4 className="font-bold">Custom SWR & Mutate Local</h4>
          <div className="text-xs">ดึงข้อมูล โดยใช้ SWR แบบแยกไฟล์โดยใช้ Axios สามารถ Fetch API และแคชข้อมูลไว้ได้</div>
          <div className="text-xs">มีฟังก์ชั่นการอัพเดทข้อมูล และจะบันทึกค่าที่อัพเดทก่อนส่งไปหลังบ้าน(Mutate Local)</div>
        </div>
      </div>

      {/* List Data */}
      {data && <h2 key={data.id}>{data.title}</h2>}

      <div className="mt-10 flex justify-center space-x-5">
        <input
          type="text"
          name="title"
          placeholder="Update Title here"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
        />
        <button className="btn btn-warning" onClick={SubmitUpdate}>
          Update
        </button>
      </div>
    </div>
  );
}

export default page;
