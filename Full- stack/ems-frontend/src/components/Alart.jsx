import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listDesasaters } from "../services/Desasterservices";

const DesastersListComponents = () => {
  const [Disasters, setDasasters] = useState([]);

  useEffect(() => {
    getAllDesasaters();
  }, []);

  function getAllDesasaters() {
    listDesasaters()
      .then((response) => {
        setDasasters(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div className="container-fluid py-5">
        <h2 className="text-center mb-4 fs-2">Disaster Alarts</h2>
        <div className="row row-cols-1 g-4">
          {Disasters.map((Disaster) => (
            <div key={Disaster.id} className="col">
              <div className="card h-100 fs-5 bg-black bg-gradient text-white">
                <div className="card-body">
                
                  <h5 className="card-title fs-5" style={{ color: "red" }}>{Disaster.disasterName}</h5>
                  <p className="card-text">Date: {Disaster.date}</p>
               
                  <p className="card-text">Location: {Disaster.picture}</p>
                  <p className="card-text">Details: {Disaster.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default DesastersListComponents;
