const initialState = {
    allIds: [],
    byIds: {},
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, content } = action.payload;

            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false,
                    },
                },
            };
        case "TOGGLE_TODO": {
            // console.log(state);
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed,
                    },
                },
            };
        }
        case "DELETE_TODO": {
            // console.log(state);
            const { id } = action.payload;
            delete state.byIds[id];
            return {
                ...state,
                allIds: [
                    ...state.allIds.filter((allId) => allId !== id),
                ],
                byIds: {
                    ...state.byIds,
                },
            };
        }
        default:
            return state;
    }
};

export default todos;
