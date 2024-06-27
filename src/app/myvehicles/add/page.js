"use client";
import React, { useState } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { userRegister } from "@/app/utils/configfunction";
import toast, { Toaster } from "react-hot-toast";
import { addDoc,collection,onSnapshot, } from "firebase/firestore";
import { firestoreDb, storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { Button, Image, Modal } from "react-bootstrap";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [vehicle_id, setVehicle_id] = useState("");
    const [vehicle_no, setVehicle_no] = useState("");
    const [imageUpload, setImageUpload] = useState("");
    const [vehicle_color, setVehicle_color] = useState("");
    const [bluetooth_key, setBluetooth_key] = useState("");
    const [bluetooth_name, setBluetooth_name] = useState("");
    const [loading2, setLoading2] = useState(false);

    const handleSubmit = async () => {
      
      if(vehicle_no!=""  && imageUpload!="" && name!="" && vehicle_id!="" && vehicle_color!="" && bluetooth_key!=""){
        setLoading(true);
      if (imageUpload) {
  
      const imageRef = await ref(storage, `upload/vehicle/${imageUpload.name}`);
    
    await uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          
          // const taskDocRef = doc(firestoreDb, 'user',nuser_id)
          
            addDoc(collection(firestoreDb,'vehicle'),
              {
              name: name,
              vehicle_id: vehicle_id,
              vehicle_no: vehicle_no,
              vehicle_color: vehicle_color,
              vehicle_image_url: url,
              bluetooth_key: bluetooth_key,
              bluetooth_name: bluetooth_name,
              owner_assign: "0",
              user_assign: "0",
              user_id: "",
              owner_id: "",
              
      
            }
            ).then((vehicle_details)=>{
              console.log(vehicle_details)
          })
          
          toast.success("Vehicle Added Successfully",{
            position: "top-right",
            style: {
              background: "green",
              color: "#fff",
              border: '1px solid #713200',
            },
            }
            );
          setImageUpload("");
          setName("");
          setVehicle_id("");
          setVehicle_no("");
          setVehicle_color("");
          setBluetooth_key("");
          setBluetooth_name("");
          setLoading(false)
         
        });
        
      });
  
      
     
    
      } 
    } else{
      toast.error("Please Fill All Input Fields",{
        position: "top-right",
        style: {
          background: "red",
          color: "#fff",
        },
        }
        );
    }
    
    // location.reload();
      
    }
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
                  <h1 className="m-0">Vehicle</h1>
                </div>

                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Add Vehicle</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row container">
            <div className="col-md-8">
              <div className="card card-dark">
                <div className="card-header">
                  <h3 className="card-title">Add Vehicle</h3>
                </div>

                <div className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Vehicle Name
                      </label>
                      <div className="col-sm-9">
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
                        className="col-sm-3 col-form-label"
                      >
                        Vehicle Color
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          value={vehicle_color}
                          onChange={(e) => setVehicle_color(e.target.value)}
                          placeholder="Vehicle Color"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        VIN No
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          value={vehicle_no}
                          onChange={(e) => setVehicle_no(e.target.value)}
                          placeholder="Vehicle No"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Bluetooth Key
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          value={bluetooth_key}
                          onChange={(e) => setBluetooth_key(e.target.value)}
                          placeholder="Bluetooth Key"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Bluetooth Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          value={bluetooth_name}
                          onChange={(e) => setBluetooth_name(e.target.value)}
                          placeholder="Bluetooth Name"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        RF Key
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          value={vehicle_id}
                          onChange={(e) => setVehicle_id(e.target.value)}
                          placeholder="RF Key"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group row">
                      <label htmlFor="exampleInputEmail1" className="col-sm-3 col-form-label">Vehicle Image</label>
                      <div className="col-sm-9">
                        <input type="file" className="form-control"   accept="image/*" onChange={(event) => {
                          setImageUpload(event.target.files[0]);
                        }}/>
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
