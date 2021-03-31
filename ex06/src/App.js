// src/App.js
import Raect, { Component } from 'react';
import Form from './Form';
import Table from './Table'


class App extends Component {
    state = {
        characters: [], 
    }
}



render() {

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character]})
    }
    return (
        <div className="container">
        <Form handleSubmit={this.handleSubmit} />
        </div>
    );
}




export default App;



        // this.setState({
        //     characters: characters.filter((character, i) => {
        //         return i !== index;
        //     }),
        // })
    

    // state = {
    //     characters: [

    //         {
    //             firstName: 'Lary',
    //             lastName: 'Page',
    //         },
    //         {
    //             firstName: 'Ada',
    //             lastName: 'Lovelace',
    //         },
    //         {
    //             firstName: 'Alan',
    //             lastName: 'Turing',
    //         },
    //     ],
    // }



