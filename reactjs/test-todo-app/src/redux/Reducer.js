const initialState =  {
    todoList: [
        {
            id: 1,
            description: 'Ceci est mon premier todo',
            date: new Date(),
            status: 'done',
            checked: false,
        },
    ],
    filter: null,
    selected: -1,
};

const todos = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.todoList.length + 1,
                        description: action.description,
                        status: 'inprogress', // done, inprogress, ...
                        checked: false,
                        date: new Date(),
                    }
                ]
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.id),
            }

        case 'SELECT_TODO':
            return {
                ...state,
                selected: action.id
            }

        // case 'TOGGLE_TODO':
        //     return state.map(todo =>
        //         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        //     )
        
        default:
            return state
    }
}

export default todos;