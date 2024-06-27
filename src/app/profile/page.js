"use client";
import React from "react";
import { app, auth, firestoreDb } from "../firebase/config";
import { getAuth } from "firebase/auth";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Image from "next/image";
import useAuth from "../utils/useauth";

export default function Page() {
    const state_data = useAuth((state) => state.user);
    const new_data = JSON.parse(state_data);
    if (new_data) {
      // console.log(new_data);
      // console.log(new_data.name);
      const role = new_data.role;
      // setName(new_data.name)
      var name= new_data.name;
      var mobile= new_data.mobile;
      var email= new_data.email;
      var profile_img= new_data.image;
      var address= new_data.address;
      var user_id= new_data.user_id;
      var city= new_data.city;
      var state= new_data.state;
      var zip= new_data.zip;
      // console.log(new_data.role); 
      if(role=="1"){
        var role_name="Admin" 
      }
      if(role=="2"){
        var role_name="B2B"
      }
      if(role=="3"){
        var role_name="Individual"
      }
    }

  return (
    <div className="wrapper">
      <Nav />
      <Sidebar />
      <div className="content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              {/* <!-- Profile Image --> */}
              <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                  <div class="text-center">
                    <Image
                      class="profile-user-img img-fluid img-circle"
                      src={profile_img}
                      width={100}
                      height={100}
                      alt="User profile picture"
                    />
                  </div>

                  <h3 class="profile-username text-center">{name}</h3>

                  <p class="text-muted text-center">{role_name}</p>

                  <ul class="list-group list-group-unbordered mb-3">
                    <li class="list-group-item">
                      <b>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <span className="ml-5">{name}</span>
                      {/* <a class="float-right">{name}</a> */}
                    </li>
                    <li class="list-group-item">
                      <b>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <span className="ml-5">{email}</span>
                    </li>
                    <li class="list-group-item">
                      <b>Mobile&nbsp;&nbsp;&nbsp;&nbsp;</b> <span className="ml-5">{mobile}</span>
                    </li>
                    <li class="list-group-item">
                      <b>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <span className="ml-5">{city}</span>
                    </li>
                    <li class="list-group-item">
                      <b>State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> <span className="ml-5">{state}</span>
                    </li>
                    <li class="list-group-item">
                      <b>Zip Code</b> <span className="ml-5">{zip}</span>
                    </li>
                    <li class="list-group-item">
                      <b>Address&nbsp;</b> <span className="ml-5">{address}</span>
                    </li>
                  </ul>

                 
                </div>
              </div>

             
            </div>
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
