import React from 'react';

const Thing = (props) => {




    const {name, quantity, } = props.thing;

    return (
        <div>
            <p>
                <strong>{name} </strong>
                <strong>{quantity}</strong>
            </p>
        </div>
    )
};

export default Thing;