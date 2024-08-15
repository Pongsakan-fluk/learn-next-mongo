"use client";
import { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

//functions
import { createProduct } from "@/functions/product";

export type Value = {
  title: string | number | readonly string[] | undefined;
  price: string | number | readonly string[] | undefined;
  category: string | number | readonly string[] | undefined;
  description: string | number | readonly string[] | undefined;
  image: string | number | readonly string[] | undefined;
};

function ModalCreate() {
  const [open, setOpen] = useState<boolean>(false);
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
    /* console.log(value); */

    createProduct(value.current)
    .then((res) => {
      /* console.log(res); */
      alert(`Create product ${res.data.title} success!`)
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Button + open modal */}
        <label
          htmlFor="my-drawer"
          className="btn btn-success btn-circle text-white btn-sm drawer-button"
        >
          <FiPlus
            size={25}
            className={`${open && "rotate-45"} transition duration-300 ease-in-out`}
            onClick={() => setOpen(true)}
          />
        </label>
      </div>

      <div className="drawer-side z-10" onClick={() => setOpen(false)}>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* modal content */}
        <div className="bg-base-200 min-h-full w-96 py-20 text-primary flex flex-col items-center rounded-r-[25px]">
          <h2 className="text-center">Create product</h2>

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
                placeholder="Enter Price"
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
                placeholder="Enter Category"
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
                placeholder="Enter Image"
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
                placeholder="Enter Description"
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

export default ModalCreate;
