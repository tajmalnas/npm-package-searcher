import { ActionType } from '../action-types/index';

interface SearchRepoAction{
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepoSuccessAction{
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepoErrorAction{
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type RepoAction = SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction;
