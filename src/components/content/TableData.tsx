import React from "react";
import { FiX } from "react-icons/fi";

//Components
import ModalUpdate from "./ModalUpdate";

type Props = {};

function TableData({}: Props) {
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
          <tr className="hover">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>5</td>
            <td>Description</td>
            <td><button className="btn btn-circle btn-sm btn-error"><FiX size={22} /></button></td>
            {/* Send data */}
            <td><ModalUpdate id="1" /></td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>4</td>
            <td>Description</td>
            <td><button className="btn btn-circle btn-sm btn-error"><FiX size={22} /></button></td>
            <td><ModalUpdate id="2" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
