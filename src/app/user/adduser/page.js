"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import {  userRegistersec } from "@/app/utils/configfunction";
import toast, { Toaster } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestoreDb } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";

export default function Page() {
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [owner, setOwner] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {

    const userSession = localStorage.getItem("user");
      const user_data = JSON.parse(userSession);
      setOwner(user_data.user_id)
      setRole("4");

    
    },[])

    function successfun(message) {
      toast.success(`${message}`,{
        position: "top-right",
        style: {
          background: "green",
          color: "#fff",
          border: '1px solid #713200',
        },
        }
        );
    }
    function errorfun(message) {
      toast.error(`${message}`,{
        position: "top-right",
        style: {
          background: "red",
          color: "#fff",
        },
        }
        );
    }

    const handleSubmit= async()=>{
        if(email!="" && name !="" && mobile !=""){
        // const password =Math.random().toString(36).slice(2, 10)
        // alert(password);
          //  const detail = {email:email,password:password,role:role,name:name,mobile:mobile,owner:owner}
          //  const res=await userRegistersec(detail);
              await createUserWithEmailAndPassword(auth,email,password).then((res)=>{
                addDoc(collection(firestoreDb,'user'),{
                  userId:res.user.uid,
                  name:name,
                  email: res.user.email,
                  role:role,
                  password:password,
                  profile:"",
                  assign_status:"0",
                  owner_id:owner,
                  mobile:mobile,
                  address:"",
                  city:"",
                  country:"",
                  role:role,
                  state:"",
                  zip:"",
                  status:true,
                  created: new Date()
              })
              
              successfun("User  Added");
        
            }).catch(error => {
              switch (error.code) {
                  case 'auth/email-already-in-use':
                  
                  
                  errorfun(`Email address ${email} already in use.`);
                    
                  break;
                  case 'auth/invalid-email':
                  
                  // setMessage("Invalid Email");
                  // setStatus("error"); 
                  errorfun("Invalid Email");
                    break;
                  case 'auth/operation-not-allowed':
                    // setMessage("Error during sign up.");
                    // setStatus("error"); 
                    errorfun("Error during sign up.");
                 
                    break;
                  case 'auth/weak-password':
                    // setMessage("Password is not strong enough. Add additional characters including special characters and numbers.");
                    // setStatus("error"); 
                    errorfun("Password is not strong enough. Add additional characters including special characters and numbers.");
                    break;
                  default:
                    console.log(error.message);
                    // setMessage(error.message);
                    // setStatus("error"); 
                    errorfun(error.message);
                   
                    break;
                }
            });
      //  .catch((error)=>{
      //      const res="User Already Exists";
      //      return res;
      //      // console.log(error.message);
      //  })
           setEmail('');
           setName('');
           setMobile('');
           setPassword('');
          
           
           console.log(res);
          }
          else{
            toast.error("Please Fill All Input Fields",{
              position: "top-right",
              style: {
                background: "red",
                color: "#fff",
              },
              }
              );
          }
           
  
           
      }
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Sidebar />
        <Toaster/>

        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Users</h1>
                </div>

                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Edit User</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row container">
            <div className="col-md-8">
              <div className="card card-dark">
                <div className="card-header">
                  <h3 className="card-title">Add User</h3>
                </div>

                <div className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Mobile
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Mobile"
                        />
                      </div>
                    </div>
                    
                  </div>

                  <div className="card-footer center">
                    <button
                      onClick={() => handleSubmit()}
                      className="btn btn-dark"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Footer />  
      </div>
    </>
  );
}
