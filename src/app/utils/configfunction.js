'use-client'
import {auth,firestoreDb,app}  from '../firebase/config';
import { useRouter } from 'next/navigation';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { collection,addDoc, query, where, getDocs, QuerySnapshot, limit, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
export const userRegister= async (data)=>{
        const response_array = [];
        createUserWithEmailAndPassword(auth,data.email,data.password).then((res)=>{

             addDoc(collection(firestoreDb,'user'),{
                userId:res.user.uid,
                name:data.name,
                email: res.user.email,
                role:data.role,
                password:data.password,
                profile:"",
                mobile:data.mobile,
                address:"",
                city:"",
                country:"",
                role:data.role,
                state:"",
                zip:"",
                status:true,
                created: new Date()
            }).then((user_details)=>{
                console.log(user_details)
            })
            // return "";
            response_array['message']="Owner  Added";
            response_array['status'] = 'success';  
            return response_array;
       
      
    })
    // .catch((error)=>{
    //     const res="User Already Exists";
    //     return res;
    // })
    .catch(error => {
        switch (error.code) {
           case 'auth/email-already-in-use':
            response_array['message']=`Email address ${data.email} already in use.`;
            response_array['status'] = 'error'; 
             
            return response_array;
             break;
           case 'auth/invalid-email':
            
            response_array['message']=`Email address ${data.email} is invalid.`;
            response_array['status'] = 'error';
            return response_array;
             break;
           case 'auth/operation-not-allowed':
            response_array['message']=`Error during sign up.`;
            response_array['status'] = 'error';
            return response_array;
             break;
           case 'auth/weak-password':
            response_array['message']='Password is not strong enough. Add additional characters including special characters and numbers.';
             response_array['status'] = 'error';
            return response_array;
             break;
           default:
             console.log(error.message);
             response_array['message']=error.message;
             response_array['status'] = 'error';
            return response_array;
             break;
         }
     });
     
   
}
export const notificationAdd= async (data)=>{

    // createUserWithEmailAndPassword(auth,data.email,data.password).then((res)=>{
         addDoc(collection(firestoreDb,'notification'),{
            title:data.title,
            message:data.message,
            owner_id: data.owner,
           
            status:true,
            created: new Date()
        }).then((notification_details)=>{
            console.log(notification_details)
        })
  

 

}
export const userRegistersec= async (data)=>{

    createUserWithEmailAndPassword(auth,data.email,data.password).then((res)=>{
         addDoc(collection(firestoreDb,'user'),{
            userId:res.user.uid,
            name:data.name,
            email: res.user.email,
            role:data.role,
            password:data.password,
            profile:"",
            assign_status:"0",
            owner_id:data.owner,
            mobile:data.mobile,
            address:"",
            city:"",
            country:"",
            role:data.role,
            state:"",
            zip:"",
            status:true,
            created: new Date()
        }).then((user_details)=>{
            console.log(user_details)
        })
  
}).catch((error)=>{
    const res="User Already Exists";
    return res;
    // console.log(error.message);
})
 

}
export const userLogin= async (data)=>{
    try{
        const res= await  signInWithEmailAndPassword(auth,data.email,data.password).catch(function(error) {
            // TODO: Notify user about error
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // if (errorCode === 'auth/email-already-in-use') {
            //     console.log('Mail in use')
            //     $state.go('register.mail_in_use')
            // }
            return errorCode;
            return errorMessage;
        });
        return res;
        
    }
    catch(e){
        console.error(e);
    }
}

export const vehicleRegister= async (data)=>{

         addDoc(collection(firestoreDb,'vehicle'),{
            userId:res.user.uid,
            name:data.name,
            email: res.user.email,
            role:data.role,
            password:data.password,
            profile:"",
            mobile:data.mobile,
            address:"",
            city:"",
            country:"",
            role:data.role,
            state:"",
            zip:"",
            status:true,
            created: new Date()
        }).then((user_details)=>{
            console.log(user_details)
        })
    console.log(res);
  


}
