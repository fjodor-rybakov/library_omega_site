const initialState = '';

export default function(state = initialState, action) {
	if (action.type === 'SEND_DATA_BOOK') {
		return action.payload;
	}
	return state;
};