import React from 'react';

import { Button} from 'reactstrap';
import {
    BrowserRouter as Router
  } from "react-router-dom";
  import "./styles.css";
//import DocProfiles from './DocProfilesComponent';
function BAButton(props)
 {
    return(
        <Router>
            <a href="./BAApp"><Button className=" mt-5 shadow-lg p-3 mb-5 rounded-0 container font-weight-bold mt-5 " color="danger" size="lg" block >
            <h3>Book Appointment Now!</h3>
            <i class="fa fa-plus-circle fa-2x ml-3" aria-hidden="true"></i>
            </Button></a>
            
        </Router>
    )
}
export default BAButton;