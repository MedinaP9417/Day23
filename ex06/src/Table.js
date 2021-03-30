// srcTable.js

// srcTable.js

import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
        </thead>
    )

}
// src/Table.js
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;

}
// Add TableBody arrow function here

const Table = (props) => {

        const {characterData, removeCharacter} = props; // Add this line
        
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} /> 
                </table>
        )
    }


export default Table;