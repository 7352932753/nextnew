'use client'
import React, {  useState } from "react";

// import Image from "next/image";
import "../../../../public/auth/css/loginstyle.css";
import "../../../../public/auth/css/login.css";
import { app, auth, firestoreDb } from "../../firebase/config";
import { FaUser, FaLock } from "react-icons/fa";
import useAuth from "@/app/utils/useauth";
import { userLogin } from "@/app/utils/configfunction";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default function Page() {
  const notify = () => toast('Here is your toast.');
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const SignInWithGoogle = async ()=>{
    const auth =getAuth(app);
    const provider = new GoogleAuthProvider();
    try{
      const res=await signInWithPopup(auth,provider);
      // window.open("/", "_self");
      console.log(res);
    }
    catch (error){
      console.error
    }
  };

  // if (localStorage.getItem('user') != null) {
  // const get_user_data = localStorage.getItem('user');
  // console.log(get_user_data);
  // const user_data=JSON.parse(get_user_data);
  // // var email= get_user_data{email};
  // console.log(user_data["email"] );
  // }
  const setUser = useAuth((state) => state.setUser);
 
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if(email!="" && password !=""){
      
      const detail = { email: email, password: password };
      var res = await userLogin(detail);
      console.log(res)
      // console.log(res.FirebaseError);
      // console.log(FirebaseError);
      if(res=="auth/invalid-credential")
      {
        toast.error("Wrong Login Details",{
          position: "top-right",
          style: {
            background: "red",
            color: "#fff",
          },
          }
          );

      }

      const q = query(
        collection(firestoreDb, "user"),
        where("userId", "==", res.user.uid)
      );

      let getdataArr = [];

      setLoading(true);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        getdataArr.push({ ...doc.data(), id: doc.id });
      });
      //   console.log(getdataArr);
      console.log(getdataArr);
      // console.log("Hello");
      //   console.log(getdataArr[0].role);
      //   setRole(getdataArr[0].role)
      //   console.log(role)
      setLoading(false);

      if (localStorage.getItem("user") == null) {
        var getData = {
          email: res.user.email,
          user_id: res.user.uid,
          role: getdataArr[0].role,
          name: getdataArr[0].name,
          image: getdataArr[0].profile,
          state: getdataArr[0].state,
          city: getdataArr[0].city,
          zip: getdataArr[0].zip,
          mobile: getdataArr[0].mobile,
          address: getdataArr[0].address,
          id: getdataArr[0].id,
          login: true,
        };
        localStorage.setItem("user", JSON.stringify(getData));

        setUser(JSON.stringify(getData));
        //  const setUser = useAuth(state=>state.setUser);
        //  const state_data=setUser( JSON.stringify(getData));

        // console.log(state_data);
      }

      window.open("/dashboard.html", "_self");
    }
    else{
      toast.error("Please Fill All Input Fields",{
        position: "top-right",
        style: {
          background: "red",
          color: "#fff",
        },
        }
        );
    }
    } 
    catch (e) {
      console.log(e);
          
      toast.error(errorMessage,{
        position: "top-right",
        style: {
          background: "red",
          color: "#fff",
        },
        }
        );
    }
  };

  return (
    <div className="container">
   
      {loading ?  <div className="loading"></div>  : <span></span>}
      <Toaster/>
      <div className="forms-container">
        <div className="signin-signup">
          <div className="sign-in-form">
          <form onSubmit={handleSignUp} >
            <h2 className="title">Login</h2>
            
            <div className="input-field">
              <i>
                <FaUser />
                {/* <notify/> */}
              </i>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i>
                <FaLock />
              </i>
              <input
                type="password"
                placeholder="Password"
                
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // onKeyDown={(e) => this._handleKeyDown}
                
              />
            </div>

            {/* <div className="forgotp" >
                  <a href="./forgot.html"> <span>Forgot passwword</span></a>
                  </div> */}
            {/*  */}

            <button
              // onClick={() => handleSignUp()}
              type="submit"
              value="Login"
              className="btn solid"
            > 
              Login
              
            </button>
            {/* <GoogleButton onClick={SignInWithGoogle} /> */}
            </form>
          </div>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          {/* <Image
            src={require("../../../../public/img/Scooter.png")}
            className="image"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt=""
          /> */}
          <img src="../img/Scooter.png"   className="image" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}
