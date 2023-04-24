import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default class WarehouseTableRow extends Component {
    render() {
        return (
            <tr key={this.props.obj._id}>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.zone}</td>
                <td>{JSON.stringify(this.props.obj.shelves)}</td>
                <td>{this.props.obj._id}</td>
            </tr>
        );
    }
}