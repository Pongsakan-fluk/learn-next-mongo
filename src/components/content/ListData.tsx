"use client";
import React from "react";
//Functions
import { listData } from "@/functions/getData";

type Props = {
    limit: number;
    key: number
};


function ListData({ limit, key }: Props) {
  //Fetch Data
  const { data, error, isLoading } = listData(
    `https://fakestoreapi.com/products/${limit}`
  );

  if (error) return <div className="text-red-500">failed to load</div>;
  if (isLoading) return <div className="text-blue-500">loading...</div>;

  return (
    <div key={data.id} className="w-full mx-auto p-10 bg-slate-200 rounded-lg">
      {data && <h2>{data.title}</h2>}
    </div>
  );
}

export default ListData;
