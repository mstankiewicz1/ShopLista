import React from 'react';

const Thing = (props) => {




    const {name, quantity, id } = props.thing;

    return (
        <div>
            <p>
                <strong>{name} </strong>
                <strong>{quantity}</strong>
                <button onClick={() => props.change(id)}>Kupione</button>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    )
};

export default Thing;