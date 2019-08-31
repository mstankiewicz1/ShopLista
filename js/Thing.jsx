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
                    <button className="buttonBought" onClick={() => props.change(id)}>KUPIONE</button>
                    <button className="buttonDelete" onClick={() => props.delete(id)}>USUŃ</button>
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