import React from 'react';
import Thing from './Thing.jsx';

const ThingList = (props) => {



    const things = props.things.map(thing =>
        <Thing
            key={thing.id}
            thing={thing}
        />
    );

    return (
        <div>
            <div className="active">
                <h1>Rzeczy do kupienia</h1>
                {things}
            </div>


            <hr/>

            <div className="done">
                <h1>Rzeczy kupione (0)</h1>

            </div>
        </div>

    )
};

export default ThingList;