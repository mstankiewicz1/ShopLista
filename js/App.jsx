import React from 'react';
import AddThing from './AddThing.jsx';
import ThingList from './ThingList.jsx';


class App extends React.Component {

    state = {
      things: [
              {
                  id: 0,
                  name: 'pomidory',
                  quantity: '1kg',
                  important: true,
                  active: true
              },
              {
                  id: 1,
                  name: 'ogórki',
                  quantity: '2kg',
                  important: true,
                  active: true
              },
              {
                  id: 2,
                  name: 'cebula',
                  quantity: '3kg',
                  important: true,
                  active: true
              },
              ]
            };


    render() {
        return (
            <div>
                <h1>Lista zakupów</h1>
                <AddThing/>
                <ThingList things={this.state.things}/>
            </div>
        )
    }
}

export default App;