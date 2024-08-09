import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar bg-primary text-primary-content flex justify-between items-center px-5">
      <Link href="/" className="btn btn-ghost text-xl">
        daisyUI
      </Link>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Test SWR</summary>
              <ul className="w-40 bg-primary text-primary-content">
                <li>
                  <Link href="/swr1">Custom SWR</Link>
                </li>
                <li>
                  <Link href="/swr2">Fetch SWR</Link>
                </li>
                <li>
                  <Link href="/swr3">Fetch by Axios</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/crud">CRUD</Link>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
