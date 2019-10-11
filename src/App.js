import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//IMPORT COMPONENTS HERE
import Main from './components/MainPage/Main';
import NavBar from './components/NavBar/NavBar';
import CandidatesPage from './components/CandidatesPage/CandidatesPage';
import CandidateHomePage from './components/CandidateHomePage';
import EmployerHomePage from './components/EmployerHomePage';
import CreateProfile from './components/CreateUserProfile';
import EmployerPositions from './components/EmployerPositions/EmployerPositions';
import AddPositionForm from './components/AddPositionForm/AddPositionForm';
import CandidateProfile from './components/CandidateProfile/CandidateProfile';
import TrainingDataPage from './components/TrainingDataPage/TrainingDataPage';
import AllCandidatesPage from './components/AllCandidatesPage/AllCandidatesPage';

import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Main} />
          <Route exact path="/employerHome" component={EmployerHomePage} />
          <Route exact path="/employerHome/positions" component={EmployerPositions} />
          <Route exact path="/employerHome/positions/:id" component={CandidatesPage}/> {/*  SORTED CANDIATE LIST FOR SELECTED POSITION*/}
          <Route exact path="/employer/addPosition" component={AddPositionForm} />
          <Route exact path="/candidates" component={AllCandidatesPage} />
          <Route exact path='/candidateProfile/:position_id/:id' component={CandidateProfile} />
          <Route exact path='/candidateProfile/:id' component={CandidateProfile} />
          <Route exact path="/candidateHome" component={CandidateHomePage} />
          <Route exact path="/positions/:positionId" component={CandidatesPage} />
          <Route exact path="/candidateHome/createprofile" component={CreateProfile} />
          <Route exact path="/positionTrainingData/:position_id" component={TrainingDataPage} />
          <Route exact path="/positionTrainingData/:position_id/:user_id" component={CandidateProfile} />

      </div>
    </Router>
  )
}

export default App;
