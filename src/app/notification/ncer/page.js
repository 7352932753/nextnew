"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { notificationAdd } from "@/app/utils/configfunction";
import toast, { Toaster } from "react-hot-toast";
import { collection, onSnapshot, or, query, where } from "firebase/firestore";
import { firestoreDb } from "../../firebase/config";

export default function Page() {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [owner, setOwner] = useState("");
    const [message, setMessage] = useState("");
    const [records, setRecords] = useState([]);

    

    useEffect(() => {
        const ISSERVER = typeof window === "undefined";
    
        if (!ISSERVER) {
        //   const userSession = localStorage.getItem("user");
        //   const user_data = JSON.parse(userSession);
        //   setRole(user_data.role);
        //   if (user_data.role == 1) {
            setLoading(true);
            const q = query(
              collection(firestoreDb, "user"),
                where('role', 'in', [ '2','3'])
              
            
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
              let itemsArr = [];
    
              querySnapshot.forEach((doc) => {
                itemsArr.push({ ...doc.data(), id: doc.id });
              });
              setRecords(itemsArr);
              console.log(itemsArr);
              setLoading(false);
              return () => unsubscribe();
            });
        //   }
        }
      }, []);

    const handleSubmit= async()=>{

        if(title!="" && owner!="" && message!=""){
        
       
        // alert(password);
           const detail = {title:title,owner:owner,message:message}
           await notificationAdd(detail)
            alert("Notification Added Successfully");
           toast.success("Notification  Added",{
            position: "top-right",
            style: {
              background: "green",
              color: "#fff",
              border: '1px solid #713200',
            },
            }
            );
           setTitle('');
           setMessage('');
           setOwner('');
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
    {loading ? <div className="loading"></div> : <span></span>}
      <div className="wrapper">
        <Nav />
        <Sidebar />
        <Toaster />

        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Owners</h1>
                </div>

                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Add Owner</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row container">
            <div className="col-md-8">
              <div className="card card-dark">
                <div className="card-header">
                  <h3 className="card-title">Add Owner</h3>
                </div>

                <div className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                      Title
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Notification Title"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Select Owner
                      </label>
                      <div className="col-sm-10">
                        <select  className=" form-control " value={owner} onChange={(e) => setOwner(e.target.value)} required >
                                <option value="" selected>Select Role Type</option>
                                {records.map((item, id) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                                <option value="3">Individual</option>
                        </select>
                        </div>
                    </div>
                   
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                      Message
                      </label>
                      <div className="col-sm-10">
                        
                        <textarea  className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} rows="7"></textarea>

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
