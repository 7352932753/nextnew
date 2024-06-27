import React from "react";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";

export default function page() {
  return (
    <div className="wrapper">
      <Nav />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-9">
                <h1 className="m-0"> Vehicles</h1>
              </div>

              <div className="col-sm-3">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Vehicles</li>
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
                <th scope="col">Vehicle ID</th>
                <th scope="col">Owner ID</th>
                <th scope="col">Release date </th>
                <th scope="col">Total Km</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">001</th>
                <td>Noons1</td>
                <td>10-12-2023</td>
                <td>1080</td>
              </tr>
              <tr>
                <th scope="row">002</th>
                <td>Noons2</td>
                <td>10-02-2024</td>
                <td>80</td>
              </tr>
              <tr>
                <th scope="row">003</th>
                <td>Noons1</td>
                <td>10-02-2024</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
