import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import WarehouseTableRow from './WarehouseTableRow';

export default class WarehouseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      warehouses: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/warehouses/')
      .then(res => {
        this.setState({
          warehouses: res.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    console.log(this.state.warehouses);
    return this.state.warehouses.map((res, i) => {
      return <WarehouseTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Zone</th>
            <th>Shelves</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}