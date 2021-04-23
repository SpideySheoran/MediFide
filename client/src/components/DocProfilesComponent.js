import React, { useState, useEffect } from "react";
import Footer from "./FooterComponent";
import axios from "axios";
import Doctor from "./DoctorsProfile/Doctor";

const DocProfiles = (props) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("/doctors").then((response) => {
      setDoctors(response.data);
      console.log(doctors);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container mt-3">
        {doctors.map((doctor, index) => (
          <Doctor doctor={doctor} key={index} />
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default DocProfiles;
