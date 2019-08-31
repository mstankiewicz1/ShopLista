import React from 'react';

const Thing = (props) => {


    const style = {
      color: 'red',
    };


    const {name, quantity, id, active, important } = props.thing;

    if(active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{name} </strong>
                    <strong>{quantity}</strong>
                    <button onClick={() => props.change(id)}>Kupione</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {
        return (
        <div>
            <p>
                <strong>{name} </strong>
                <strong>{quantity}</strong>
            </p>
        </div>
        )
    }
};

export default Thing;