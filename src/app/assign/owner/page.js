"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { userRegister } from "@/app/utils/configfunction";
import toast, { Toaster } from "react-hot-toast";
import { addDoc,collection,onSnapshot, query, where, } from "firebase/firestore";
import { firestoreDb, storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { Button, Image, Modal } from "react-bootstrap";
import Link from "next/link";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [vehicle_id, setVehicle_id] = useState("");
    const [imageUpload, setImageUpload] = useState("");
    const [vehicle_color, setVehicle_color] = useState("");
    const [loading2, setLoading2] = useState(false);
    const [items, setItems] = useState([]);
  const [records, setRecords] = useState([]);
    useEffect(() => {

        const ISSERVER = typeof window === "undefined";
      
        if (!ISSERVER) {
          const userSession = localStorage.getItem("user");
          const user_data = JSON.parse(userSession);
        //   setRole(user_data.role)
          if(user_data.role==1){
            setLoading(true);
          const q = query(collection(firestoreDb, "vehicle"), where("owner_assign", "==","1"),);
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let itemsArr = [];
      
            querySnapshot.forEach((doc) => {
              itemsArr.push({ ...doc.data(), id: doc.id });
            });
            
            setItems(itemsArr);
            setRecords(itemsArr);
            console.log(records);
            setLoading(false)
            return () => unsubscribe();
          });
        }
        else{
          setLoading(true);
        const q = query(collection(firestoreDb, "vehicle"),where("owner_id", "==",user_data.user_id), where("owner_assign", "==","1"),);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let itemsArr = [];
    
          querySnapshot.forEach((doc) => {
            itemsArr.push({ ...doc.data(), id: doc.id });
          });
          
          setItems(itemsArr);
          setRecords(itemsArr);
          console.log(records);
          setLoading(false)
          return () => unsubscribe();
        });
      }
        
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
                            <h1 className="m-0"> Vehicles <Link
                                href="owner/user.html"
                               className="btn btn-success ml-3 mt-3" 
                              >
                              Assign Vehicle
                              </Link></h1>
                            
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
                      <table class="table">
                        <thead>
                          <tr>
                          <th scope="col">Vehicle Name</th>
                            <th scope="col">Owner Id</th>
                            <th scope="col">user ID</th>
                            <th scope="col">RF Key</th>
                            <th scope="col">Vehicle No</th>
                            <th scope="col">Vehicle Color</th>
                            {/* <th scope="col">Vehicle Color</th> */}
                          </tr>
                        </thead>
                        <tbody>
                        {records.map((item, id) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.owner_id}</td>
                                <td>{item.user_id}</td>
                                <td>{item.vehicle_id}</td>
                                <td>{item.vehicle_no}</td>
                                <td>{item.vehicle_color}</td>

                               
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
         
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
}
