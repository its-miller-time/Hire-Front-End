import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './CandidateProfile.css';
import about from './id-card.svg'
import summaryIcon from './report.svg'
import skillIcon from './tools.svg'
import acceptDeclineCandidateAction from '../../actions/acceptDeclineCandidateAction'
import { bindActionCreators } from 'redux';


class CandidateProfile extends Component{
    state = {
        candidate: {},
        position_id: ""
    }

    handleAcceptDecline = (e) => {
        e.preventDefault();
        const userId = this.state.candidate.id;
        const position_id = this.state.position_id;
        console.log(this.props);
        const acceptDeclineValue = e.target.value
        const data = {userId,acceptDeclineValue,position_id}
        console.log('buttonwas clicked:',e)
        this.props.acceptDeclineCandidateAction(data)
    }

    async componentDidMount(){
        const userId = this.props.match.params.id;
        const position_id = this.props.match.params.position_id;
        console.log(position_id);
        const url = `${window.apiHost}/candidates/candidateProfile/${position_id}/${userId}`
        const axiosResponse = await axios.get(url)
        this.setState({
                candidate: axiosResponse.data[0],
                position_id: position_id
            })
        // const {data : [candidate]} = await axios.get(url)
        // this.setState({
        //     candidate : {
        //         ... candidate, // spill in the contents from the axios requests, aliased as "candidate" for convenience 
        //         skills : JSON.parse(candidate.skills) // overwrite the "skills" key with parsed data
        //     }
        // })
    }


    render(){
        // eslint-disable-next-line no-unused-vars
        const {id,name, nameLast,description, email, phone, title, desired_job_role,years_of_experience,desired_salary_range,desired_location_city,skills,level_of_education,candidate_summary} = this.state.candidate
        let buttons;
        if(this.state.position_id){
            buttons =  <div className="row">
                            <button onClick={this.handleAcceptDecline} value='1' className="candidate-profile-btn btn-large">Add Candidate</button>
                            <button onClick={this.handleAcceptDecline} value='0' className="candidate-profile-btn btn-large">Decline Candidate</button>
                        </div>  
        } else {
            buttons = <div>
                        <button onClick={()=>this.props.history.push('/employer/addPosition')} className="candidate-profile-btn btn-large">Create a Position</button>
                        </div>
        }

        return(
            <div className='candidate-profile-full container'>
                
                <ul className="collection">
                    <li className="candidate-info collection-item avatar">
                        <span className="title">{name} </span>
                        <p>{title} <br/>
                            {desired_location_city}
                        </p>
                    </li>
                    <li className="candidate-skills collection-item avatar">
                        <span className="title">Skills</span>
                        <br/>
                    <div className="info-container row col s12">
                        <img src={skillIcon} alt="" className="col s1 square-icon" />
                        <p>{skills}</p>
                    </div>
                    </li>
                    <li className="collection-item avatar">
                    <span className="title">Candidate Summary</span>
                    <div className="info-container row col s12">
                        <img src={summaryIcon} alt="" className="col s1 square-icon" />
                        <p>{description}</p>
                    </div>
                    </li>
                </ul>
                {buttons}              
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        candidateData: state.candidateData
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        acceptDeclineCandidateAction: acceptDeclineCandidateAction
    },dispatch)
}


// export default CandidateProfile;
export default connect(mapStateToProps,mapDispatchToProps)(CandidateProfile)