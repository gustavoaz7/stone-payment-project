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
        <div className={`bill_left ${tip < 0 ? '' : 'paid'}`}>
          <BillItem item={'Remaining'} price={tip < 0 ? totalOrders - totalPaid : 0} />
        </div>
        <div className={`bill_tip ${tip > 0 ? 'positive' : ''}`}>
          <BillItem item={'Given in tips'} price={tip > 0 ? tip : 0} />
        </div>
        <div className='bill-options'>
          <button className={`btn ${tip < 0 ? '' : 'warning'}`} 
            onClick={this.props.goToPayment}>Add Payment
          </button>
          <button className={`btn ${tip < 0 ? 'warning' : ''}`} 
            onClick={() => tip < 0 ? alert('This bill is not paid yet.') : this.props.tableIsPaid()} >
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