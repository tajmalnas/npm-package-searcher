interface RepoState{
    loading: boolean;
    error: string | null;
    data: string[];

}

interface SearchRepoAction{
    type: 'search_repositories';
}

interface SearchRepoSuccessAction{
    type: 'search_repositories_success';
    payload: string[];
}

interface SearchRepoErrorAction{
    type: 'search_repositories_error';
    payload: string;
}

type RepoAction = SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction;

enum ActionType{
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

const reducer = (state:RepoState,action:RepoAction):RepoState => {
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

export default reducer;