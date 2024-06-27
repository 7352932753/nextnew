"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../../components/nav";
import Sidebar from "../../../components/sidebar";
import Footer from "../../../components/footer";
import { userRegister } from "@/app/utils/configfunction";
import toast, { Toaster } from "react-hot-toast";
import { addDoc,collection,doc,getDocs,onSnapshot, query, updateDoc, where, } from "firebase/firestore";
import { firestoreDb, storage } from "../../../firebase/config";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { Button, Image, Modal } from "react-bootstrap";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [vehicle_id, setVehicle_id] = useState("");
    const [imageUpload, setImageUpload] = useState("");
    const [vehicle_color, setVehicle_color] = useState("");
    const [loading2, setLoading2] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsvechile, setItemsvechile] = useState([]);
    const [records, setRecords] = useState([]);
    const [recordsn, setRecordsn] = useState([]);
    const [recordsvechile, setRecordsvechile] = useState([]);
    const [owner, setOwner] = useState([]);
    const [ownern, setOwnern] = useState([]);
    const [userid, setUserid] = useState([]);
    const [vechicleid, setVechicleid] = useState([]);

    const handleSubmit = async () => {
        setLoading(true);
        setLoading2(true);
        
        const q2 = query(
            collection(firestoreDb, "user"),
            where("userId", "==", userid)
          );
    
          let getdataArrn = [];
    
          setLoading(true);
          const querySnapshot = await getDocs(q2);
          querySnapshot.forEach((doc) => {
            getdataArrn.push({ ...doc.data(), id: doc.id });
       
          console.log(getdataArrn);
           
            setOwnern(getdataArrn[0].owner_id);
           
            setLoading(false);
            return () => unsubscribe();
          });
        
        
        const taskDocRef =  doc(firestoreDb, 'vehicle',vechicleid);
       
        updateDoc(taskDocRef, 
         {
            owner_assign: "1",
            owner_id: getdataArrn[0].owner_id,
            user_assign: "1",
            user_id: userid
       })
       const taskDocRefn =  doc(firestoreDb, 'user',getdataArrn[0].id);
       
        updateDoc(taskDocRefn, 
         {
            assign_status: "1",
          }
       )
       
       setLoading(false);
       toast.success("Vehicle Assign Successfully",{
        position: "top-right",
        style: {
          background: "green",
          color: "#fff",
          
        },
        }
        );
    
      
           
      }

    useEffect(() => {
        const ISSERVER = typeof window === "undefined";
        if (!ISSERVER) {
            const userSession = localStorage.getItem("user");
            const user_data = JSON.parse(userSession);
            // alert(user_data.user_id);
            // setOwner(user_data.user_id)
            setLoading(true);
            const q = query(
              collection(firestoreDb, "user"),
              where("assign_status", "!=","1"),
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
              let itemsArr = [];
    
              querySnapshot.forEach((doc) => {
                itemsArr.push({ ...doc.data(), id: doc.id });
              });
              setItems(itemsArr);
              setRecords(itemsArr);
              console.log(itemsArr);
              setLoading(false);
              return () => unsubscribe();
            });
            const q2 = query(
                collection(firestoreDb, "vehicle"),
                // where("owner_id", "==",user_data.user_id),
                where("user_assign", "==","0"),
                
            );
              
              const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
                let itemsArr2 = [];
      
                querySnapshot.forEach((doc) => {
                  itemsArr2.push({ ...doc.data(), id: doc.id });
                });
                setItemsvechile(itemsArr2);
                setRecordsvechile(itemsArr2);
               
                setLoading(false);
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
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0"> Assign Vehicle Owner</h1>
                </div>

                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Assign Vehicle </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row container">
            <div className="col-md-8">
              <div className="card card-dark">
                <div className="card-header">
                  <h3 className="card-title">Assign Vehicle </h3>
                </div>

                <div className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        User
                      </label>
                      <div className="col-sm-9">
                        <select  className=" form-control " onChange={(e) => setUserid(e.target.value)} required >
                         <option value="">Select User</option>
                        {records.map((item, id) => (
                                     
                                
                                <option  key={item.id}  value={item.userId}>{item.name}</option>
                                ))}
                        </select>
                        </div>
                    </div>
                    
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Vehicle
                      </label>
                      <div className="col-sm-9">
                        <select  className=" form-control " onChange={(e) => setVechicleid(e.target.value)} required >
                         <option value="">Select Vehicle</option>
                        {recordsvechile.map((item, id) => (
                          
                                <option  key={item.id}  value={item.id}>{item.name} ({item.vehicle_id})</option>
                                ))}
                        </select>
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
