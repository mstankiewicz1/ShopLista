import React from 'react';
import Thing from './Thing.jsx';

const ThingList = (props) => {


    const active = props.things.filter(thing => thing.active);
    const done = props.things.filter(thing => !thing.active);

    const thingsActive = active.map(thing =>
        <Thing
            key={thing.id}
            thing={thing}
            delete={props.delete}
            change={props.change}
        />
    );

    const thingsDone = done.map(thing =>
        <Thing
            key={thing.id}
            thing={thing}
            delete={props.delete}
            change={props.change}
        />
    );

    return (
        <div className="thingList">
            <div className="active">
                <h2>Rzeczy do kupienia <em>({active.length})</em></h2>
                {thingsActive.length > 0  ? thingsActive : <p>Brak rzeczy do kupienia</p>}
            </div>


            <div className="done">
                <h2>Rzeczy kupione <em>({done.length})</em></h2>
                {thingsDone}
            </div>
        </div>
    )
};

export default ThingList;