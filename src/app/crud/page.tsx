'use client'
import React from "react";
import useSWR, { mutate } from "swr";

//Components
import ModalCreate from "@/components/content/ModalCreate";
import TableData from "@/components/content/TableData";

//Functions
import { listData } from "@/functions/getData";


type Props = {};

function page({}: Props) {

  //Fetch Data
  const { data, error, isLoading } = listData(`${process.env.NEXT_PUBLIC_API}/api/product`);
  

  if (error) return <div className="text-red-500">failed to load</div>;
  if (isLoading) return <div className="text-blue-500">loading...</div>;
  

  return (
    <div className="py-10 space-y-7 w-full flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <h1 className="uppercase text-primary text-center">crud</h1>

        <ModalCreate />
      </div>

      {/* Table */}
      <div className="">
        <TableData data={data} />
      </div>
    </div>
  );
}

export default page;
