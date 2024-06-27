"use client";
import React, { use, useEffect, useState } from "react";
import Footer from "../../../../components/footer";
import Nav from "../../../../components/nav";
import Images from "next/image";
import Sidebar from "../../../../components/sidebar";
import {
  FaUsers,
  FaPhoneSquare,
  FaMotorcycle,
  FaAngleDown,
  FaEye,
} from "react-icons/fa";
import {auth, firestoreDb,storage } from "../../../../firebase/config";
import {
  collection,
  deleteDoc,
  getDocs,
  onSnapshot,
  query,
  doc,
  where,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { Accordion } from "react-bootstrap-accordion";
import toast, { Toaster } from "react-hot-toast";
import { Button, Image, Modal } from "react-bootstrap";
import { deleteUser, signInWithEmailAndPassword } from "firebase/auth";

export default function Page() {
  let open = "Open";

  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [imageurl, setimageUrl] = useState('');
  const [imageUpload, setImageUpload] = useState("");
  const [nuser_id, setNuserid] = useState("");
  const [imgurl, setImgurl] = useState("");


  const handleClose = () => setShow(false);
  const [details, setDetails] = useState([]);
  const handleShow = async (id) => {
    setShow(true);
   var uid=id;

//    setName("")
//    setEmail("")
//    setMobile("");
//    setAddress("");
//    setCity("");
//    setCountry("");
//    setState("");
//    setZip("");
//    setNuserid("");
//    setImgurl("");


    const q =  query(collection(firestoreDb, "user"),where("owner_id", "==", uid));
      const unsubscribe = await onSnapshot(q, (querySnapshot) => {
        let itemsArrnew = [];
        setDetails(itemsArrnew);
        querySnapshot.forEach((doc) => {
          itemsArrnew.push({ ...doc.data(), id: doc.id });
        });
        setRecordsn(itemsArrnew);
        setName(itemsArrnew[0].name)
        setEmail(itemsArrnew[0].email)
        setMobile(itemsArrnew[0].mobile);
        setAddress(itemsArrnew[0].address);
        setCity(itemsArrnew[0].city);
        setCountry(itemsArrnew[0].country);
        setState(itemsArrnew[0].state);
        setZip(itemsArrnew[0].zip);
        setNuserid(itemsArrnew[0].id);
        setImgurl(itemsArrnew[0].profile);
         setDetails(itemsArrnew);
        

      return () => unsubscribe();
      });
    
  };

  const handleUpdate = async () => {
    setLoading(true);
    setLoading2(true);
    setimageUrl("");

    if (imageUpload) {

    const imageRef = await ref(storage, `upload/profile/${imageUpload.name}`);
  
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        
        const taskDocRef = doc(firestoreDb, 'user',nuser_id)
          updateDoc(taskDocRef, 
            {
            name: name,
            mobile: mobile,
            address: address,
            city: city,
            country: country,
            state: state,
            zip: zip,
            profile:url
    
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
        // setimageUrl(url);

        // getdataArr_n.push({ ...url})
      });
      
    });

    
   
  
  }
  else{
  
    
    const taskDocRef =  doc(firestoreDb, 'user',nuser_id)
   
    updateDoc(taskDocRef, 
     {
     name: name,
     mobile: mobile,
     address: address,
     city: city,
     country: country,
     state: state,
     zip: zip

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


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", email: "" });
  const [role, setRole] = useState("");

  const [records, setRecords] = useState([]);
  const [recordsn, setRecordsn] = useState([]);

  

  useEffect(() => {
    
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
      const userSession = localStorage.getItem("user");
      const user_data = JSON.parse(userSession);
      setRole(user_data.role)
      if(user_data.role==1){
        setLoading(true);
      const q = query(collection(firestoreDb, "user"),where("role", "<", '4'),where("role",">",'1'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];

        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });
        setItems(itemsArr);
        setRecords(itemsArr);
        console.log(itemsArr);
        setLoading(false)
        return () => unsubscribe();
      });
    }
    if(user_data.role==2||user_data.role==3){
      setLoading(true);
      const q = query(collection(firestoreDb, "user"),where("owner_id", "==", user_data.user_id));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];

        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });
        setItems(itemsArr);
        setRecords(itemsArr);
        console.log(itemsArr);
        setLoading(false)
        return () => unsubscribe();
      });
    }
    
  }
    
  }, []);

  const editItem = async (email) => {
    const q = query(
      collection(firestoreDb, "user"),
      where({
        email: email,
        age: 27
      })
      // where("email", "==", email)
    );
    let getdataArr = [];
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    let docI = "";
    let name = "";
    querySnapshot.forEach((doc) => {
      getdataArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(getdataArr);
    console.log(getdataArr[0]["email"]);
    

 

  };


  function handleFilter(event) {
    const newData = items.filter((row) => {
      const result = row.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
      if (result == "") {
        const result1 = row.email
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
        if (result1 == "") {
          const result2 = row.mobile.includes(event.target.value);
          if (result2 == "") {
            const result3 = row.city.includes(event.target.value);
            if (result3 == "") {
              const result4 = row.zip.includes(event.target.value);
              if (result4 == "") {
                const result5 = row.state.includes(event.target.value);
                return result5;
              } else {
                return result4;
              }
            } else {
              return result3;
            }
          } else {
            return result2;
          }
        } else {
          return result1;
        }
      } else {
        return result;
      }
    });
    setRecords(newData);
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
          <Modal.Title>User Assign List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {loading2 ?  <div className="loading"></div>  : <span></span>}
        <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {recordsn.map((item, id) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                     
                      <td>{item.password}</td>
                      <td>{item.mobile}</td>
                      
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
                <div className="col-sm-8">
                  <h1 className="m-0">
                    Owners &nbsp; &nbsp;{" "}
                    <Link className="btn btn-success" href='/assign/owner/assign_user.html'>Assign User To Owner</Link>
                    
                  </h1>
                </div>
                {/* <div className="col-sm-6">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search User"
                      onChange={handleFilter}
                      className="form-control form_control_new"
                    />
                    <span className="input-group-addon">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark ml-3"
                      />
                    </span>
                  </div>
                </div> */}
                <div className="col-sm-4">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Owners</li>
                  </ol>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Assign User</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((item, id) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                     
                      <td>{item.password}</td>
                      <td>{item.mobile}</td>
                      <td>
                        
                        <Button className="btn btn-dark ml-3 text-light" variant="primary" onClick={() => handleShow(item.userId)} >
                            <FaEye />
                        </Button>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
            </div>
          </div> 
           <div className="card-group m-2 collapse " id="collapseExamplefour">
            <div className="card box">
              <div className="card-header border-0">
                <h3 className="card-title">User ID_3 - Name</h3>
                <div className="card-tools">
                  <span title="3 New Messages" className="badge badge-primary">
                    <FaUsers />
                  </span>
                </div>
              </div>
              <div className="col-span-1 bg-white border   ">
                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaUsers />{" "}
                      </span>{" "}
                      Name
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>XYZ</div>
                  </div>
                </div>
                <hr />
                <div className="row userp ">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaPhoneSquare />
                      </span>{" "}
                      Phone Number
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>8976009768</div>
                  </div>
                </div>
                <hr />

                <div className="row userp ">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaPhoneSquare />
                      </span>{" "}
                      Phone IMEI
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>IMEI 123456789</div>
                  </div>
                </div>
                <hr />

                <div className="row userp">
                  <div className="col-3">
                    <div className="userone">
                      {" "}
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        <FaMotorcycle />
                      </span>{" "}
                      Last Vehicle
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="userone">=</div>
                  </div>
                  <div className="col-6">
                    <div>ABC</div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <br />
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
}
