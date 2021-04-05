import { Reducer } from 'redux';

import { ChecklistData, ChecklistActions, Output } from './types';
import { ToggleModuleProps, ToggleSubmoduleProps } from './actions';

import Controller from './controller';

import INITIAL_STATE from './initialState';

const checklistController = new Controller();

const reducer: Reducer<ChecklistData> = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {

        case ChecklistActions.TOGGLE_SUBMODULE: {
            const data = actions.payload as ToggleSubmoduleProps;

            const rawOutput = checklistController.toggleSubmodule(state, data);
            return checklistController.formatOutput(rawOutput);
        }
        
        case ChecklistActions.TOGGLE_MODULE: {
            const data = actions.payload as ToggleModuleProps;

            const rawOutput = checklistController.toggleModule(state, data);
            return checklistController.formatOutput(rawOutput);
        }

        case ChecklistActions.TOGGLE_CATEGORY: {
            const data = actions.payload as string;
            
            return checklistController.toggleCategory(state, data);
        }

        case ChecklistActions.SET_OUTPUT: {
            const data = actions.payload as Output;
            
            return { ...state, output: data };
        }

        default:
            return state;
    }
}

export default reducer;