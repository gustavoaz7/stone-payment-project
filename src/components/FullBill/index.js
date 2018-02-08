import React, { Component }from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import BillItem from '../../common/BillItem'
import { goToPayment, tableIsPaid } from '../../Actions'

class FullBill extends Component {

  render() {
    if (this.props.currentStep !== 2) return null;

    const { currentTable, orders, payments } = this.props

    const totalOrders = orders.reduce((prev, next) => prev + next.price, 0)
    const totalPaid = payments.length ? payments.reduce((prev, next) => prev + next.value, 0) : 0
    const tip = totalPaid - totalOrders

    return (
      <div className="bill">
        <h1>Table {currentTable}</h1>
        {orders.map((order, i) => (
          <BillItem key={i} item={order.item} price={order.price} />
        ))}
        <div className="bill_total">
          <BillItem item='Total' price={totalOrders} />
        </div>
        <div className='bill_left'>
          <BillItem item={'Remaining'} price={tip < 0 ? totalOrders - totalPaid : 0} />
        </div>
        <div className="bill_tip">
          <BillItem item={'Given in tips'} price={tip > 0 ? tip : 0} />
        </div>
        <div className='bill_payment'>
          Add payment
          <button onClick={this.props.goToPayment}>Add</button>
        </div>
        <div className="bill_done">
          Are you done with this table?
          <button onClick={() => tip < 0 ? alert('This bill is not paid yet.') : this.props.tableIsPaid()} >
            Done
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  orders: state.orders,
  payments: state.payments
})

const mapDispatchToProps = dispatch => bindActionCreators({ goToPayment, tableIsPaid }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FullBill)