"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import toast, { Toaster } from "react-hot-toast";
import { addDoc,collection,getDoc,onSnapshot, query, where, } from "firebase/firestore";
import { firestoreDb, storage } from "../../firebase/config";
import Link from "next/link";
import useAuth from "@/app/utils/useauth";

export default function Page() {
    const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [itemsn, setItemsn] = useState([]);
  const [recordsn, setRecordsn] = useState([]);
  const state_data = useAuth((state) => state.user);
  const new_data = JSON.parse(state_data);
    useEffect(() => {

        const ISSERVER = typeof window === "undefined";
      
        if (!ISSERVER) {
          const userSession = localStorage.getItem("user");
          const user_data = JSON.parse(userSession);
          setLoading(true);

          const q2 =  query(collection(firestoreDb, "user", user_data.id, "assign_vehicle"));
         
         const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
                 let itemsArrn = [];
           
                 querySnapshot.forEach((doc) => {
                    itemsArrn.push({ ...doc.data(), id: doc.id });
                   console.log(doc.id, " => ", doc.data());
                 });
                 setItemsn(itemsArrn);
                 setRecords(itemsArrn);
             setLoading(false)
             return () => unsubscribe2();
           });
       
        
      }
      }, []);
     
    
  return (
    <>
    {loading ?  <div className="loading"></div>  : <span></span>}
      <div className="wrapper">
        <Nav />
        <Sidebar />
        <Toaster/>

    

        <div className="content-wrapper">

        <div className="content-header">
                      <div className="container-fluid">
                        <div className="row mb-2">
                          <div className="col-sm-9">
                            <h1 className="m-0"> Assign Vehicle  List
                            {(() => {
            if (new_data) {
              if (new_data.role == 1) {
                return (
                  <>
                   <Link
                                href="/assign/owner/assign_vehicle_user.html"
                               className="btn btn-success ml-3 mt-3" 
                              >
                              Assign Vehicle To User
                              </Link>
                              
                              </>
                        );
                      }
                    }
                  })()}</h1>
                            
                          </div>

                          <div className="col-sm-3">
                            <ol className="breadcrumb float-sm-right">
                              <li className="breadcrumb-item">
                                <a href="#">Home</a>
                              </li>
                              <li className="breadcrumb-item active">
                                Vehicles
                              </li>
                              
                            </ol>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div className="container-fluid">
                      <table className="table">
                        <thead>
                          <tr>
                          <th scope="col"> Vehicle Name</th>
                            <th scope="col">Vehicle Color</th>
                            <th scope="col">RF Key</th>
                            <th scope="col">Bluetooth Key</th>
                          </tr>
                        </thead>
                        <tbody>
                        {records.map((item, id) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.vehicle_color}</td>
                                <td>{item.vehicle_id}</td>
                                <td>{item.bluetooth_key}</td>
                                
                                
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>


          {/* <!-- Content Header (Page header) --> */}
         
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
}
