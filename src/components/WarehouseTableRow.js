import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default class WarehouseTableRow extends Component {
    render() {
        return (
            <tr key={this.props.obj._id}>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.zone}</td>
                <td>{this.props.obj.shelf.name}</td>
                <td>{this.props.obj._id}</td>
                <td>
                    {/* <Link className="edit-link" to={"/" + this.props.obj._id}>
                        Edit
                    </Link> */}
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}