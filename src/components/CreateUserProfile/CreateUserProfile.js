import React, {Component} from 'react';
import {connect} from 'react-redux';
import createProfileAction from '../../actions/createProfileAction'
import { bindActionCreators } from 'redux';
import M from 'materialize-css';
import './CreateUserProfile.css'



class CreateProfile extends Component{

    state = {
        name: "",
        email: "",
        phone: "",
        password: "",
        years_of_experience: "",
        location:"",
        education:"",
        skills: [],
        title: ""
    }
    
    handleNameChange = (e) => {
        this.setState({name:e.target.value})
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

    handlePositionChange = (e) =>{
        this.setState({title: e.target.value})
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
        return (
            <div className="add-position-form container">
                <h4>Create a Profile</h4>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={this.state.name} onChange={this.handleNameChange} placeholder=" Name" id="name" type="text" className="validate"/>
                            </div>

                        <div className="row">
                            <div className="input-field col m6 s12">
                                <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" id="disabled" type="email" className="validate"/>
                                <label htmlFor="email"></label>
                            </div>
                            <div className="input-field col m6 s12">
                                <input value={this.state.phone} onChange={this.handlePhoneChange} placeholder="Phone Number" id="phone" type="text" className="validate"/>
                            <label htmlFor="phone_number"></label>
                            </div>
                        </div>

                        <div className="row">
                            
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="password" id="pass" type="password" className="validate"/>
                            <label htmlFor="pass"></label>
                            </div>
                        </div>

                        
                            <div className='input-field col s12'>
                                <select id='positionTitle' value={this.state.title} onChange={this.handlePositionChange} ref="select">
                                    <option value="">What position are you looking for?</option>
                                    <option value="Software Developer">Software Developer</option>
                                    <option value="Mobile Application Developer">Mobile Application Developer</option>
                                    <option value="Data Scientist">Data Scientist</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="Business Development Rep">Business Development Rep</option>
                                </select>
                            </div>
                            <div className='input-field col s12'>
                                <select id='yearsExperience' value={this.state.years_of_experience} onChange={this.handleExperienceChange} ref="select">
                                    <option value="">Years of Experience?</option>
                                    <option value="0-1">0-1</option>
                                    <option value="2-3">2-3</option>
                                    <option value="3-5">3-5</option>
                                    <option value="5-10">5-10</option>
                                    <option value="10+">10+</option>
                                </select>
                            </div>
                            <div className='input-field col s12' >
                                <div id="skills" className="chips chips-autocomplete"></div>
                            </div>
                            <button className="button btn waves-effect waves-light" type="submit" onClick={this.handleFormSubmit} name="action">Submit
                            </button> 
                        </div>
                    </form>
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