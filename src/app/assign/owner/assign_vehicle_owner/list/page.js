"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../../../components/nav";
import Sidebar from "../../../../components/sidebar";
import Footer from "../../../../components/footer";
import toast, { Toaster } from "react-hot-toast";
import { Button, Image, Modal } from "react-bootstrap";
import { FaEdit, FaEye, FaLeaf } from "react-icons/fa";
import { addDoc,collection,getDoc,onSnapshot, query, where, } from "firebase/firestore";
import { firestoreDb, storage } from "../../../../firebase/config";
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
  const [itemsn, setItemsn] = useState([]);
  const [recordsn, setRecordsn] = useState([]);
  const [show, setShow] = useState(false);
    useEffect(() => {

        const ISSERVER = typeof window === "undefined";
      
        if (!ISSERVER) {
          const userSession = localStorage.getItem("user");
          const user_data = JSON.parse(userSession);
        //   setRole(user_data.role)
          if(user_data.role==1){
            setLoading(true);
       const q =  query(collection(firestoreDb, "user"), where("role", "<", "4"),where("role", ">", "1"));
       
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let itemsArr = [];
          
                querySnapshot.forEach((doc) => {
                  itemsArr.push({ ...doc.data(), id: doc.id });
                  console.log(doc.id, " => ", doc.data());
                });
                setItems(itemsArr);
            setRecords(itemsArr);
            console.log(records);
            setLoading(false)
            return () => unsubscribe();
          });
        //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
        //     let itemsArr = [];
      
        //     querySnapshot.forEach((doc) => {
        //       itemsArr.push({ ...doc.data(), id: doc.id });
        //     });
            
        //     setItems(itemsArr);
        //     setRecords(itemsArr);
        //     console.log(records);
        //     setLoading(false)
        //     return () => unsubscribe();
        //   });
        }
        else{
          setLoading(true);
        const q = query(collection(firestoreDb, "user"),where("role", "<", "4"),where("role", ">", "1"));
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
      const handleClose = () => setShow(false);
      const handleShow = async (item) => {
        setLoading2(true);
        setShow(true);
        // console.log(item.id)
        const q2 = query(collection(firestoreDb, "user", item.id, "assign_vehicle"));
        
        const unsubscribe2 = onSnapshot(q2, async (querySnapshot) => {
            let itemsArrn = [];
    
            querySnapshot.forEach(async (doc) => {
              // alert(doc.id);
                const qn = query(collection(firestoreDb, "vehicle"));
                // const qn = await query(collection(firestoreDb, "vehicle"), where('id', '==', doc.id));
                // console.log(qn);
                // const arr = Object.entries(qn);
                // console.log(arr);
                const vechileidn=doc.id;
                // alert(vechileidn);
                const unsubscribe3 = onSnapshot(qn, (querySnapshotn) => {
                    let tempArr = [];
    
                    querySnapshotn.forEach((doc2) => {
                      if(doc2.id == vechileidn){
                        tempArr.push(doc2.data());
                        console.log(doc2.data());
                      }
                    });
                    // console.log(tempArr);
                    itemsArrn.push(...tempArr); // Add the tempArr to itemsArrn
                    setItemsn(itemsArrn);
                    setRecordsn(itemsArrn);
                    console.log(itemsArrn);
                });
                console.log(itemsArrn);
                return () => unsubscribe3();
            });
    
            setLoading2(false);
        });
    
        return () => unsubscribe2();
      };
    
      // const handleShow = async (item) => {
      //   // console.log(item.id);
      //   // alert(item.id);
      //   setLoading2(true)
      //    setShow(true);
      //    const q2 =  query(collection(firestoreDb, "user", item.id, "assign_vehicle"));
         
      //    const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
      //            let itemsArrn = [];
           
      //            querySnapshot.forEach((doc) => {
      //             //   itemsArrn.push({ ...doc.data(), id: doc.id });
      //             //  console.log(doc.id, " => ", doc.data());
      //             const vechileidn=doc.id;
      //           alert(doc.id);
      //           const unsubscribe3 = onSnapshot(collection(firestoreDb, "vehicle"), (querySnapshotn) => {
      //               let tempArr = [];
    
      //               querySnapshotn.forEach((doc2) => {
      //                 if(doc2.id==vechileidn){
      //                   tempArr.push(doc2.data());
      //                   // console.log(doc2.data());
      //                 }
      //               });
      //               // console.log(tempArr);
      //               itemsArrn.push(...tempArr); // Add the tempArr to itemsArrn
      //               setItemsn(itemsArrn);
      //               // setRecordsn(itemsArrn);
      //               // console.log(itemsArrn);
      //           });
      //           // console.log(itemsArrn);
      //           return () => unsubscribe3();

      //            });
      //       //      setItemsn(itemsArrn);
      //       //  setRecordsn(itemsArrn);
      //        setLoading2(false)
      //        return () => unsubscribe2();
      //      });
      //      setLoading2(false)
      //   //  item
      // //  var uid=id;
    
      // //  setName("")
        
      //       // setVehiclename(item.name)
      //       // setVehiclecolor(item.vehicle_color)
      //       // setVehicleid(item.vehicle_id);
      //       // setVehicleuqid(item.id);
      //       // setVehicleno(item.vehicle_no);
      //       // setVehiclimg(item.vehicle_image_url);
    
        
      // };

    
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
          <Modal.Title>Assign Vehicle List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {loading2?  <div className="loading"></div>  : <span></span>}
          
          <table className="table">
                        <thead>
                          <tr>
                          <th scope="col"> Vehicle Name</th>
                            <th scope="col">Vehicle Color</th>
                            <th scope="col">RF Key</th>
                          </tr>
                        </thead>
                        <tbody>
                        {itemsn.map((data, id) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.vehicle_color}</td>
                                <td>{data.vehicle_id}</td>
                                
                                
                               
                              </tr>
                            ))}
                        </tbody>
                      </table>
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

        <div className="content-header">
                      <div className="container-fluid">
                        <div className="row mb-2">
                          <div className="col-sm-9">
                            <h1 className="m-0"> Assign Vehicle To Owner List <Link
                                href="/assign/owner/assign_vehicle_owner.html"
                               className="btn btn-success ml-3 mt-3" 
                              >
                              Assign Vehicle To Owner
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
                      <table className="table">
                        <thead>
                          <tr>
                          <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Assign Vehicle</th>
                          </tr>
                        </thead>
                        <tbody>
                        {records.map((item, id) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                
                                <td><Button className="btn btn-dark ml-3 text-light" variant="primary" onClick={() => handleShow(item)} >
                                      <FaEye />
                                  </Button>
                                  </td>
                               
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
