"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Link from "next/link";
import Images from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaExclamationCircle, FaRegChartBar, FaEdit, FaTrash  } from "react-icons/fa";
import useAuth from "../utils/useauth";
import { Button, Image, Modal } from "react-bootstrap";
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { firestoreDb, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Page() {
  const pathname = usePathname();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [items, setItems] = useState([]);
  const [records, setRecords] = useState([]);
  const [show, setShow] = useState(false);
  
  const [vehiclename, setVehiclename] = useState("");
  const [vehicleuqid, setVehicleuqid] = useState("");
  const [vehiclecolor, setVehiclecolor] = useState("");
  const [vehicleid, setVehicleid] = useState("");
  const [vehicleno, setVehicleno] = useState("");
  const [vehiclimg, setVehiclimg] = useState("");
  const [imageurl, setimageUrl] = useState('');
  const [bluetoothkey, setBluetoothKey] = useState('');
  const [bluetoothname, setBluetoothName] = useState('');
  const [imageUpload, setImageUpload] = useState("");
  const [nuser_id, setNuserid] = useState("");
  

  const handleClose = () => setShow(false);

  const state_data = useAuth((state) => state.user);
  const new_data = JSON.parse(state_data);

  const handleUpdate = async () => {
    setLoading(true);
    setLoading2(true);
    setimageUrl("");

    if (imageUpload) {

    const imageRef = await ref(storage, `upload/vehicle/${imageUpload.name}`);
  
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        
        const taskDocRef = doc(firestoreDb, 'vehicle',vehicleuqid)
          updateDoc(taskDocRef, 
            {
              name: vehiclename,
              vehicle_id: vehicleid,
              vehicle_color: vehiclecolor,
              vehicle_no: vehicleno,
              bluetooth_key: bluetoothkey,
              vehicle_image_url:url
    
          }
          )
        handleClose();
        toast.success("Data Updated",{
          position: "top-right",
          style: {
            background: "green",
            color: "#fff",
            border: '1px solid #713200',
          },
          }
          );
        setLoading(false)
        setLoading2(false);
      });
      
    });

    
   
  
  }
  else{
  // alert(vehicleuqid);
    
    const taskDocRef =  doc(firestoreDb, 'vehicle',vehicleuqid);
   
    updateDoc(taskDocRef, 
     {
      name: vehiclename,
      vehicle_id: vehicleid,
      vehicle_color: vehiclecolor,
      bluetooth_key:bluetoothkey,
      bluetooth_name:bluetoothname,
      vehicle_no: vehicleno,

   }
   
   )
   handleClose();
   
   setLoading(false);
   toast.success("Data is Updated But Image Not Updated",{
    position: "top-right",
    style: {
      background: "green",
      color: "#fff",
      
    },
    }
    );

  }
       
  }

  const handleShow = async (item) => {
    // console.log(item.id);
     setShow(true);
  //  var uid=id;

  //  setName("")
  


    
        setVehiclename(item.name)
        setVehiclecolor(item.vehicle_color)
        setVehicleid(item.vehicle_id);
        setVehicleuqid(item.id);
        setVehicleno(item.vehicle_no);
        setBluetoothKey(item.bluetooth_key);
        setBluetoothName(item.bluetooth_name);
        setVehiclimg(item.vehicle_image_url);
        
        

    
  };

  useEffect(() => {

  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) {
    const userSession = localStorage.getItem("user");
    const user_data = JSON.parse(userSession);
    setRole(user_data.role)
    if(user_data.role==1){
      setLoading(true);
    const q = query(collection(firestoreDb, "vehicle"));
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

const deleteItem = async (id) => {
  setLoading(true)
  await deleteDoc(doc(firestoreDb, "vehicle", id));
  setLoading(false);
  toast.success("Delete Vehicle Data",{
    position: "top-right",
    style: {
      background: "green",
      color: "#fff",
      border: '1px solid #713200',
    },
    }
    );
};


  if (new_data) {
    const role = new_data.role;
  } else {
    const role = "";
    const new_data = "";
  }

  return (
    <>
    {loading ?  <div className="loading"></div>  : <span></span>}
      <div className="wrapper">
        <Nav />
        <Sidebar />
        <Toaster/>
        <Modal 
      size="lg"
    show={show} onHide={handleClose}>
        <Modal.Header className='modal-head' closeButton>
          <Modal.Title>Update User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {loading2?  <div className="loading"></div>  : <span></span>}
          <div className="row">
              <div className="col-6 form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="name" name="name" defaultValue={vehiclename} onChange={(e)=> setVehiclename(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Name"/>
              </div>
              <div className=" col-6 form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="text" className="form-control" id="name"   defaultValue={vehiclecolor} onChange={(e)=> setVehiclecolor(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Name"/>
              </div>
              <div className=" col-6 form-group">
                <label htmlFor="exampleInputEmail1">RF key</label>
                <input type="text" className="form-control" defaultValue={vehicleid} onChange={(e)=> setVehicleid(e.target.value)}/>
              </div>
              <div className=" col-6 form-group">
                <label htmlFor="exampleInputEmail1">VIN NO</label>
                <input type="text" className="form-control" defaultValue={vehicleno} onChange={(e)=> setVehicleno(e.target.value)}/>
              </div>
              <div className=" col-6 form-group">
                <label htmlFor="exampleInputEmail1">Bluetooth Key</label>
                <input type="text" className="form-control" defaultValue={bluetoothkey} onChange={(e)=> setBluetoothKey(e.target.value)}/>
              </div>
              <div className=" col-6 form-group">
                <label htmlFor="exampleInputEmail1">Bluetooth Name </label>
                <input type="text" className="form-control" defaultValue={bluetoothname} onChange={(e)=> setBluetoothName(e.target.value)}/>
              </div>
              <div className=" col-6 form-group">
                <label htmlFor="exampleInputEmail1">Profile Image</label>
                <input type="file" className="form-control"   accept="image/*" onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}/>
              </div>
             
              <div className=" col-6 form-group">
                <label htmlFor="exampleInputEmail1">Old Image</label>
                 <Link href={vehiclimg} target="_blank"> <Image className="form-control" src={vehiclimg} style={{width:"200px",height:"100px"}} /> </Link>
              </div>
              


            </div>
            <div className="card-footer">
              <button onClick={() => handleUpdate()} className="btn btn-dark">Update</button>
              <a className="btn btn-dark ml-5 justify-content-end">Assign Vehicles</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Update
          </Button> */}
        </Modal.Footer>
    </Modal>

        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}

          {(() => {
            if (new_data) {
              if (new_data.role == 1) {
                return (
                  <>
                    <div className="content-header">
                      <div className="container-fluid">
                        <div className="row mb-2">
                          <div className="col-sm-9">
                            <h1 className="m-0"> Vehicles <Link
                                href="/myvehicles/add.html"
                               className="btn btn-success ml-3 mt-3" 
                              >
                              Add Vehicle
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
                            <th scope="col">RF Key</th>
                            <th scope="col">VIN No</th>
                            <th scope="col">Vehicle Color</th>
                            <th scope="col">Action </th>
                            {/* <th scope="col">Vehicle Color</th> */}
                          </tr>
                        </thead>
                        <tbody>
                        {records.map((item, id) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.vehicle_id}</td>
                                <td>{item.vehicle_no}</td>
                                <td>{item.vehicle_color}</td>

                                <td>
                                  <button
                                    onClick={() => deleteItem(item.id)}
                                    className="btn btn-dark"
                                  >
                                    <FaTrash />                          
                                  </button>
                                  <Button className="btn btn-dark ml-3 text-light" variant="primary" onClick={() => handleShow(item)} >
                                      <FaEdit />
                                  </Button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                );
              } else {
                return (
                <>
                  <div className="content-header">
                    <div className="container-fluid">
                      <div className="row mb-2">
                        <div className="col-sm-9">
                          <h1 className="m-0"> My Vehicle</h1>
                        </div>

                        <div className="col-sm-3">
                          <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                              <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                              My Vehicle
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  {(() => {
                    if (new_data) {
                      if (new_data.role == 2) {
                        return (
                          <>
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-md-3 ">
                                  <div
                                    className={
                                      pathname == "/myvehicles.html"
                                        ? "card  shadow bg-dark text-muted font-weight-bold "
                                        : "card shadow text-dark"
                                    }
                                  >
                                    <Link href="/myvehicles.html">
                                      <div className="py-4 text-center text-lg boxone ">
                                        General
                                      </div>
                                    </Link>
                                  </div>
                                </div>

                                <div className="col-md-3">
                                  <div className="card shadow gen">
                                    <Link href="/myvehicles/analytics.html">
                                      <div className="py-4  text-center text-dark text-lg boxone">
                                        Analytics
                                      </div>
                                    </Link>
                                  </div>
                                </div>

                                <div className="col-md-3">
                                  <div className="card shadow gen">
                                    <Link href="/myvehicles/nextservice.html">
                                      <div className="py-4  text-center text-dark text-lg boxone">
                                        Next Servics
                                      </div>
                                    </Link>
                                  </div>
                                </div>

                                <div className="col-md-3">
                                  <div className="card shadow gen">
                                    <Link href="/myvehicles/lastlocation.html">
                                      <div className="py-4  text-center text-dark text-lg boxone">
                                        Last Locations
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card-group m-2 ">
                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">General</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <FaExclamationCircle />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                                  <ul>
                                    <li>
                                      {" "}
                                      <a href="myvehicles/vehicle.html">Vehicles</a>
                                    </li>
                                    <hr />
                                    <li>
                                      <a href="#">Users</a>
                                    </li>
                                    <hr />
                                    <li>
                                      <a href="#">Batteries</a>
                                    </li>
                                    <hr />
                                    <li>
                                      <a href="#">
                                        Plot total fleet milage versus weeks
                                        (Cumulative)
                                      </a>
                                    </li>
                                    <hr />
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      }
                    }
                  })()}

                  {(() => {
                    if (new_data) {
                      if (new_data.role == 3) {
                        return (
                          <>
                            <div className="content-header mt-3">
                              <div className="container_new">
                                <div className="row mb-2 padd   ">
                                  <div
                                    className="col-sm-12 first bg-dark ml-4 "
                                    data-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                  >
                                    <div>
                                      <div className="Vehi">
                                        My 1st Vehicle’s
                                      </div>
                                    </div>
                                    <div>
                                      <div>
                                        <button
                                          type="button"
                                          className="btn btn-dark "
                                        >
                                          Open <FaAngleDown />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="card-group m-2 collapse "
                              id="collapseExample"
                            >
                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Settings</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <i className="fa fa-gear"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                                  <ul>
                                    <li>Name</li>
                                    <hr />
                                    <li>User</li>
                                    <hr />
                                  </ul>
                                </div>
                              </div>

                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Analytics</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <FaRegChartBar />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                                  <ul>
                                    <li>Total Km</li>
                                    <hr />
                                    <li>300km/hr speed</li>
                                    <hr />
                                    <li>Issues/Notifi cations</li>
                                    <hr />
                                    <li>Errors </li>
                                    <hr />
                                  </ul>
                                </div>
                              </div>

                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Routes</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      {" "}
                                      <i className="fas fa-route"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                                  <ul>
                                    <li>
                                      Date{" "}
                                      <span
                                        title="3 New Messages"
                                        className="badge badge-secondary icon"
                                      >
                                        {" "}
                                        <i
                                          className="fa fa-calendar "
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </li>{" "}
                                    <hr />
                                    <li>
                                      Duration
                                      <span
                                        title="3 New Messages"
                                        className="badge badge-secondary icon"
                                      >
                                        {" "}
                                        <i className="fa fa-clock-o "></i>
                                      </span>{" "}
                                    </li>
                                    <hr />
                                    <li>
                                      Distance{" "}
                                      <span
                                        title="3 New Messages"
                                        className="badge badge-secondary icon"
                                      >
                                        {" "}
                                        <i
                                          className="fa fa-map-marker "
                                          aria-hidden="true"
                                        ></i>
                                      </span>{" "}
                                    </li>
                                    <hr />
                                  </ul>
                                </div>
                              </div>

                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Next Service</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <i
                                        className="fa fa-wrench"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>

                                <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                                  <ul>
                                    <li>Date</li>
                                    <li>Service Issue</li>
                                  </ul>
                                </div>
                              </div>

                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Last Location</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <i
                                        className="fa fa-map-marker"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>

                                <div className="col-span-1 bg-white border border-gray-300 h-80  py-4 ">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592358484!2d77.2370138404494!3d28.522404034683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701067367319!5m2!1sen!2sin"
                                    className="ifr"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  ></iframe>
                                </div>
                              </div>
                            </div>

                            <div className="content-header">
                              <div className="container_new">
                                <div className="row mb-2 padd   ">
                                  <div
                                    className="col-sm-12 first bg-dark ml-4  "
                                    data-toggle="collapse"
                                    href="#collapseExampletwo"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExampletwo"
                                  >
                                    <div>
                                      <div className="Vehi">
                                        My 2nd Vehicle’s
                                      </div>
                                    </div>
                                    <div>
                                      <div>
                                        <button
                                          type="button"
                                          className="btn btn-dark "
                                        >
                                          Open <FaAngleDown />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="card-group m-2 collapse "
                              id="collapseExampletwo"
                            >
                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Settings</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <i className="fa fa-gear"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="col-span-1 bg-white border   overflow-auto py-4 ">
                                  <ul>
                                    <li>Name</li>
                                    <hr />
                                    <li>User</li>
                                    <hr />
                                  </ul>
                                </div>
                              </div>

                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Analytics</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <FaRegChartBar />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                                  <ul>
                                    <li>Total Km</li>
                                    <hr />
                                    <li>300km/hr speed</li>
                                    <hr />
                                    <li>Issues/Notifi cations</li>
                                    <hr />
                                    <li>Errors </li>
                                    <hr />
                                  </ul>
                                </div>
                              </div>

                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Routes</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      {" "}
                                      <i className="fas fa-route"></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                                  <ul>
                                    <li>
                                      Date{" "}
                                      <span
                                        title="3 New Messages"
                                        className="badge badge-secondary icon"
                                      >
                                        {" "}
                                        <i
                                          className="fa fa-calendar "
                                          aria-hidden="true"
                                        ></i>
                                      </span>
                                    </li>{" "}
                                    <hr />
                                    <li>
                                      Duration
                                      <span
                                        title="3 New Messages"
                                        className="badge badge-secondary icon"
                                      >
                                        {" "}
                                        <i className="fa fa-clock-o "></i>
                                      </span>{" "}
                                    </li>
                                    <hr />
                                    <li>
                                      Distance{" "}
                                      <span
                                        title="3 New Messages"
                                        className="badge badge-secondary icon"
                                      >
                                        {" "}
                                        <i
                                          className="fa fa-map-marker "
                                          aria-hidden="true"
                                        ></i>
                                      </span>{" "}
                                    </li>
                                    <hr />
                                  </ul>
                                </div>
                              </div>

                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Next Service</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <i
                                        className="fa fa-wrench"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>

                                <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto py-4 ">
                                  <ul>
                                    <li>Date</li>
                                    <li>Service Issue</li>
                                  </ul>
                                </div>
                              </div>

                              <div className="card box sett">
                                <div className="card-header border-0">
                                  <h3 className="card-title">Last Location</h3>
                                  <div className="card-tools">
                                    <span
                                      title="3 New Messages"
                                      className="badge badge-primary"
                                    >
                                      <i
                                        className="fa fa-map-marker"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>

                                <div className="col-span-1 bg-white border border-gray-300 h-80  py-4 ">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592358484!2d77.2370138404494!3d28.522404034683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701067367319!5m2!1sen!2sin"
                                    className="ifr"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      }
                    }
                  })()}
                </>)
              }
            }
          })()}
        </div>
        <Footer />
      </div>
    </>
  );
}
