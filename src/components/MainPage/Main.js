import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Main.css';
import AllCandidatesPage from '../AllCandidatesPage/AllCandidatesPage'
import cal from './calendar.svg'
import money from './money.svg'
import hero from './superhero.svg'

//IMPORT ACTION CREATOR HERE

//IMPORT STATEFUL COMPONENTS HERE

class Main extends Component{
    sate = {

    }

    render(){
        return(<>
            <div className="container row hero-container">
                <div className="container hero-title col l6 m12 s12">
                    <h2 className='logo'>Hire</h2>
                    <br></br>
                    <h5>Find Better Candidates Faster</h5>
                </div>
                <div className="col s6 banner-main hide-on-med-and-down"></div>
            </div>
            
            <div >
                <div className=" home-btnscontainer center-align">
                    
                    <div className=" col s12 row menu">
                        <div className="container">
                            <div className="col m6 s12">
                                <Link to='/employerHome/positions' className="waves-effect waves-light btn-large blue-grey "><i className="material-icons right"></i>Employer</Link>
                            </div>
                            <div className="col m6 s12">
                                <Link to ='/candidateHome' className="waves-effect waves-light btn-large blue-grey "><i className="material-icons right"></i>Job Seeker</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container main-body container">
                <div className="row main-body-header">
                    {/* <h5>Header</h5> */}
                </div>
                <div className="main-body-description">
                    <div className="row desc-container">
                        <img src={`${cal}`} className="col m2 s12 "/>
                        <p>
                            SAVE TIME
                        </p>
                    </div>
                    <div className="row desc-container">
                        <img src={`${money}`} className="col m2 s12 "/>
                        <p>
                            SAVE MONEY
                        </p>
                    </div>
                    <div className="row desc-container">
                        <img src={`${hero}`} className="col m2 s12 "/>
                        <p>
                            FIND BETTER PEOPLE
                        </p>
                    </div>
                </div>
            </div>
            <div className="container main-candidates s12">
                <h4>Check out some candidates</h4>
                <AllCandidatesPage />
            </div>
            
            </>
        )
    }

}

export default Main;
// export default connect(mapStateToProps,mapDispatchToProps)(Main)