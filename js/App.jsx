import React from 'react';
import AddThing from './AddThing.jsx';
import ThingList from './ThingList.jsx';


class App extends React.Component {

    counter = 0;

    state = {
      things: []
            };


    deleteThing = (id) => {
        const things = [...this.state.things];
        const index = things.findIndex(thing => thing.id === id);
        things.splice(index,1);

        this.setState({
            things
        })
    };

    changeThingStatus = (id) => {
        const things = [...this.state.things];
        things.forEach(thing => {
            if(thing.id === id){
                thing.active = false;
            }
        });
        this.setState({
            things
        })
    };

    addThing = (name, quantity, important) => {
      const thing = {
            id: this.counter,
            name,
            quantity,
            important,
            active: true,
      };
      this.counter++;

      this.setState(prevState =>({
        things: [...prevState.things, thing]
        })
      );

      return true
    };


    render() {
        return (
            <div>
                <h1>Lista zakupów</h1>
                <AddThing add={this.addThing}/>
                <ThingList things={this.state.things} delete={this.deleteThing} change={this.changeThingStatus}/>
            </div>
        )
    }
}

export default App;