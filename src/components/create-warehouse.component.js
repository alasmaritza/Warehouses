import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
export default class CreateWarehouse extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeWarehouseName = this.onChangeWarehouseName.bind(this);
    this.onChangeShelfName = this.onChangeShelfName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      name: '',
      zone: 1,
      shelf: {
        name: '',
      }
    }
  }

  onChangeWarehouseName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeShelfName(e) {
  this.setState({ shelf: {name: e.target.value} })
  }

  onSubmit(e) {
    e.preventDefault()
    const warehouseObject = {
      name: this.state.name,
      zone: this.state.zone,
      shelf: this.state.shelf,
    };
    console.log(warehouseObject);
    axios.post('http://localhost:4000/warehouses/create-warehouse', warehouseObject)
      .then(res => console.log(res.data));
    this.setState({ name: '', zone: 1})
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeWarehouseName} />
        </Form.Group>
        <Form.Group controlId="Zone">
          <Form.Label>Zone</Form.Label>
          <Form.Control
            as="select"
            value={this.state.zone}
            onChange={e => {
              this.setState({ zone: e.target.value });
              console.log("e.target.value", this.state);
            }}
          >
            {(function (rows, i, len) {
              while (++i <= len) {
                rows.push(<option value={i}>{i}</option>)
              }
              return rows;
            })([], 0, 12)}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Shelves">
          <Form.Label>Shelves</Form.Label>
          <Form.Control type="text" value={this.state.shelf.name} onChange={this.onChangeShelfName} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Warehouse
        </Button>
      </Form>
    </div>);
  }
}