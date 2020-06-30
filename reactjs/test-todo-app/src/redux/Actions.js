
export const addTodo = description => ({
    type: 'ADD_TODO',
    description
})

export const addRandomTodo = () => (dispatch, getState) => {  
    fetch('http://www.randomtext.me/api/gibberish/p-1/1-10',)
        .then((response) => response.json())
        .then((json) => { 
            let ramdomtext = json.text_out.replace( /(<([^>]+)>)/ig, '');
            dispatch( addTodo(ramdomtext) );
        })
};


export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const selectTodo = id => ({
    type: 'SELECT_TODO',
    id
})

export const checkTodo = id => ({
    type: 'CHECK_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_COMPLETED',
    SHOW_INPROGRESS: 'SHOW_INPROGRESS'
}