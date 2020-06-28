import React from 'react';

function TodoDescription(props) {

    function getRandomCatPic() {
        let int = Math.floor(Math.random() * Math.floor(1000));
        return 'https://picsum.photos/' + int;
    }

    return (
        <div className="TodoDescription">
            <span className='span_key'>description: {props.description}</span>
            <span className='span_key'>status: {props.status}</span>
            <img src={getRandomCatPic()} alt='' className='randomCatPic'></img>
        </div>
    );
}

export default TodoDescription;
