import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CandidateHomePage.css'


class CandidateHomePage extends Component{
    
    render(){
        return(
            //ALL OPEN POSITIONS
                //POSITION DESC
                //APPLY
            //SEARCH BAR
            //UPDATE PROFILE
            <div className="container-fluid candidate-home-title candidate-home-page">
                <h3 className="">Candidate Home Page</h3>
                <div className="row">
                    <Link to='/candidateHome/createprofile' className="button waves-effect waves-light btn-large"><i className="material-icons right"></i>Create Profile</Link>
                </div>

            </div>
            
        )
    }
}


export default CandidateHomePage;
// export default connect(mapStateToProps)(CandidateHomePage);