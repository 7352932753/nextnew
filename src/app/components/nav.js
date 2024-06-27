"use client";
import React, { useState } from "react";
import "../../../public/css/adminlte.min.css";
import "../../../public/css/style.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { FaSearch, FaExpandArrowsAlt, FaBars, FaBell } from "react-icons/fa";
import useAuth from "../utils/useauth";

export default function Nav() {
  
  const handleLogout = async () => {
    setLoading(true);
    signOut(auth);
    await localStorage.clear("user");
    setUser("");
    setLoading(false);
    window.open("/auth/login.html", "_self");
  };
  // const[user]=useAuthState(auth);  
  const ISSERVER = typeof window === "undefined";
  const router = useRouter();
  const state_data = useAuth((state) => state.user);
  const setUser = useAuth((state) => state.setUser);
  const [loading, setLoading] = useState(false);

  if (!ISSERVER) {
    const userSession = localStorage.getItem("user");
    const user_data = JSON.parse(userSession);

    

    const new_data = JSON.parse(state_data);
    // console.log(new_data);

    if (!new_data) {
      if (user_data === null) {
        router.push("/auth/login.html");
      } else {
        if (user_data.login === true && user_data.user_id !== null) {
          var getData = {
            email: user_data.email,
            user_id: user_data.user_id,
            role: user_data.role,
            name: user_data.name,
            image: user_data.image,
            state: user_data.state,
            city: user_data.city,
            zip: user_data.zip,
            mobile: user_data.mobile,
            address: user_data.address,
            login: true,
           
          };
          setUser(JSON.stringify(getData));
        } else {
          router.push("/auth/login.html");
        }
      }
    } else {
      if (new_data["email"] === null && new_data["user_id"] === null) {
        router.push("/auth/login.html");
      }
    }
  }

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {loading ?  <div className="loading"></div>  : <span></span>}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <FaBars />
            </a>
          </li>
          {/* <li className="nav-item d-none d-sm-inline-block">
                      <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                      <a href="#" className="nav-link">Contact</a>
                    </li> */}
        </ul>

        {/* <!-- Right navbar links --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Navbar Search --> */}
          <div className="form-inline searchheader ">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search is Global"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Notifications Dropdown Menu --> */}
         
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <FaExpandArrowsAlt />
            </a>
          </li>
          <li className="nav-item">
            <button
              className="btn bg-dark text-light"
              onClick={() => handleLogout()}
              //  onClick={()=>{
              //             signOut(auth)
              //             localStorage.clear('user')
              //         }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/*  Navbar End */}
    </>
  );
}
