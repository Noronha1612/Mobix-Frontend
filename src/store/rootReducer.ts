import {combineReducers} from 'redux';

import checklistReducer from './checklist';

const rootReducer = combineReducers({
    checklist: checklistReducer
});

export default rootReducer;
