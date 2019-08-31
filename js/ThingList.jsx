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
        <div>
            <div className="active">
                <h1>Rzeczy do kupienia <em>({active.length})</em></h1>
                {thingsActive.length > 0  ? thingsActive : <p>Brak rzeczy do kupienia</p>}
            </div>

            <hr/>

            <div className="done">
                <h1>Rzeczy kupione <em>({done.length})</em></h1>
                {thingsDone}
            </div>
        </div>
    )
};

export default ThingList;