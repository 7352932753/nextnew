"use client";
import {firestoreDb } from "../../firebase/config";
import { collection, getDocs, query, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";
import Nav from "@/app/components/nav";
import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";


export default function Page() {
  // const editor = useRef(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const q = query(collection(firestoreDb, "privacypolicy"));

        let getdataArr = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          getdataArr.push({ ...doc.data(), id: doc.id });
        });
        setTitle(getdataArr[0].title);
        setDesc(getdataArr[0].desc);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  const handleUpdate = async () => {
    setLoading(true);

    const taskDocRef = doc(
      firestoreDb,
      "privacypolicy",
      "a5iNFh0TOx3zEPnGscNB"
    );

    await updateDoc(taskDocRef, {
      title: title,
      desc: desc,
    });
    setLoading(false);
    alert("Data is Updated");
  };
  return (
    <div className="wrapper">
       {loading ? <div className="loading"></div> : <span> </span>}
      <Nav />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  {/* <h1 className="m-0">Privacy Policy</h1> */}
                </div>

                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active"> Privacy Policy</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="card card-dark">
                {/* <div className="card-header">
                  <h3 className="card-title text-center"></h3>
                </div> */}

                <div className="form-horizontal">
                <h1 className="text-center bg-dark text-muted pt-2 pb-2">{title}</h1>
                  <div className="card-body">
                    <div className="card-title"></div>
                    

                    <div className="form-group row">
                    <p>{desc}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <Footer />
      
    </div>
  )
}
