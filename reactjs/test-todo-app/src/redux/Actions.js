
export const addTodo = description => ({
    type: 'ADD_TODO',
    description
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const selectTodo = id => ({
    type: 'SELECT_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_COMPLETED',
    SHOW_INPROGRESS: 'SHOW_INPROGRESS'
}