import React, {Component} from 'react';
import {connect} from 'react-redux';
import CandidateCard from '../Utility/CandidateCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TrainingDataPage.css'

class CandidatesPage extends Component{
    
    state = {
        candidates: []
    }

    async componentDidMount(){
        console.log('TrainingDataPage')
        const candidatesUrl = `${window.apiHost}/candidates/candidates`
        // const candidatesUrl = `${window.apiHost}/employers/positions/${positionId}`
        const axiosResp = await axios.get(candidatesUrl)
        console.log(axiosResp.data)
        const axiosResults = axiosResp.data;
        this.setState({
            candidates: axiosResults
        },()=>{
            // console.log(this.state)
        } )
    }
    
    render(){
        const positionId= this.props.match.params.position_id
        const candidatesArr = this.state.candidates.map((candidate,i)=>{
            return(
                <Link key ={i} to={`/candidateProfile/${positionId}/${candidate.id}`}>
                    <CandidateCard candidate={candidate} key={i} />
                </Link> 
            )
        })
        
        return(
            <div className="trainingDataCardContainer">
                <div className="">
                {candidatesArr}
                </div>
                <Link to={`/positions/${positionId}`} className="btn submitTrainingDataButton waves-effect waves-light" onClick={this.submitPositionsForm} name="action">I'm done, lets see my candidates!
                </Link> 
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        positionId: state.positionId
    }
}


// export default CandidatesPage
export default connect(mapStateToProps,null)(CandidatesPage)