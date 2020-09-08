const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(state);
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content,
                    completed: false,
                },
            ];
        default:
            return state;
    }
};

export default todos;
