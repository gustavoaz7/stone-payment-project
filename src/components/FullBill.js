import React, { Component }from 'react'

import BillItem from '../common/BillItem'

class FullBill extends Component {

  render() {
    if (this.props.currentStep !== 2) return null;

    const { currentTable, tables,
      goToPayment, tableIsPaid, startOver
    } = this.props
    const { orders, payments } = tables[currentTable]

    const totalOrders = orders.reduce((prev, next) => prev + next.price, 0)
    const totalPaid = payments.length ? payments.reduce((prev, next) => prev + next.value, 0) : 0
    const tip = totalPaid - totalOrders

    return (
      <div className="wrapper">
        <div className='title'>
          Table {currentTable}
        </div>
        {orders.map((order, i) => (
          <BillItem key={i} item={order.item} price={order.price} />
        ))}
        <hr/>
        <div className="bill_total">
          <BillItem item='Total' price={totalOrders} />
        </div>
        <hr/>
        <div className='bill_paid'>
          <BillItem item='Paid' price={totalPaid} />
        </div>
        {/* <div className='bill_paid'>
          Payments:
          {payments.map((payment, i) => (
            <BillItem key={i} item={payment.method} price={payment.value} />
          ))}
        </div>
        <hr/> */}
        <div className={`bill_left ${tip < 0 ? '' : 'paid'}`}>
          <BillItem item='Remaining' price={tip < 0 ? totalOrders - totalPaid : 0} />
        </div>
        <div className={`bill_tip ${tip > 0 ? 'positive' : ''}`}>
          <BillItem item='Given in tips' price={tip > 0 ? tip : 0} />
        </div>
        <div className='bill-options'>
          <button className={`btn ${tip < 0 ? '' : 'warning'}`} 
            onClick={goToPayment}>Add Payment
          </button>
          <button className={`btn ${tip < 0 ? 'warning' : ''}`} disabled={tip < 0 ? true : false}
            onClick={tableIsPaid} >
            Done
          </button>
        </div>
        <button className='btn warning full-width'
          onClick={startOver} >
          Back
        </button>
      </div>
    )
  }
}

export default FullBill