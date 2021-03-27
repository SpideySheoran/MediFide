import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

import Footer from './FooterComponent';



class Doc3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
          };
    }
    
    render() {

        return (
          <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            
                                <div className="row">
                                    <div className="col-12 col-sm-12">
                                        <img top width="50%" src="/assets/images/3.jpeg" class="img-rounded" alt="Doc1" />
                                    </div>
                                    <div className="col-12 col-sm-12 ">
                                        
                                        <h3>Dr. Harvinder Singh</h3>
                                        <h5>...(Date, Time, Day, Doctors Name from Backend)...</h5>
                                        
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3>Select your desired Date</h3>
                            
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-12 mt-5">
                                            <form class="form-horizontal" method="post">
                                            <div class="form-group ">
                                                <label class="control-label col-sm-2 requiredField" for="date">
                                                    Date
                                                <span class="asteriskField">
                                                    *
                                                </span>
                                                </label>
                                                <div class="col-12">
                                                    <div class="input-group col-6">
                                                        <div class="input-group-addon">
                                                        <i class="fa fa-calendar">
                                                        </i>
                                                        </div>
                                                        <input class="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text"/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-5" id="Slots">
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 1 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 2 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 3 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 4 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 5 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 6 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 7 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 8 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 9 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 10 })}>12-1pm</button>
                                                        <button class="btn btn-primary " onClick={() => this.setState({ count: 11 })}>12-1pm</button>
                                                        <button class="btn btn-primary " nonClick={() => this.setState({ count: 12 })}>12-1pm</button>
                                </div>

                                <div class="form-group mt-3">
                                                <div class="col-sm-10 col-sm-offset-2">
                                                    <button class="btn btn-danger " name="submit" type="submit">
                                                        Check Availiblity
                                                    </button>
                                                </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
                <Footer/>
          </React.Fragment>
        );
    }
}

export default Doc3;