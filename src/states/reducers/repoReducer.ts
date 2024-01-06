import {ActionType} from '../action-types';
import {RepoAction} from '../actions';

interface RepoState{
    loading: boolean;
    error: string | null;
    data: string[];

}

const initialState = {
    loading:false,
    error:null,
    data:[]
}

const repoReducer = (state:RepoState=initialState,action:RepoAction):RepoState => {
    switch(action.type){
        
        case ActionType.SEARCH_REPOSITORIES:
            return {
                loading:true,
                error:null,
                data:[]
            };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:  
            return {
                loading:false,
                error:null,
                data:action.payload
            };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {
                loading:false,
                error:action.payload,
                data:[]
            };
        default:
            return state;
    }
}

export default repoReducer;