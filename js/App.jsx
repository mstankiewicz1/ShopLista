import React from 'react';
import AddThing from './AddThing.jsx';
import ThingList from './ThingList.jsx';


class App extends React.Component {


    render() {
        return (
            <div>
                <h1>Lista zakupów 123</h1>
                <AddThing/>
                <ThingList/>
            </div>
        )
    }
}

export default App;