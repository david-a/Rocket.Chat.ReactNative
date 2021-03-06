import * as types from '../actions/actionsTypes';

const initialState = {
	isFetching: false,
	failure: false
};

export default function messages(state = initialState, action) {
	switch (action.type) {
		case types.MESSAGES.REQUEST:
			return { ...state,
				isFetching: true
			};
		case types.MESSAGES.SUCCESS:
			return { ...state,
				isFetching: false
			};
		case types.LOGIN.FAILURE:
			return { ...state,
				isFetching: false,
				failure: true,
				errorMessage: action.err
			};
		// case types.LOGOUT:
		// 	return initialState;
		default:
			return state;
	}
}
