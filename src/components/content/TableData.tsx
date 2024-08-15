import React from "react";
import { FiX } from "react-icons/fi";

//Components
import ModalUpdate from "./ModalUpdate";

type Props = {
  data: any;
};

export type Product = {
  category: string;
  createdAt: string;
  description: string;
  image: string;
  price: number;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

function TableData({ data }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data &&
            data.map((item:Product, idx:number) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button className="btn btn-circle btn-sm btn-error">
                    <FiX size={22} />
                  </button>
                </td>
                {/* Send data */}
                <td>
                  <ModalUpdate data={item} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
