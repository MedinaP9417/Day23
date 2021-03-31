import React, {Component} from 'react';
import Table from './Table'

class Form extends Component {
    initialState = {
        firstName: "",
        lastName: "",
    };
    state = this.initialState;
}

render() {
    const { firstName, lastName } = this.state;
   
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ characters: [...this.state.characters, character] })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


    return (
        <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value={firstName}
                onChange={this.handleChange} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={lastName}
                onChange={this.handleChange} />
            <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
    );
}


export default Form;




    

