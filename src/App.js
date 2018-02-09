import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import ImageTitle from './components/ImageTitle/'
import SelectTable from './components/SelectTable'
import FullBill from './components/FullBill'
import AddPayment from './components/AddPayment'
import TableIsPaid from './components/TableIsPaid'
import { selectTable, goToPayment, backToBill, addPayment, tableIsPaid, startOver } from './Actions'

class App extends Component {

  render() {
    const { currentStep, currentTable, orders, payments,
      selectTable, goToPayment, backToBill, addPayment, tableIsPaid, startOver 
    } =  this.props
    return (
      <div>
        <ImageTitle />
        <SelectTable 
          currentStep={currentStep}
          selectTable={selectTable} />
        <FullBill 
          currentStep={currentStep} 
          currentTable={currentTable} 
          orders={orders} 
          payments={payments} 
          goToPayment={goToPayment} 
          tableIsPaid={tableIsPaid} 
          startOver={startOver} />
        <AddPayment 
          currentStep={currentStep} 
          addPayment={addPayment} 
          backToBill={backToBill} />
        <TableIsPaid 
          currentStep={currentStep}
          startOver={startOver} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentStep: state.currentStep,
  currentTable: state.currentTable,
  orders: state.orders,
  payments: state.payments,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  selectTable,
  goToPayment,
  backToBill,
  addPayment,
  tableIsPaid,
  startOver
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
