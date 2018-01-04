// Actions
export const FETCH_CUSTOMERS_REQUEST = "FETCH_CUSTOMERS_REQUEST";
export const FETCH_CUSTOMERS_SUCCESS = "FETCH_CUSTOMERS_SUCCESS";
export const FETCH_CUSTOMERS_FAILURE = "FETCH_CUSTOMERS_FAILURE";

// Reducer
const initialState = {
    loading: false,
    items: []
};

export default function customers(state = initialState, action = {}) {
    switch(action.type) {
        case FETCH_CUSTOMERS_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case FETCH_CUSTOMERS_SUCCESS:
            return Object.assign({}, state, {
                items: action.json,
                loading: false
            });
    }
    return state;
}

// Action creators
export function fetchCustomers() {
    return dispatch => {
        dispatch(fetchCustomersRequest());

        return fetch("/api/customers")
            .then(response => response.json())
                .then(json => dispatch(fetchCustomersSuccess(json)));
    };
}

function fetchCustomersRequest() {
    return {
        type: FETCH_CUSTOMERS_REQUEST
    };
}

function fetchCustomersSuccess(json) {
    return {
        type: FETCH_CUSTOMERS_SUCCESS,
        json
    };
}