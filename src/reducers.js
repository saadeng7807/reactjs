import { combineReducers } from "redux";

const counterreducer=(state=0,action)=>
{
    switch(action.type)
    {
        case 'INCREMENT':
            return state + 1 ;
        
        case 'DECREMENT':
           return state - 1 ;

        default :
        return state;
        
    }
};

const rootReducer=combineReducers({counter:counterreducer}); // store counter state in rootReducer

export default rootReducer;