let nextTodoId = 0;

export const addTodo = (content) => ({
    type: "ADD_TODO",
    payload: {
        id: ++nextTodoId,
        content,
    },
});
