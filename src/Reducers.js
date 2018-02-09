const INITIAL_VALUE = {
  currentStep: 1,
  currentTable: 0,
  orders: [],
  payments: [],
  isPaid: false
}

export default (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'TABLE_SELECTED':
      return { ...state, ...action.payload, currentStep: state.currentStep+1 }
    
    case 'GO_TO_PAYMENT':
      return { ...state, currentStep: state.currentStep+1 }

    case 'RETURN_TO_BILL':
      return { ...state, currentStep: state.currentStep-1 }

    case 'ADD_PAYMENT':
      return { ...state, payments: [ ...state.payments, action.payload ], currentStep: state.currentStep-1 }
    
    case 'TABLE_IS_PAID':
      return { ...state, isPaid: action.payload, currentStep: state.currentStep+2 }
    
    case 'START_OVER':
      return INITIAL_VALUE

    default:
      return state
  }
}