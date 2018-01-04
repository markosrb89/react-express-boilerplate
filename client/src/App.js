import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCustomers } from "./redux/modules/customers";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCustomers());
  }

  render() {
    const { customers } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {
            customers.items.map((customer, index) => {
              return (
                <div key={customer.id}>
                  <div>
                    {customer.name}
                  </div>
                  <div>
                    {customer.lastName}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  customers: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  customers: state.customers
});

export default connect(mapStateToProps)(App);
