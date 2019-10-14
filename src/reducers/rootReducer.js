import {combineReducers} from 'redux';
import candidateCardReducer from './candidateCardReducer';
import positionCardReducer from './positionCardReducer';
import authReducer from './authReducer';

//IMPORT REDUCERS HERE



const rootReducer = combineReducers({
    candidateData: candidateCardReducer,
    positionId: positionCardReducer,
    auth: authReducer
})

export default rootReducer