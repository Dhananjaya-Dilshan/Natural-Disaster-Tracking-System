import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import { deleteDesasater, listDesasaters } from "../services/Desasterservices";

const DesastersListComponents = () => {
  const [Disasters, setDasasters] = useState([]);

  const navigater = useNavigate();
  const navigate = useNavigate(); 



  useEffect(() => {
    getAllDesasaters();
  }, []);

  function getAllDesasaters() {
    listDesasaters()
      .then((reponse) => {
        setDasasters(reponse.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewDesasater() {
    
    navigater("/add-desasater");
  }
  function updateDisaster(id) {
    navigater(`/edit-desasater/${id}`);
  }

  function removeDisaster(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDesasater(id)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            
            });
            
            getAllDesasaters(); 
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }

  return (
    <div>
      <br />
     
      <div className="container-fluid ">
        <h2 className="text-center fs-1">Disasters List</h2>
        <button className="btn btn btn-dark w-30 fs-5" onClick={addNewDesasater}>
          {" "}
          Add Desasater
        </button>
        <button className="btn btn btn-danger w-30 fs-5 btn float-end" onClick={addNewDesasater}>
          {" "}
          Log out
        </button>
        <br/><br/>
        <table className="table table-striped table-hover mt-10">
          <tbody>
          
                            <tr className="table-active fs-5 text-uppercase ">
                                <th>id</th>
                                <th>Date</th>
                                <th>Desasater Name</th>
                                <th>map location</th>
                                <th>cuntry</th>
                                <th>Info</th> 
                                <th>Action</th>
                                <th></th>
                                
                            </tr>
                        
            {Disasters.map((Disaster) => (
              <tr key={Disaster.id}  className="fs-6 text ">
  

                <td> {Disaster.id}</td>
                <td> {Disaster.date}</td>
                <td> {Disaster.disasterName}</td>
                <td> {Disaster.location}</td>
                <td> {Disaster.picture}</td>
                
                <td
                  style={{
                    maxWidth: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {Disaster.details}
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-info"
                    onClick={() => updateDisaster(Disaster.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 20 20">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .320.320l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => removeDisaster(Disaster.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 20 20">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DesastersListComponents;
