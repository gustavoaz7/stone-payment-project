import React, { Component }from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addPayment } from '../../Actions'

class AddPayment extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const method = document.getElementById('paymentMethod').value
    const value = Math.round(document.getElementById('paymentValue').value * 100) / 100
    console.log(method, value)
    const payment = { method, value }
    console.log(payment)
    this.props.addPayment(payment)
  }

  render() {
    if (this.props.currentStep !== 3) return null;

    return (
      <div className="payment">
        <h1>Add Payment</h1>
        <form>
          <label>Select payment method</label>
          <select id="paymentMethod">
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
            <option value="Debt">Debt</option>
          </select>
          <label>Value</label>
          <input id="paymentValue" type="number" required min="0" step="0.01" placeholder="0.00" />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addPayment }, dispatch)

export default connect(null, mapDispatchToProps)(AddPayment)