export default(state =
{
  greeting: 'hello',
  color: 'green',
  photos: []
}, payload) => {
    switch (payload.type) {
        case 'CHANGE_GREETING':
            return { ...state, greeting: payload.data };
        case 'CHANGE_COLOR':
            return { ...state, color: payload.data };
        case 'BEGIN_FETCHING':
            return { ...state, [payload.target]: payload.data };
        case 'UPDATE_PHOTOS':
            return { ...state, photos: payload.data };
        default:
            return state;
    }
};
