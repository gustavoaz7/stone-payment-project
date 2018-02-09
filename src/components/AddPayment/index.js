import React, { Component }from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addPayment, returnToBill } from '../../Actions'

class AddPayment extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReturn = this.handleReturn.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const method = document.getElementById('paymentMethod').value
    const value = Math.round(document.getElementById('paymentValue').value * 100) / 100
    const payment = { method, value }
    this.props.addPayment(payment)
  }

  handleReturn(e) {
    e.preventDefault()
    this.props.returnToBill()
  }

  render() {
    if (this.props.currentStep !== 3) return null;

    return (
      <div className="wrapper">
        <form>
          <div className='form-section'>
            <label>Select payment method</label>
            <select id="paymentMethod" className='form-box'>
              <option value="Cash">Cash</option>
              <option value="Credit">Credit</option>
              <option value="Debt">Debt</option>
            </select>
          </div>
          <div className='form-section'>
            <label>Value</label>
            <input className='form-box' id="paymentValue" type="number" required min="0" step="0.01" placeholder="0.00" />
            <div className='bill-options'>
              <input className='btn warning' type="submit" value="Return" onClick={this.handleReturn} />
              <input className='btn' type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
          </div>
          </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addPayment, returnToBill }, dispatch)

export default connect(null, mapDispatchToProps)(AddPayment)