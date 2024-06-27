"use client";
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { useRouter } from 'next/router';
import React from 'react'

function page  ( 
  // {searchParams}: {
  // searchParams:{
  //     name:string;
  //     age:string;
  //   };
  // }
  ){
    // console.log(searchParams.name);
  return (
    <>

      <h1>Hello 
        {/* {searchParams.name}  {searchParams.age} */}
         </h1>
    </>
  );
};

export default page
