import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { getMockedData } from '../../utils/getMockedData'
import { selectTable } from '../../Actions'

class SelectTable extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const table = JSON.parse(document.getElementById('selectTable').value)
    this.props.selectTable(table) 
  }

  render() {
    if (this.props.currentStep !== 1) return null;

    const data = getMockedData()

    return (
      <div className="wrapper">
        <form>
          <div className="form-section">
            <label>Select a table:</label>
            <select id="selectTable" className='form-box'>
              {data.map((table, i) => (
                <option key={i} value={JSON.stringify(table)}>Table {table.n}</option>
              ))}
            </select>
          </div>
          <button className='btn' 
            onClick={this.handleSubmit}>
            Next
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTable }, dispatch)

export default connect(null, mapDispatchToProps)(SelectTable)