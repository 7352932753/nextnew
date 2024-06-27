"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../../components/nav";
import Sidebar from "../../../components/sidebar";
import Footer from "../../../components/footer";
import { userRegister } from "@/app/utils/configfunction";
import toast, { Toaster } from "react-hot-toast";
import { addDoc,collection,doc,getDocs,onSnapshot, query, setDoc, updateDoc, where, } from "firebase/firestore";
import { firestoreDb, storage } from "../../../firebase/config";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { Button, Image, Modal } from "react-bootstrap";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [vehicle_id, setVehicle_id] = useState("");
    const [imageurl, setImageUrl] = useState("");
    const [vehicle_color, setVehicle_color] = useState("");
    const [loading2, setLoading2] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsnew, setItemsnew] = useState([]);
    const [itemsvechile, setItemsvechile] = useState([]);
    const [records, setRecords] = useState([]);
    const [recordsn, setRecordsn] = useState([]);
    const [recordsvechile, setRecordsvechile] = useState([]);
    const [owner, setOwner] = useState([]);
    const [ownern, setOwnern] = useState([]);
    const [vehicleno, setVehicleno] = useState([]);
    const [vehiclename, setVehiclename] = useState([]);
    const [vehicleid, setVehicleid] = useState([]);
    const [ownerid, setOwnerid] = useState([]);
     const[singleBike,setsingleBike]=useState([])
    function setVehicle(item){
      setsingleBike(JSON.parse(item))
      setVehicleid(JSON.parse(item).id)
     console.log(JSON.parse(item))
     console.log(singleBike)
    }

    const handleSubmit = async () => {
        setLoading(true);
        setLoading2(true);
        setVehicle_color("");
        setVehicle_id("");
        setVehiclename("");
        setImageUrl("");
        setVehicleno("");
        // alert(vehicleid);
        // const q3 = await query(collection(firestoreDb, "vehicle"),where("id", "==",vehicleid));  
        // console.log(q3);
          
        //   const unsubscribe3 =await onSnapshot(q3, (querySnapshot) => {
           
        //     let itemsArrnew = [];
        //     querySnapshot.forEach((doc) => {
        //         itemsArrnew.push({ ...doc.data(), id: doc.id });
        //     });
        console.log(vehicleid);
            
            setDoc(doc(firestoreDb,`/user/${ownerid}/assign_vehicle`,vehicleid),{
                // id:singleBike.id,
                // name:singleBike.name,
                // vehicle_color:singleBike.vehicle_color,
                vehicle_id:vehicleid,
                // vehicle_id:singleBike.vehicle_id,
                // vehicle_image_url:singleBike.vehicle_image_url,
                // vehicle_no:singleBike.vehicle_no,
                // bluetooth_key:singleBike.bluetooth_key,
                // bluetooth_name:singleBike.bluetooth_name,
            })
            // setItemsnew(itemsArrnew);
           
          //   return () => unsubscribe3();
          // });
      
        // const taskDocRef =  doc(firestoreDb, 'user',userid);
        // const generalRef = await collection(firestoreDb, `/user/${ownerid}/assign_vehicle`).vehicleid;
        // const general =  (generalRef, {
        //   id:vehicleid,
        //   name:singleBike,
        //   vehicle_color:vehicle_color,
        //   vehicle_id:vehicle_id,
        //   vehicle_image_url:imageurl,
        //   vehicle_no:vehicleno,
        // });
        // console.log(general);
       
       
       
       
       setLoading(false);
       toast.success("Vehicle Assign Owner Successfully",{
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
        
            setLoading(true);
            const q = query(
              collection(firestoreDb, "user"),
              where("role", "==", "4"),
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
                  <h1 className="m-0"> Assign Vehicle To User</h1>
                </div>

                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Assign Vehicle To User </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row container">
            <div className="col-md-8">
              <div className="card card-dark">
                <div className="card-header">
                  <h3 className="card-title">Assign Vehicle To User </h3>
                </div>

                <div className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Users
                      </label>
                      <div className="col-sm-9">
                        <select  className=" form-control " onChange={(e) => setOwnerid(e.target.value)} required >
                         <option value="">Select User</option>
                        {records.map((item, id) => (
                                     
                                
                                <option  key={item.id}  value={item.id}>{item.name}</option>
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
                        <select  className=" form-control " onChange={(e) => setVehicle(e.target.value)} required >
                         <option value="">Select Vehicle</option>
                        {recordsvechile.map((item, id) => (
                          
                                <option  key={item.id}  value={JSON.stringify(item)}>{item.name}({item.vehicle_no})</option>
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
