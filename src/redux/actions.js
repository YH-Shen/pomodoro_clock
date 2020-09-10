import { nanoid } from "nanoid";

export const addTodo = (content) => ({
    type: "ADD_TODO",
    payload: {
        id: nanoid(),
        content,
    },
});

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    payload: {
        id,
    },
});

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: {
        id,
    },
});

export const setFilter = (filter) => ({
    type: "SET_FILTER",
    payload: { filter },
});
