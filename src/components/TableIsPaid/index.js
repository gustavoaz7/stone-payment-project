import React, { Component }from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { startOver } from '../../Actions'

class TableIsPaid extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.startOver()
  }

  render() {
    if (this.props.currentStep !== 4) return null;

    return (
      <div className="wrapper">
        <div className='title'>
          Congratulations!
        </div>
        <div className='subtitle'>
          Your work here is done!
        </div>
        <form>
          <label className='text-centered'>Return to table selection</label>
          <input className='btn' type="submit" value="Ok" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ startOver }, dispatch)

export default connect(null, mapDispatchToProps)(TableIsPaid)