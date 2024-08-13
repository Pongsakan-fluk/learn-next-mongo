import React from "react";

//Components
import ModalCreate from "@/components/content/ModalCreate";
import TableData from "@/components/content/TableData";

type Props = {};

function page({}: Props) {
  return (
    <div className="py-10 space-y-7 w-full flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <h1 className="uppercase text-primary text-center">crud</h1>

        <ModalCreate />
      </div>

      {/* Table */}
      <div className="">
        <TableData />
      </div>
    </div>
  );
}

export default page;
