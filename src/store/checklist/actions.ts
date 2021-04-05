import { action } from 'typesafe-actions';
import { ChecklistActions, Output } from './types';

export interface ToggleModuleProps {
    moduleTitle: string;
    categoryTitle: string;
}

export interface ToggleSubmoduleProps extends ToggleModuleProps {
    submoduleTitle: string;
}

export const toggle_category = (categoryTitle: string) => action(ChecklistActions.TOGGLE_CATEGORY, categoryTitle);
export const toggle_module = (data: ToggleModuleProps) => action(ChecklistActions.TOGGLE_MODULE, data);
export const toggle_submodule = (data: ToggleSubmoduleProps) => action(ChecklistActions.TOGGLE_SUBMODULE, data);
export const set_output = (data: Output) => action(ChecklistActions.SET_OUTPUT, data); 