"use client";
import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import {
  FaMotorcycle,
  FaUsers,
  FaBell,
  FaWrench,
  FaShieldAlt,
  FaRegUserCircle,
} from "react-icons/fa";
import useAuth from "../utils/useauth";

export default function Sidebar() {
  // const [name, setName] = useState("");
  const pathname = usePathname();
  let safetyClass;
  if (pathname == "/myvehicles") {
    safetyClass = "nav-link active";
  } else if (pathname == "/myvehicles/analytics") {
    safetyClass = "nav-link active";
  } else if (pathname == "/myvehicles/nextservice") {
    safetyClass = "nav-link active";
  } else if (pathname == "/myvehicles/lastlocation") {
    safetyClass = "nav-link active";
  } else {
    safetyClass = "nav-link ";
  }

  const state_data = useAuth((state) => state.user);

  console.log(state_data);
  const new_data = JSON.parse(state_data);
  if (new_data) {
    const role = new_data.role;
    // setName(new_data.name)
    var name = new_data.name;
    // console.log(new_data.role);
    if (role == "1") {
      var role_name = "Admin";
    }
    if (role == "2") {
      var role_name = "B2B";
    }
    if (role == "3") {
      var role_name = "Individual";
    }
  } else {
    // console.log(name);
    const role = "";
    const new_data = "";
    var name = "";
    var role_name = "";
  }

  return (
    <>
      {/* Sidebar Start */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4 fix">
        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          {/* <!-- Sidebar user panel (optional) --> */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {/* <Image
                src={require("../../../public/img/profile.png")}
                className="img-circle elevation-2"
                alt="User Image"
              /> */}
              <img src="../img/profile.png" className="img-circle elevation-2" />
              {/* <Image src={new_data.image} width={180}
                    height={180}
                    layout="responsive"    className="img-circle elevation-2" style={{width:"auto"}} alt="User Image"/> */}
            </div>
            <div className="info">
              <Link href="/profile.html" className="d-block">
                {name}
              </Link>
              <span className="text-light" style={{ fontSize: "12px" }}>
                {role_name}
              </span>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library --> */}
              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link
                      href="/dashboard.html"
                      className={
                        pathname == "/dashboard.html" ? " nav-link active" : "nav-link"
                      }
                    >
                      <b>
                        <FaHome />
                      </b>
                      <p> Home Page</p>
                    </Link>
                  </li>
                  {(() => {
                    if (new_data) {
                      if (new_data.role == 1) {
                        return (
                          <>
                            <li className="nav-item">
                              <Link
                                href="/owner.html"
                                className={
                                  pathname == "/owner.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaRegUserCircle />
                                </b>
                                <p> Owners </p>
                              </Link>
                            </li>
                            {/* <li className="nav-item">
                              <Link
                                href="/assign/owner.html"
                                className={
                                  pathname == "/assign/owner.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaRegUserCircle />
                                </b>
                                <p> Vehicles Assign user  </p>
                              </Link>
                            </li> */}
                             <li className="nav-item">
                              <Link
                                href="/assign/owner/assign_user/list.html"
                                className={
                                  pathname == "/assign/owner/assign_user/list.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaRegUserCircle />
                                </b>
                                <p> Assign User To Owner </p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="/assign/owner/assign_vehicle_owner/list.html"
                                className={
                                  pathname == "/assign/owner/assign_vehicle_owner/list.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaRegUserCircle />
                                </b>
                                <p> Vehicles Assign Owner  </p>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="/assign/owner/assign_vehicle_user/list.html"
                                className={
                                  pathname == "/assign/owner/assign_vehicle_user/list.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaRegUserCircle />
                                </b>
                                <p> Vehicles Assign User  </p>
                              </Link>
                            </li>
                           
                          </>
                        );
                      } else {
                        return <></>;
                      }
                    }
                  })()}
                  {(() => {
                    if (new_data) {
                      if (new_data.role != 4) {
                        return (
                          <>
                            <li className="nav-item">
                              <Link
                                href="/user.html"
                                className={
                                  pathname == "/user.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaUsers />
                                </b>
                                <p> Users </p>
                              </Link>
                            </li>
                            {/* <li className="nav-item">
                              <Link
                                href="/assign/ownerassign.html"
                                className={
                                  pathname == "/assign/ownerassign.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaUsers />
                                </b>
                                <p> Assigned Vehicle </p>
                              </Link>
                            </li> */}
                          </>
                        );
                      } else {
                        return <></>;
                      }
                    }
                  })()}

                  <li className="nav-item">
                    <Link href="/myvehicles.html" className={safetyClass}>
                      <b>
                        <FaMotorcycle />
                      </b>
                      <p> My Vehicles </p>
                    </Link>
                  </li>
                  {(() => {
                    if (new_data) {
                      if (new_data.role == 2 || new_data.role == 3) {
                        return (
                          <>
                          <li className="nav-item">
                              <Link
                                href="/assign/owner/assign_vehicle_user/list.html"
                                className={
                                  pathname == "/assign/owner/assign_vehicle_user/list.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaRegUserCircle />
                                </b>
                                <p> Vehicles Assign User  </p>
                              </Link>
                            </li>
                            </>
                        );
                      } else {
                        return <></>;
                      }
                    }
                  })()}

                  <li className="nav-item">
                    <Link
                      href="/notification.html"
                      className={
                        pathname == "/notification.html"
                          ? " nav-link active"
                          : "nav-link"
                      }
                    >
                      <b>
                        <FaBell />
                      </b>
                      <p> Notifications</p>
                    </Link>
                  </li>
                  {(() => {
                    if (new_data) {
                      if (new_data.role != 1) {
                        return (
                          <>
                            <li className="nav-item">
                              <Link
                                href="/service.html"
                                className={
                                  pathname == "/service.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaWrench />
                                </b>
                                <p> Request for service</p>
                              </Link>
                            </li>
                          </>
                        );
                      }
                    }
                  })()}
                  {(() => {
                    if (new_data) {
                      if (new_data.role == 1) {
                        return (
                          <>
                            <li className="nav-item">
                              <Link
                                href="/privacypolicy.html"
                                className={
                                  pathname == "/privacypolicy.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaShieldAlt />
                                </b>
                                <p> Privacy Policy</p>
                              </Link>
                            </li>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <li className="nav-item">
                              <Link
                                href="/privacypolicy/user.html"
                                className={
                                  pathname == "/privacypolicy/user.html"
                                    ? " nav-link active"
                                    : "nav-link"
                                }
                              >
                                <b>
                                  <FaShieldAlt />
                                </b>
                                <p> Privacy Policy</p>
                              </Link>
                            </li>
                          </>
                        );
                      }
                    }
                  })()}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
