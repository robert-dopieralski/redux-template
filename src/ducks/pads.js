import { getPadsPromise } from "../services/pads";

const FETCH_PADS_REQUEST = "FETCH_PADS_REQUST";
const FETCH_PADS_SUCCESS = "FETCH_PADS_SUCCESS";
const FETCH_PADS_FAILURE = "FETCH_PADS_FAILURE";

const fetchGroupsRequest = () => ({ type: FETCH_PADS_REQUEST });
const fetchGroupsSuccess = payload => ({
  type: FETCH_PADS_SUCCESS,
  payload
});
const fetchGroupsError = error => ({
  type: FETCH_PADS_FAILURE,
  error
});

export const fetchPads = () => {
  return dispatch => {
    dispatch(fetchGroupsRequest());
    getPadsPromise()
      .then(data => dispatch(fetchGroupsSuccess(data)))
      .catch(error => dispatch(fetchGroupsError(error)));
  };
};

const initialStateValue = {
  isLoading: false,
  error: null,
  data: []
};

export default function padsReducer(state = initialStateValue, action) {
  console.warn(state, action);
  switch (action.type) {
    case FETCH_PADS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_PADS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.pads
      };
    case FETCH_PADS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
