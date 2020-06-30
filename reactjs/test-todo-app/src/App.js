import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Todo from './Todo.jsx';
import TodoDescription from './TodoDescription';
import { addTodo, selectTodo, addRandomTodo } from './redux/Actions.js';

function App(props) {

    const handleClose = function() {
        props.selectTodo(-1);
    }

    const handleAddTodo = function() {
        let description = 'test';
        props.addTodo(description);
    }

    const handleAddRandomTodo = function() {
        props.addRandomTodo();
    }

    return (
        <div className="App">
            
            <div className="control">
                <TextField id="description" label="description" variant="outlined" margin='dense' />
                <Button variant="contained" color="primary" classes={{ root: "button-addtodo" }} onClick={handleAddTodo} >
                    Ajouter
                </Button>
                <Button variant="contained" color="primary" classes={{ root: "button-addtodo" }} onClick={handleAddRandomTodo} >
                    Ajouter Random
                </Button>
            </div>
            
            <div className="filter"></div>
            
            <div className="result">
                { props.todoList.map( (todo, i) =>
                    <Todo key={todo.id} {...todo}/>
                )}
            </div>

            {console.log(props.selected)}
            <Dialog open={props.selected > 0} onClose={handleClose}>
                <TodoDescription {...props.todoList.find(todo => todo.id === props.selected)} />
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        selected: state.selected,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: (description) => dispatch(addTodo(description)),
    addRandomTodo: (description) => dispatch(addRandomTodo(description)),
    selectTodo: (id) => dispatch(selectTodo(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);