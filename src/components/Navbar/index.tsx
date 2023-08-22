import Footer from "components/Footer";
import InputText from "components/InputText";
import { home, profile } from "Helpers/constants";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const nome: string | null = localStorage.getItem("nome");

  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <Link to={home} className="btn btn-ghost normal-case text-lg">
            Memorizando FlashCard
          </Link>
        </div>
        <div className="flex-none gap-2">
       
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="w-12 h-12 flex justify-center items-center font-bold text-lg text-white capitalize text-center rounded-full bg-blue-500"
            >
              {nome![0]}
            </div>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="normal-case text-md" to={`profile`}>
                  Profile
                </Link>
              </li>

              <li>
                <Link className="normal-case text-md" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
