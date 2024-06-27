"use client";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import {
  FaBell,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaUsers,
  FaRoute,
  FaAngleDown,
  FaRegUserCircle
} from "react-icons/fa";

import { useEffect, useState } from "react";
import useAuth from "../utils/useauth";
import { collection, getCountFromServer, limit, limitToLast, onSnapshot, query, where } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { orderByChild } from "firebase/database";


export default function Home() {
  const state_data= useAuth((state) => state.user);

  const new_data = JSON.parse(state_data);
  if (new_data) {
    const role = new_data.role;
    
  } else {
    const role = "";
    const new_data = "";
  }
  const [loading, setLoading] = useState(false);
  const [notificationcount, setNotificationcount] = useState("");
  const [usercount, setUsercount] = useState("");
  const [ownercount, setOwnercount] = useState("");
  const [vehiclecount, setVehiclecount] = useState("");
  
  const count = async() =>{
    setLoading(true);
    const coll = collection(firestoreDb, "notification");
    const q2 = query(coll);
    const snapshot = await  getCountFromServer(q2);
    setNotificationcount(snapshot.data().count);

    const coll2 = collection(firestoreDb, "user");
    const q3 = query(coll2,where("role", "==", "4"));
    const snapshot2 = await  getCountFromServer(q3);
    setUsercount(snapshot2.data().count);

    const coll3 = collection(firestoreDb, "user");
    const q4 = query(coll3,where("role", "!=", "4"));
    const snapshot3 = await  getCountFromServer(q4);
    setOwnercount(snapshot3.data().count);

    const coll4 = collection(firestoreDb, "vehicle");
    const q5 = query(coll4);
    const snapshot4 = await  getCountFromServer(q4);
    setVehiclecount(snapshot4.data().count);

   


    setLoading(false);


    }

  const [items, setItems] = useState([]);
  const [records, setRecords] = useState([]);
  const [recordsnn, setRecordsnn] = useState([]);
  const [items2, setItems2] = useState([]);
  const [recordsnn1, setRecordsnn1] = useState([]);
  const [recordsnn2, setRecordsnn2] = useState([]);
  useEffect(() => {
    count();
    if (typeof window !== "undefined") {
      setLoading(false);
    }
    
    if(new_data.role!="1"){
      // const coll3 = collection(firestoreDb, "user");
      // const ref = query(coll3);;
      // const query = ref.orderByChild("time").limitToLast(5);
      // query.once("child_added").then((snapshot) => {
      //   console.log(snapshot.val().value);
      // });

      // var scoresRef = firebase.database().ref("notification");
      // scoresRef.orderByValue().limitToLast(3).on("value", function(snapshot) {
      //   snapshot.forEach(function(data) {
      //     console.log("The " + data.key + " score is " + data.val());
      //   });
      // });


    // const q =   query(collection(firestoreDb, "notification"), where("owner_id", "==",new_data.user_id));
   
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   let itemsArr = [];

    //   querySnapshot.forEach((doc) => {
    //     itemsArr.push({ ...doc.data(), id: doc.id });
    //   });
      
    //   setItems(itemsArr);
    //   setRecords(itemsArr);
    //   console.log(records);
    //   return () => unsubscribe();
    // });

    const q =   query(collection(firestoreDb, "notification"), where("owner_id", "==",new_data.user_id));
   
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      
      setItems(itemsArr);
      setRecords(itemsArr);
      console.log(records);
      return () => unsubscribe();
    });


    
  }
  const q2 =   query(collection(firestoreDb, "vehicle"),where('owner_assign','==','1'),limit(10));
    // console.log(q2);
    const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
      let itemsArrnn = [];

      querySnapshot.forEach((doc) => {
        itemsArrnn.push({ ...doc.data(), id: doc.id });
      });
      
      setRecordsnn(itemsArrnn);
      console.log(itemsArrnn);
      setLoading(false)
      return () => unsubscribe2();
    });
    const q3 =   query(collection(firestoreDb, "user"),where('role','==','4'));
    console.log(q3);
    const unsubscribe3 = onSnapshot(q3, (querySnapshot) => {
      let itemsArrnn1 = [];

      querySnapshot.forEach((doc) => {
        itemsArrnn1.push({ ...doc.data(), id: doc.id });
      });
      
      setRecordsnn1(itemsArrnn1);
      console.log(itemsArrnn1);
      setLoading(false)
      return () => unsubscribe3();
    });
    const q4 =   query(collection(firestoreDb, "user"),where('role','!=','4'));
    console.log(q4);
    const unsubscribe4= onSnapshot(q4, (querySnapshot) => {
      let itemsArrnn2 = [];

      querySnapshot.forEach((doc) => {
        itemsArrnn2.push({ ...doc.data(), id: doc.id });
      });
      
      setRecordsnn2(itemsArrnn2);
      console.log(itemsArrnn2);
      setLoading(false)
      return () => unsubscribe3();
    });



  }, []);

  return (
    <>
      {loading ? <div className="loading"></div> : <span></span>}

      <Head>
        <title>My page title</title>
      </Head>
      <div className="wrapper">
        <Nav />

        <Sidebar />

        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Home Page</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Home Page  </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.content-header --> */}

          {/* <!-- Main content --> */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  {/* <!-- Notifications start --> */}

                  <div className="card notifi">
                    
                    {(() => {
                    if (new_data) {
                      if (new_data.role == 1) {
                        return (
                          <>
                          <div className="card-header bg-dark  border-0">
                          <h3 className="card-title">Totals </h3>
                          </div>

                          <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto">
                            <div className="card">
                              <ul className="list-group">
                                <li className="list-group-item bg-dark mt-3" aria-current="true"><h5>Total {vehiclecount} of Vehicle</h5></li>
                                <li className="list-group-item bg-dark mt-3" aria-current="true"><h5>Total {ownercount} of Owners </h5></li>
                                <li className="list-group-item bg-dark mt-3" aria-current="true"><h5>Total {usercount} of Users </h5></li>
                                <li className="list-group-item bg-dark mt-3" aria-current="true"><h5>Total {notificationcount} of Notifications </h5></li>
                              </ul>
                            </div>
                            </div>
                          </>
                          );
                        } else {
                          return <>
                          <div className="card-header bg-dark  border-0">
                           <h3 className="card-title text-light">Notifications</h3>
                            <div className="card-tools">
                              <span
                                title="3 New Messages"
                                className="badge badge-dark"
                              >
                                {" "}
                                <FaBell />
                              </span>

                              <span className="badge badge-warning navbar-badge ]">
                                15
                              </span>
                            </div>
                            </div>

                            <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto">
                      <div className="card">
                        <div className="card-header  border-0"></div>
                        {records.map((item, id) => (
                        <div key={item.id}>
                          
                        <div
                          className="col-sm-11 ml-4 me-2  mycst first bg-dark text-light "
                          data-toggle="collapse"
                          href={`#${item.id}`}
                          role="button"
                          aria-expanded="true"
                          aria-controls="collapseExample"
                        >
                          <div>
                            <div className="Vehi">{item.title}</div>
                          </div>
                          <div>
                            <div>
                              <button
                                type="button "
                                className="btn btn-dark text-light"
                              >
                                <b>
                                  Open <FaAngleDown />
                                </b>
                              </button>
                            </div>
                          </div>
                        </div>
                        <br />
                       
                        <div
                          className="alert rul text-justify collapse  "
                          role="alert"
                          id={item.id}
                        >
                          {/* <div className="text-lg pb-2 notitwo "> */}
                            {/* Notification 1 – Short Description */}
                          {/* </div> */}
                          <div className="text-lg pb-2 pt-2 notione">
                            
                            Subject
                          </div>
                          <div>
                          {item.message}
                          </div>

                          {/* <div className="pt-1">
                            {" "}
                            Recommendations in research are a crucial component
                            of your discussion section and the conclusion of
                            your thesis, dissertation, or research paper.{" "}
                          </div> */}
                        </div>
                        </div>
                         ))}

                        <br />

                      
                      </div>
                    </div>
                          </>;
                        }
                      }
                    })()}
                     
                   

                    
                  </div>

                  <div className="card notifi ">
                    <div className="card-header bg-dark border-0">
                    {(() => {
                    if (new_data) {
                      if (new_data.role == 1) {
                        return (
                          <>
                   
                          <h3 className="card-title">Last 10 Vehicles </h3>
                          </>
                          );
                        } else {
                          return <>
                          <h3 className="card-title"> Vehicles </h3>
                          </>;
                        }
                      }
                    })()}
                      {/* <h3 className="card-title">Vehicles</h3> */}
                      <div className="card-tools">
                        <span
                          title="3 New Messages"
                          className="badge badge-dark"
                        >
                          <FaMotorcycle />
                        </span>
                      </div>
                    </div>
                    <div className="col-span-1 bg-white border border-gray-300 h-80 overflow-auto vehiclesone">
                      <ol>
                     
                        {recordsnn.map((item2, id) => (
                        <a href="" key={item2.id}>
                          <li className="text-dark">
                            <h4 className="px-1 py-2  text-primary">
                             {item2.name}
                            </h4>
                          </li>
                        </a>
                        ))}
                       
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                  {(() => {
                    if (new_data) {
                      if (new_data.role == 1) {
                        return (
                          <>
                            <div className="card-header bg-dark border-1\">
                              <h3 className="card-title ">Last 10 Owners </h3>
                              <div className="card-tools">
                                <span
                                  title="3 New Messages"
                                  className="badge badge-dark"
                                >
                                  <FaRegUserCircle />
                                </span>
                              </div>
                            </div>

                            <div className="col-span-1 bg-white border border-gray-300 h-80 notif">
                              <table
                                className="table table-bordered  dataTable dtr-inline"
                                aria-describedby="example2_info"
                              >
                                <tbody>
                                {recordsnn2.map((item, id) => (
                                  <tr key={item.id}>
                                    <td>
                                      {" "}
                                      <a href="#">{item.name} </a>
                                    </td>
                                    {/* <td>Name</td>
                                    <td>other data</td> */}
                                  </tr>
                                ))}
                                 
                                </tbody>
                              </table>
                            </div>
                          </>
                          );
                        } else {
                          return <>
                          <div className="card-header bg-dark border-1\">
                              <h3 className="card-title ">Locations </h3>
                              <div className="card-tools">
                                <span
                                  title="3 New Messages"
                                  className="badge badge-dark"
                                >
                                  <FaMapMarkerAlt />
                                </span>
                              </div>
                            </div>
                          <div className="col-span-1 bg-white border border-gray-300 h-80">

                            <div className="px-1 mt-3">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592358484!2d77.2370138404494!3d28.522404034683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700725461443!5m2!1sen!2sin"className="iframeone"
                              loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            </div>
                          </>;
                        }
                      }
                    })()}

                    {/* <div className="col-span-1 bg-white border border-gray-300 h-80">

                              <div className="px-1 mt-3">
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592358484!2d77.2370138404494!3d28.522404034683056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700725461443!5m2!1sen!2sin"className="iframeone"
                                 loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                            </div> */}

                    
                  </div>
                  {/* <!-- Locations end --> */}

                  {/* User */}

                  <div className="card">
                    <div className="card-header bg-dark border-.5 ">
                    {(() => {
                    if (new_data) {
                      if (new_data.role == 1) {
                        return (
                          <>
                   
                          <h3 className="card-title">Last 10 User </h3>
                          </>
                          );
                        } else {
                          return <>
                          <h3 className="card-title"> User </h3>
                          </>;
                        }
                      }
                    })()}
                    
                      <div className="card-tools">
                        <span
                          title="3 New Messages"
                          className="badge badge-dark"
                        >
                          <FaUsers />
                        </span>
                      </div>
                    </div>

                    <div className="col-span-1 bg-white border border-gray-300 h-80 notif">
                      <table
                        className="table table-bordered  dataTable dtr-inline"
                        aria-describedby="example2_info"
                      >
                        <tbody>
                        
                        {recordsnn1.map((item, id) => (
                          <tr key={item.id}>
                            <td>
                              <a href="#">{item.name} </a>
                            </td>
                            {/* <td>Name</td>
                            <td>other data</td> */}
                          </tr>
                        ))}
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* User */}
                </div>
                {/* <!-- Last Route (of all vehicles) start --> */}
                <div className="col-12">
                  <div className="card">
                    <div className="card-header bg-dark border-.5 ">
                      <h3 className="card-title">
                        Last Route (of all vehicles)
                      </h3>
                      <div className="card-tools">
                        <span
                          title="3 New Messages"
                          className="badge badge-dark"
                        />
                        <FaRoute />
                      </div>
                    </div>

                    <div className="col-span-1 bg-white border border-gray-300 h-80">
                      <div className="mt-3">
                        <Image
                          className="object-cover h-64 px-1 w-100 ... img-fluid imgrauter"
                          src={require("../img/GUID-1D641328-ED1D-4D29-B66F-4434AF4A4166-web.png")}
                          style={{ height: "346px" }}
                          alt="Image"
                        />
                         {/* <img
                          className="object-cover h-64 px-1 w-100 ... img-fluid imgrauter"
                          src={require("./img/GUID-1D641328-ED1D-4D29-B66F-4434AF4A4166-web.png")}
                          style={{ height: "346px" }}
                          alt="Image"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Last Route (of all vehicles) end --> */}
                {/* <!-- /.col-md-6 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
