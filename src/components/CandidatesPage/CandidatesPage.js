import React, {Component} from 'react';
import {connect} from 'react-redux';
import CandidateCard from '../Utility/CandidateCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import csv from 'csvtojson'

class CandidatesPage extends Component{
    
    state = {
        candidates: []
    }

    async componentDidMount(){
        const positionId = this.props.match.params.positionId; 
        console.log('candidates page',positionId)
        // const candidatesUrl = `${window.apiHost}/employers/position-candidates`
        const candidatesUrl = `${window.apiHost}/employers/positions/${positionId}`
        const axiosResp = await axios.get(candidatesUrl)
        const axiosResults = axiosResp.data.msg;
        this.setState({
            candidates: JSON.parse(axiosResults)
        })
        // let arr = []
        // csv({
        //     noheader: false
        // })
        // .fromString(axiosResults)
        // .subscribe((jsonObj)=>{
        //     console.log(jsonObj)
        //     const keys = Object.keys(jsonObj)
        //     console.log(keys)
        //     const matchingSkills = keys.filter((key)=>{
        //         //make this better! Need to filter based on key value
        //         return /1/.test(jsonObj[key])
        //     })
            //NEED TO ADD POSITIONS_ID DYNAMICALLY 
            // if(jsonObj.accepted > 0){
                // arr.push({
                //     nameFirst:jsonObj.name,
                //     id: jsonObj.id,
                //     position_id: jsonObj.position_id,
                //     prediction: jsonObj.predictions,
                //     skills: matchingSkills,
                //     description: jsonObj.description,
                //     desired_location_city: jsonObj.location,
                //     desired_job_role: jsonObj.title
                // })
            // }
        // })
        // .on('done',()=>{
        //     this.setState({
        //         candidates: arr
        //     })
        // })        
    }
    
    render(){
        // console.log(this.state.candidates[0])
        const candidatesArr = this.state.candidates.map((candidate,i)=>{
            if(candidate.accepted != 0){
                return(
                    //THIS IS WHERE EACH CANDIDATE CARD IS GENERATED
                    <Link key ={i} to={`/candidateProfile/${candidate.position_id}/${candidate.id}`}>
                        <CandidateCard candidate={candidate}  key={i} />
                    </Link>
                )
            }
        })
        
        return(
            <div className="main">
                <div className="">
                {/* <h1>Candidates Page</h1> */}
                {/* <CreateProfile /> */}
                {candidatesArr}
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        candidateData: state.candidateData
    }
}


// export default CandidatesPage
export default connect(mapStateToProps,null)(CandidatesPage)