import React from 'react';

class AddThing extends React.Component {

    state = {
        name: '',
        quantity: '',
        checked: false
    };


    handleName = (e) => {
        this.setState({
            name: e.target.value,
        })
    };

    handleQuantity = (e) => {
        this.setState({
            quantity: e.target.value,
        })
    };

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    };

    handleClick = () => {

        const {name, quantity, checked} = this.state;

        if (name.length > 2) {
            const add = this.props.add(name, quantity, checked);
            if (add) {
                this.setState({
                    name: '',
                    quantity: '',
                    checked: false
                })
            }
        } else {
            alert("Nazwa powinna mieć przynajmniej 2 znaki");
        }
    };

    render() {
      return (
          <div className="form">
              <input type="text" placeholder="Co kupujemy ?" value={this.state.name} onChange={this.handleName}/>
              <input type="text" placeholder="Ile kupujemy ?" value={this.state.quantity} onChange={this.handleQuantity}/>
              <br/>
              <label className="importantLabel" htmlFor="important">Priorytet
              <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/>
              </label>
              <br/>
              <button className="addButton" onClick={this.handleClick}>DODAJ</button>
          </div>
        );
    }
}

export default AddThing;