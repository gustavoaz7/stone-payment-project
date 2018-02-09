export function selectTable(table) {
  return {
    type: 'TABLE_SELECTED',
    payload: {
      currentTable: table.n,
      orders: table.orders
    }
  }
}

export function goToPayment() {
  return {
    type: 'GO_TO_PAYMENT'
  }
}

export function returnToBill() {
  return {
    type: 'RETURN_TO_BILL'
  }
}

export function addPayment(payment) {
  return {
    type: 'ADD_PAYMENT',
    payload: payment
  }
}

export function tableIsPaid() {
  return {
    type: 'TABLE_IS_PAID',
    payload: true
  }
}

export function startOver() {
  return {
    type: 'START_OVER'
  }
}