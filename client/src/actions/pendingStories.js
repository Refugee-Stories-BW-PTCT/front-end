import { api } from "../utils/api";
export const GET_STORIES_PENDING_DATA_START = "GET_STORIES_DATA_START";
export const GET_STORIES_PENDING_DATA_SUCCESS = "GET_STORIES_DATA_SUCCESS";
export const GET_STORIES_PENDING_DATA_FAILURE = "GET_STORIES_DATA_FAILURE";

export function fetchStoriesPendingData() {
  return dispatch => {
    dispatch({ type: GET_STORIES_PENDING_DATA_START });
    api()
      .get("/stories")
      .then(res => {
        dispatch({
          type: GET_STORIES_PENDING_DATA_SUCCESS,
          payload: res.data.filter(item => item.pending === 1)
        });
      })
      .catch(err => {
        dispatch({
          type: GET_STORIES_PENDING_DATA_FAILURE,
          payload: err.response
        });
      });
  };
}
