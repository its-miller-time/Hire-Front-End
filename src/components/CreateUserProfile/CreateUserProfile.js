import React, {Component} from 'react';
import {connect} from 'react-redux';
import createProfileAction from '../../actions/createProfileAction'
import { bindActionCreators } from 'redux';
import M from 'materialize-css';
import './CreateUserProfile.css'



class CreateProfile extends Component{

    state = {
        name: "",
        nameLast: "",
        email: "",
        phone: "",
        password: "",
        years_of_experience: "",
        location:"",
        education:"",
        skills: [],
        title: ""
    }
    
    handleFirstNameChange = (e) => {
        this.setState({nameFirst:e.target.value})
    }

    handleLastNameChange = (e) => {
        this.setState({nameLast:e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email:e.target.value})
    }

    handlePhoneChange = (e) => {
        this.setState({phone:e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password:e.target.value})
    }

    handleExperienceChange = (e) => {
        this.setState({years_of_experience: e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const userData = {...this.state}
        this.props.createProfileAction(userData)
    }
    
    componentDidMount(){
        M.AutoInit();
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.chips');
            // eslint-disable-next-line no-unused-vars
            const instances = M.Chips.init(
                elems, {
                    onChipAdd: handleChip,
                    onChipDelete: handleChip
                }
                );
          });

        const handleChip = (e) =>{
            // console.log((e[0].M_Chips.chipsData))
            let chipData = (e[0].M_Chips.chipsData).map((chip)=>{
                return (chip.tag.toLowerCase())
            })
            this.setState({skills:chipData})
          }
    }
    
    render(){
        return(
            <div className="container create-user-profile">
                <h4>Create Profile</h4>
                <div className="row">
                    <form action="submit" className="col s12">

                    <div className="row">
                        <div className="input-field col s12">
                            <input value={this.state.name} onChange={this.handleFirstNameChange} placeholder="Name" id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name"></label>
                        </div>
                        {/* <div className="input-field col s6">
                            <input value={this.state.nameLast} onChange={this.handleLastNameChange} placeholder="Last Name" id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name"></label>
                        </div> */}
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" id="disabled" type="email" className="validate"/>
                        <label htmlFor="email"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={this.state.phone} onChange={this.handlePhoneChange} placeholder="Phone Number" id="phone" type="number" className="validate"/>
                        <label htmlFor="phone_number"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="password" id="pass" type="password" className="validate"/>
                        <label htmlFor="pass"></label>
                        </div>
                    </div>

                        <div className="file-field input-field ">
                            <div className="button waves-effect waves-light btn-large">
                                <span>File</span>
                                <input type="file" multiple />
                            </div>

                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                            </div>
                        </div>
                    
                    <div className='input-field col s12'>
                        <select id='yearsExperience' value={this.state.years_of_experience} onChange={this.handleExperienceChange} ref="select">
                            <option value="">Years of Experience?</option>
                            <option value="1">0-1</option>
                            <option value="2">2-3</option>
                            <option value="3">3-5</option>
                            <option value="4">5-10</option>
                            <option value="5">10+</option>
                        </select>
                    </div>
                    <div className='input-field col s12'>
                        <select id='positionTitle' value={this.state.title} onChange={this.handlePositionChange} ref="select">
                            <option value="">What job are you looking for?</option>
                            <option value="Software Developer">Software Developer</option>
                            <option value="Mobile Application Developer">Mobile Application Developer</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Project Manager">Project Manager</option>
                            <option value="Business Development Rep">Business Development Rep</option>
                        </select>
                    </div>
                    <div className='input-field col s12' >
                        <div id="user-skills" className="chips chips-autocomplete"></div>
                    </div>
                    <div className="input-field row">
                        <input onClick={this.handleFormSubmit}className="button waves-effect btn-large " type="submit" value="submit" />
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        createProfileAction: createProfileAction
    },dispatch)
}

// export default CreateProfile;
export default connect(null,mapDispatchToProps)(CreateProfile)