import React from "react";

//Components
import ModalCreate from "@/components/content/ModalCreate";

type Props = {};

function page({}: Props) {
  return (
    <div className="mx-auto py-10 space-y-7">
      <div className="flex items-center space-x-2">
        <h1 className="uppercase text-primary text-center">crud</h1>

        <ModalCreate />
      </div>
      {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
        Open drawer
      </label> */}
    </div>
  );
}

export default page;
