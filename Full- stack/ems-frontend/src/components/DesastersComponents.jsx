import React, { useEffect, useState } from "react";
import { CreateDesasater, updateDesasater } from "../services/Desasterservices";
import { useNavigate, useParams } from "react-router-dom";
import { getDesasater } from "../services/Desasterservices";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DesastersComponents = () => {
  const [disasterName, setdisasterName] = useState("");
  const [location, setlocation] = useState({ latitude: "", longitude: "" });
  const [picture, setpicture] = useState("");
  const [details, setdetails] = useState("");
  const [date, setDate] = useState(new Date());

  const [errors, setErrors] = useState({
    disasterName: "",
    location: "",
    picture: "",
    details: "",
    date: "",
  });
  const navigater = useNavigate();
  const { id } = useParams();

  let marker = null;

  useEffect(() => {
    // Load Google Maps
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA1zOG9jqY5jjy-lEZMDf6DifpXL5bAAo8&callback=initMap`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.initMap = initMap;
    document.body.appendChild(googleMapsScript);

    
    return () => {
      document.body.removeChild(googleMapsScript);
    };
  }, []);

  useEffect(() => {
    if (id) {
      getDesasater(id)
        .then((response) => {
          setdisasterName(response.data.disasterName);
          setlocation(response.data.location);
          setpicture(response.data.picture);
          setdetails(response.data.details);
          setDate(new Date(response.data.date));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateDesaster(e) {
    e.preventDefault();
    if (validateForm()) {
      const formattedDate = date.toISOString().split("T")[0];
      const Desaster = {
        disasterName,
        location,
        picture,
        details,
        date: formattedDate,
      };
      console.log(Desaster);

      if (id) {
        updateDesasater(id, Desaster)
          .then((response) => {
            Swal.fire({
              title: "Saved!",
              text: " data has been updated.",
              icon: "success",
            });
            console.log(response.data);

            navigater("/DesastersListComponents");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        CreateDesasater(Desaster)
          .then((response) => {
            console.log(response.data);
            Swal.fire({
              title: "Saved!",
              text: "New data has been saved.",
              icon: "success",
            });

            navigater("/DesastersListComponents");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };
    if (disasterName.trim()) {
      errorsCopy.disasterName = "";
    } else {
      errorsCopy.disasterName = "disasterName is required";
      valid = false;
    }

    if (picture.trim()) {
      errorsCopy.picture = "";
    } else {
      errorsCopy.picture = "location is required";
      valid = false;
    }
    if (details.trim()) {
      errorsCopy.details = "";
    } else {
      errorsCopy.details = "details is required";
      valid = false;
    }
    if (date) {
      errorsCopy.date = "";
    } else {
      errorsCopy.date = "date is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h3 className="text-center fs-2">Update Details</h3>;
    } else {
      return <h3 className="text-center">Add Details</h3>;
    }
  }

  function copyToClipboard() {
    const locationCode = `${location.latitude}, ${location.longitude}`;
    navigator.clipboard.writeText(locationCode);
    Swal.fire({
      title: "Copied!",
      text: "Location code has been copied to clipboard.",
      icon: "success",
    });
  }

  //  Google Maps API script is loaded
  function initMap() {
    
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 3,
    });

    // Event listener for map click event
    map.addListener("click", function (event) {
      handleMapClick(event.latLng);
    });

    // Function to add marker
    function handleMapClick(latLng) {
      const clickedLocation = {
        latitude: latLng.lat().toString(),
        longitude: latLng.lng().toString(),
      };
      setlocation(clickedLocation);
      
      if (marker) {
        marker.setMap(null);
      }
      
      marker = new window.google.maps.Marker({
        position: latLng,
        map: map,
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", 
        },
      });
    }
  }

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="">
            {pageTitle()}
            <div className="card-body">
              <form>
                <div className="form-group fs-5  ">
                  <label> Enter Disaster Name: </label>
                  <input
                    type="text"
                    placeholder="DisasterName"
                    name="disasterName"
                    value={disasterName}
                    className={`form-control fs-5  fs-5   ${
                      errors.disasterName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setdisasterName(e.target.value)}
                  />
                  {errors.disasterName && (
                    <div className="invalid-feedback">
                      {errors.disasterName}
                    </div>
                  )}
                </div>

                <div className="form-group fs-5  ">
                  <label> Enter location name: </label>
                  <input
                    type="text"
                    placeholder="Location name"
                    name="pictuer"
                    className={`form-control fs-5   ${
                      errors.picture ? "is-invalid" : ""
                    }`}
                    value={picture}
                    onChange={(e) => setpicture(e.target.value)}
                  />
                  {errors.picture && (
                    <div className="invalid-feedback">{errors.picture}</div>
                  )}
                </div>
                <br/>
                {/* Date Selection */}
                <div className="form-group fs-5  ">
                  <label>Select Date:</label>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    className={`form-control fs-5   ${
                      errors.date ? "is-invalid" : ""
                    }`}
                    dateFormat="dd/MM/yyyy"
                  />
                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>

                <div className="form-group fs-5  ">
                  <label> Details: </label>
                  <input
                    type="text"
                    placeholder="Details"
                    name="details"
                    value={details}
                    className={`form-control fs-5   ${
                      errors.details ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setdetails(e.target.value)}
                  />
                  {errors.details && (
                    <div className="invalid-feedback">{errors.details}</div>
                  )}
                </div>
                <div className="form-group fs-5  ">
                  <label> copy this Location code: </label>
                  <input
                    type="text"
                    placeholder="location"
                    name="location"
                    className={`form-control fs-5    ${
                      errors.location ? "is-invalid" : ""
                    }`}
                    value={`${location.latitude}, ${location.longitude}`}
                  />
                </div>

                <div className="form-group fs-5  ">
                  <label> Enter location: </label>
                  <input
                    type="text"
                    placeholder="location"
                    name="location"
                    value={location}
                    className={`form-control fs-5   ${
                      errors.location ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setlocation(e.target.value)}
                  />
                  {errors.location && (
                    <div className="invalid-feedback">{errors.location}</div>
                  )}
                </div>

                {/* Map Section */}
                <div className="form-group fs-5  ">
                  <label>Click on the map to select location:</label>
                  <div
                    id="map"
                    style={{
                      width: "100%",
                      height: "400px",
                      marginTop: "10px",
                    }}
                  ></div>
                </div>
                <br/>

                <button
                  className="btn btn btn-dark w-100 fs-5"
                  onClick={saveOrUpdateDesaster}
                >
                  {id ? "Update Disaster" : "Add Disaster"}
                </button>
                
              </form>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesastersComponents;
