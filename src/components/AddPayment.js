import React, { Component }from 'react'

class AddPayment extends Component {
  constructor(props) {
    super(props)
    this.handlePay = this.handlePay.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handlePay(e) {
    e.preventDefault()
    const method = document.getElementById('paymentMethod').value
    const value = Math.round(document.getElementById('paymentValue').value * 100) / 100
    const payment = { method, value }
    this.props.addPayment(payment)
  }

  handleBack(e) {
    e.preventDefault()
    this.props.backToBill()
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
              <input className='btn warning' type="submit" value="Back" onClick={this.handleBack} />
              <input className='btn' type="submit" value="Pay" onClick={this.handlePay} />
            </div>
          </div>
          </form>
      </div>
    )
  }
}


export default AddPayment