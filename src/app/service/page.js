"use client";
import React from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Sidebar from '../components/sidebar'
import useAuth from '../utils/useauth';

export default function Page() {
  const state_data = useAuth((state) => state.user);
  const new_data = JSON.parse(state_data);
  if (new_data) {
    // console.log(new_data);
    // console.log(new_data.name);
    const role = new_data.role;
    // setName(new_data.name)
    var name= new_data.name;
    var mobile= new_data.mobile;
    var address= new_data.address;
    var user_id= new_data.user_id;
    // console.log(new_data.role); 
    if(role=="1"){
      var role_name="Admin" 
    }
    if(role=="2"){
      var role_name="B2B"
    }
    if(role=="3"){
      var role_name="Individual"
    }
  }
  return (
    <>
    <div className='wrapper'>
            <Nav/>
            <Sidebar/>
            <div className="content-wrapper">
              <div className="content-header mt-3">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0">Service</h1>
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Service</li>
                      </ol>
                    </div>
                  </div>
                  <hr/>
                </div>
              </div>
              {/* <!-- /.content-header --> */}
     
              <div className="container-fluid border-success  rounded  ">
                <div className="row   ">
                  {/* <!-- details --> */}
                  <div className="col-md-6">
                  
                  
                    <table className="table frm " aria-describedby="example2_info">
                            
                      <tbody>
                        <h2 className="Detail pl-1"> My Details</h2>


                          <tr >
                            
                              <th>Name:</th>
                              <td> {name}</td>
                              
                          </tr>
                          <tr>
          
                              <th>Phone Number:</th>
                              <td>{mobile}</td>
                            
                          </tr>
                          <tr >
                          
                            <th>Address:</th>
                            <td> {address}</td>
                          
                        </tr>
                        <tr >
                          
                          <th>Owner ID:</th>
                          <td> {user_id} </td>
                        
                      </tr>
                      <tr >
                          
                        <th>Owner Type:</th>
                        <td>{role_name}</td>
                      
                    </tr>
                    <tr >
                          
                      <th>Plan:</th>
                      <td> Basic/Premium </td>
                    
                  </tr>
                  
            
            <tr>
              <th></th>
              <td></td>
            </tr>
                          
                        
                      </tbody>
                    
                  </table>
                  </div>
                  {/* <!-- form start --> */}
                  <div className="col-md-6">
                    <div className="col-sm-12 m-auto">

                      <div className="form-group">
                        <label>Choose Vehicle</label>
                        <select className="form-control opt ">
                          <option>Valkyrie</option>
                          <option>Spitfire</option>
                          <option>Cyclone</option>
                          <option>Gremlin</option>
                          <option>Gizmo</option>
                          <option>Undertaker</option>
                          <option>Chaos</option>
                          <option>Ponyboy</option>
                        </select>
                      </div>
                    </div>
                    {/* <!-- check box start --> */}
                    <div className="col-sm-12 m-auto">
          
                      <div className="form-group">
                        <label>Select if faults occur to
                          one or more system</label>
                        <form>
                          {/* <!-- 1st check box --> */}
                          <div className="input-group  ">
                            <div className="input-group-prepend ">
                              <span className="input-group-text ">
                                <input type="checkbox"/>
                              </span>
                            </div>
                            &nbsp; &nbsp; <h5>Brakes</h5>
                          </div>
                          {/* <!-- 2nd check box --> */}
                          <div className="input-group mt-4">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <input type="checkbox"/>
                              </span>
                            </div>
                            &nbsp; &nbsp; <h5>Electronics/Battery</h5>
                          </div>
                          {/* <!-- 3rd check box --> */}
                          <div className="input-group mt-4">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <input type="checkbox"/>
                              </span>
                            </div>
                            &nbsp; &nbsp; <h5>Frame/Suspension</h5>
                          </div>
                          {/* <!-- 4th check box --> */}
                          <div className="input-group mt-4">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <input type="checkbox"/>
                              </span>
                            </div>
                            &nbsp; &nbsp; <h5>Powertrain</h5>
                          </div>
          
                        </form>
                      </div>
                    </div>
                    {/* <!-- message start --> */}
          
                    <div className="col-sm-12 m-auto">
          
                      <div className="form-group">
                        <label>Insert Comments</label>
                        <textarea className="form-control" rows="4" placeholder="Write message here..."></textarea>
          
          
                      </div>
                    </div>
                    <div className="col-sm-12 m-auto">
          
                      <div className="form-group text-right">
                        <button type="button" className="btn btn-dark sendbtn   ">Send
          
                        </button>
          
                      </div>
                    </div>

                  </div>




                </div>
              </div> <br/>


            </div>
            <Footer/>
            
    </div>
      
    </>
  )
}
