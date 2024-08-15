"use client";
import { useRef, useState } from "react";
import { FiTrash2, FiChevronRight } from "react-icons/fi";

//Type
import { Value } from "./ModalCreate";

type Props = {
    id: string
};

function ModalUpdate({ id }: Props) {

  const value = useRef<Value>({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e: any) => {
    value.current = { ...value.current, [e.target.name]: e.target.value };
  };

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div className="drawer">
      <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Button + open modal */}
        <label
          htmlFor="my-drawer2"
          className="btn btn-square btn-sm drawer-button"
        >
          <FiChevronRight size={25} />
        </label>
      </div>

      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* modal content */}
        <div className="bg-base-200 min-h-full w-96 py-20 text-primary flex flex-col items-center rounded-r-[25px]">
          <h2 className="text-center">Update product</h2>
          <p>{ id }</p>

          {/* Form Create */}
          <div className="mt-5 space-y-2">
            {/* Title */}
            <label className="form-control w-full max-w-xs space-y-2">
              <span className="label-text text-primary">Title</span>
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
              />
            </label>
            {/* Price */}
            <label className="form-control w-full max-w-xs space-y-2">
              <span className="label-text text-primary">Price</span>
              <input
                type="number"
                name="price"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
              />
            </label>
            {/* Category */}
            <label className="form-control w-full max-w-xs space-y-2">
              <span className="label-text text-primary">Category</span>
              <input
                type="text"
                name="category"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
              />
            </label>
            {/* Image */}
            <label className="form-control w-full max-w-xs space-y-2">
              <span className="label-text text-primary">Image</span>
              <input
                type="text"
                name="image"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
              />
            </label>
            {/* Description */}
            <label className="form-control w-full max-w-xs space-y-2">
              <span className="label-text text-primary">Description</span>
              <input
                type="text"
                name="description"
                className="input input-bordered w-full max-w-xs"
                onChange={handleChange}
              />
            </label>
          </div>
          {/* Button Submit */}
          <button
            className="btn btn-primary uppercase mx-auto mt-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdate;
