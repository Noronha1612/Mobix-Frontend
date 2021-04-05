import { createStore, Store } from 'redux';
import rootReducer from './rootReducer';

import { ChecklistData } from './checklist/types';

export interface ApplicationStore {
    checklist: ChecklistData
}

const store: Store<ApplicationStore> = createStore(rootReducer);

export default store;