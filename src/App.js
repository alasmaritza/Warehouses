import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateWarehouse from './components/create-warehouse.component'
import WarehouseList from './components/list-warehouse.component'
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-warehouse'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-warehouse'} className="nav-link">
                    Create Warehouse
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/warehouse-list'} className="nav-link">
                    Warehouse List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateWarehouse {...props} />}
                  />
                  <Route
                    exact
                    path="/create-warehouse"
                    component={(props) => <CreateWarehouse {...props} />}
                  />
                  <Route
                    exact
                    path="/warehouse-list"
                    component={(props) => <WarehouseList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}
export default App