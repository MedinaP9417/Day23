import React, { Component } from 'react';

class Plant extends React.Component {
    constructor(props) {

super(props);
this.state = {
    type: "Flowering plant"
};
    }
    render() {
        return (
            <divv>
                <h2>This is a Plant Component!</h2>
            </divv>
        );
    }
}

export default Plant;