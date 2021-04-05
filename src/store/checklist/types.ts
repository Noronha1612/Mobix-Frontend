// Actions
export enum ChecklistActions {
    TOGGLE_CATEGORY = 'TOGGLE_CATEGORY',
    TOGGLE_MODULE = 'TOGGLE_MODULE',
    TOGGLE_SUBMODULE = 'TOGGLE_SUBMODULE',
    SET_OUTPUT = 'SET_OUTPUT'
}

// Util interfaces
export interface Submodule {
    title: string;
    checked: boolean;
}

export interface Module extends Submodule {
    submodules: Submodule[];
}

export interface Category extends Submodule {
    modules: Module[];
}

export interface Output {
    permissions: {
        [category: string]: {
            [module: string]: string[]
        }
    }
}

// Store data format
export interface ChecklistData {
    categories: Category[];
    output?: Output
}