import React from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonBase from '@material-ui/core/ButtonBase';
import { deleteTodo , selectTodo, checkTodo } from './redux/Actions.js';


function Todo(props) {

    const handleCheck = () => {
        props.checkTodo(props.id);
    }

    const handleSelect = () => {
        props.selectTodo(props.id);
    }

    const handleDelete = () => {
        props.deleteTodo(props.id);
    }

    return (
        <div className="Todo">
            <Checkbox
                color="default"
                checked={props.checked}
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />

            { props.status === 'done' && (<span className='typo-done'>Terminée</span>) }
            { props.status === 'inprogress' && (<span className='typo-inprogress'>En cours</span>) }

            <ButtonBase onClick={handleSelect}>
                <span className='span_key'>description:</span>
                <span className='span_value'>{props.description}</span>
            </ButtonBase>
            
            <div className='grow'/>

            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    selectTodo: (id) => dispatch(selectTodo(id)),
    checkTodo: (id) => dispatch(checkTodo(id)),
})

export default connect(null,mapDispatchToProps)(Todo);
