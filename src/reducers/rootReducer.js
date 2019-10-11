import {combineReducers} from 'redux';
import candidateCardReducer from './candidateCardReducer';
import positionCardReducer from './positionCardReducer';

//IMPORT REDUCERS HERE



const rootReducer = combineReducers({
    candidateData: candidateCardReducer,
    positionId: positionCardReducer
})

export default rootReducer