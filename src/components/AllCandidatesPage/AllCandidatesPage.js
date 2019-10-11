import React, {Component} from 'react';
import {connect} from 'react-redux';
import CandidateCard from '../Utility/CandidateCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CandidatesPage extends Component{
    
    state = {
        candidates: []
    }

    async componentDidMount(){
        console.log('AllCandidatesPage')
        const candidatesUrl = `${window.apiHost}/candidates/candidates`
        // const candidatesUrl = `${window.apiHost}/employers/positions/${positionId}`
        const axiosResp = await axios.get(candidatesUrl)
        console.log(axiosResp.data)
        const axiosResults = axiosResp.data;
        this.setState({
            candidates: axiosResults
        },()=>{
            console.log(this.state)
        } )
    }
    
    render(){
        // console.log(this.state)
        console.log(this.state.candidates)
        const candidatesArr = this.state.candidates.map((candidate,i)=>{
            return(
                //THIS IS WHERE EACH CANDIDATE CARD IS GENERATED
                <Link key ={i} to={`/candidateProfile/${candidate.id}`}>
                    <CandidateCard candidate={candidate} key={i} />
                </Link>
            )
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