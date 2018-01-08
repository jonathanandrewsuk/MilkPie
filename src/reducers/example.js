export default(state =
{
  greeting: 'hello',
  color: 'green'
}, payload) => {
    switch (payload.type) {
        case 'CHANGE_GREETING':
            return { ...state, greeting: payload.data };
        case 'CHANGE_COLOR':
            return { ...state, color: payload.data };
        default:
            return state;
    }
};
