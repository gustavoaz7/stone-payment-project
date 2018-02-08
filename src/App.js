import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import ImageTitle from './components/ImageTitle/'
import SelectTable from './components/SelectTable/'
import FullBill from './components/FullBill/'
import AddPayment from './components/AddPayment/'
import TableIsPaid from './components/TableIsPaid/'

class App extends Component {

  render() {
    const { currentStep, currentTable, orders, payments } =  this.props
    return (
      <div className="App">
        <ImageTitle />
        <SelectTable 
          currentStep={currentStep} />
        <FullBill 
          currentStep={currentStep} 
          currentTable={currentTable} 
          orders={orders} 
          payments={payments} />
        <AddPayment 
          currentStep={currentStep} />
        <TableIsPaid 
          currentStep={currentStep} />
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

export default connect(mapStateToProps)(App)
