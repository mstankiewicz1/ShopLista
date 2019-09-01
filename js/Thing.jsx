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
                    <table>
                        <tbody>
                            <tr>
                                <td><strong style={important ? style : null}>{name} </strong></td>
                                <td><strong style={important ? style : null}>{quantity}</strong></td>
                                <td><button className="buttonBought" onClick={() => props.change(id)}>KUPIONE</button></td>
                                <td><button className="buttonDelete" onClick={() => props.delete(id)}>USUŃ</button></td>
                            </tr>
                        </tbody>
                    </table>
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