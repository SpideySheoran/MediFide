import React, { useState, useEffect } from "react";
import Footer from "../FooterComponent";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
function DoctorProfile() {
  const [currentUser, setCurrentUser] = useState({ email: "" });
  const [state, setState] = useState({ time: "" });
  const [date, setDate] = useState("");
  const [currentDoctor, setCurrentDoctor] = useState({
    name: "",
    qualification: "",
    college: "",
    profilePic: "",
  });
  const [slots, setSlots] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get("/doctors/" + id).then((response) => {
      console.log(response.data.personal);
      setCurrentDoctor({
        name: response.data.personal.name,
        qualification: response.data.personal.qualification,
        college: response.data.personal.college,
        profilePic: response.data.personal.photo,
      });
    });
    console.log(currentDoctor);

    let emailid = currentUser.email;
    axios
      .get("/api/current_user")
      .then((response) => {
        setCurrentUser(response.data.user);
        console.log(response.data.user.email);
        emailid = response.data.user.email;

        axios.get("/users/patient/" + emailid).then((response) => {
          console.log(response.data);
        });
      })
      .catch(function (error) {
        console.log("ERROR LOADING DATA");
        console.log(error);
      });
  }, []);

  const handleClickBook = () => {
    axios
      .post("/doctors/appointment/" + id, {
        appointments: { date: date, slots: { slot: state.time } },
        docName: currentDoctor.name,
        email: currentUser.email,
      })
      .then((response) => console.log(response));
  };

  const handleClickAvail = () => {
    axios
      .post("/doctors/appointmentCheck/" + id, {
        appointments: { date: date, slots: { slot: state.time } },
        docName: currentDoctor.name,
        email: currentUser.email,
      })
      .then((response) => setSlots(response.data));
    let slots = document.getElementById("Slots");
    slots.removeAttribute("hidden");
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-sm-12">
            <div className="row">
              <h2>Book Your Appointment With</h2>
              <div className="col-12 col-sm-12">
                <img
                  top
                  width="30%"
                  src={currentDoctor.profilePic}
                  class="img-rounded"
                  alt="Doc1"
                />
              </div>
              <div className="col-12 col-sm-12 ">
                <h3>{currentDoctor.name}</h3>
                <h5>{currentDoctor.qualification}</h5>
                <h5></h5>
                <h5></h5>
                <h4>{currentDoctor.college}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h3>Select your desired Date</h3>

            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 mt-3">
                  <form class="form-horizontal" method="post">
                    <div class="form-group ">
                      <label
                        class="control-label col-sm-2 requiredField"
                        for="date"
                      >
                        Date
                        <span class="asteriskField">*</span>
                      </label>
                      <div class="col-12">
                        <div class="input-group col-6">
                          <div class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                          </div>
                          <input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            class="form-control"
                            id="date"
                            name="date"
                            placeholder="M/DD/YYYY"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="form-group mt-3">
              <div class="col-sm-10 col-sm-offset-2">
                <button
                  onClick={handleClickAvail}
                  class="btn btn-danger "
                  name="submit"
                  type="submit"
                >
                  Check Availiblity
                </button>
              </div>
            </div>
            <div class="mt-5" id="Slots" hidden="true">
              {slots.map((slot) => (
                <button
                  class="btn btn-primary "
                  style={{ margin: "2.5px" }}
                  onClick={() => setState({ time: slot })}
                >
                  {slot}
                </button>
              ))}
              <div class="form-group mt-3">
                <div class="col-sm-10 col-sm-offset-2">
                  <a href="/">
                    <button
                      onClick={handleClickBook}
                      class="btn btn-danger "
                      name="submit"
                      type="submit"
                    >
                      Book
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default DoctorProfile;
