import React, { Component } from 'react'

class SelectTable extends Component {

  renderOptions = (tables) => {
    const unpaidTables = Object.values(tables).filter(table => !table.isPaid )
    return unpaidTables.map(table => (
      <span key={table.n} className="form-list-item"
         onClick={() => this.props.selectTable(tables[table.n])}>
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
            {this.renderOptions(this.props.tables)}
          </div>
        </form>
      </div>
    )
  }
}

export default SelectTable