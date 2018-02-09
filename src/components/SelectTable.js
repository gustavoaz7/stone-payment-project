import React, { Component } from 'react'

import { getMockedData } from '../utils/getMockedData'

class SelectTable extends Component {

  renderOptions = (data) => {
    return data.map((table, i) => (
      <span key={i} className="form-list-item"
         onClick={() => this.props.selectTable(table)}>
        Table {table.n}
      </span>
    ))
  }

  render() {
    if (this.props.currentStep !== 1) return null;

    return (
      <div className="wrapper">
        <form>
          <h3>Select a table:</h3>
          <div className="form-list">
            {this.renderOptions(getMockedData())}
          </div>
        </form>
      </div>
    )
  }
}

export default SelectTable