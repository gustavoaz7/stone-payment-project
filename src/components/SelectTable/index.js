import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { getMockedData } from '../../utils/getMockedData'
import { selectTable } from '../../Actions'

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

const mapDispatchToProps = dispatch => bindActionCreators({ selectTable }, dispatch)

export default connect(null, mapDispatchToProps)(SelectTable)