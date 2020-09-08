const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, content } = action.payload;

            return [
                ...state,
                {
                    id,
                    content,
                    completed: false,
                },
            ];
        default:
            return state;
    }
};

export default todos;
