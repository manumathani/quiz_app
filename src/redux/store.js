import { configureStore, combineReducers } from '@reduxjs/toolkit';

/**Call slice reducers */
import questionReducer from './question_reducer';
import resultReducer  from './result_reducer';

const rootReducer = combineReducers({
    question: questionReducer,
    result: resultReducer

});

export default configureStore({
    reducer: rootReducer
});