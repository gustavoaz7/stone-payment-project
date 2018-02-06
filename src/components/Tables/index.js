import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getTableOrders } from './TableActions'

class Tables extends Component {

  render() {
    return (
      <div>
        <h1>Table</h1>
        <select name="" id="selectTable">
          <option value="" selected disabled >Select a table</option>
          {Object.keys(this.props.tables).map(i => (
            <option key={i} value={i}>Table {i}</option>
          ))}
        </select>
        <button className="btn" 
          onClick={() => this.props.getTableOrders(document.getElementById('selectTable').value)}>
          Next
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getTableOrders }, dispatch)

export default connect(null, mapDispatchToProps)(Tables)