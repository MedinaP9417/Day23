import React, {Component} from 'react';


class Form extends Component {
    initialState = {
        firstName: "",
        lastName: "",
    };
    state = this.initialState;
}

render() {
    const { firstName, lastName } = this.state;
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.submitForm)
    }
    
    handleChange = (event) => {
        const { name, value } = event.target
        this.onChange({ characters: [...this.state.characters, character] })
    }

    return (
        <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value={firstName}
                onChange={this.handleChange} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={lastName}
                onChange={this.handleChange} />
            
        </form>
    );
}


export default Form;




    

