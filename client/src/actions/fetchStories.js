import {api} from '../utils/api'

export const GET_STORIES_DATA_START = 'GET_STORIES_DATA_START'
export const GET_STORIES_DATA_SUCCESS = 'GET_STORIES_DATA_SUCCESS'
export const GET_STORIES_DATA_FAILURE = 'GET_STORIES_DATA_FAILURE'

export function fetchStoriesData() {
    return dispatch => {
        dispatch({ type: GET_STORIES_DATA_START })
        api()
        .get('/stories')
        .then(res => {console.log("RES STORIES", res)
            dispatch({ type:GET_STORIES_DATA_SUCCESS, payload: res.data.filter(item => item.pending === 0) })})
        .catch(err => {
            dispatch({ type: GET_STORIES_DATA_FAILURE, payload: err.response})
        })
    }
}


