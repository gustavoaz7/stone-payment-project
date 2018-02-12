import mockedData from './mockedData'

const INITIAL_VALUE = {
  tables: {},
  currentStep: 1,
  currentTable: 0
}
mockedData.forEach(table => INITIAL_VALUE.tables[`${table.n}`] = table )

const ACTION_HANDLERS = {
  'TABLE_SELECTED': (state, action) => ({
    ...state,
    currentTable: action.payload,
    currentStep: state.currentStep + 1
  }),
  'GO_TO_PAYMENT': (state) => ({ 
    ...state, 
    currentStep: state.currentStep + 1 
  }),
  'BACK_TO_BILL': (state) => ({ 
    ...state, 
    currentStep: state.currentStep - 1 
  }),
  'ADD_PAYMENT': (state, action) => {
    const n = state.currentTable
    const table = state.tables[n]
    return {
      ...state,
      currentStep: state.currentStep - 1,
      tables: {
        ...state.tables,
        [n]: {
          ...table,
          payments: [...table.payments, action.payload]
        },
      }
    }
  },
  'TABLE_IS_PAID': (state) => {
    const n = state.currentTable
    const table = state.tables[n]
    return {
      ...state,
      currentStep: state.currentStep + 2,
      tables: {
        ...state.tables,
        [n]: {
          ...table,
          isPaid: true
        }
      }
    }
  },
  'START_OVER': (state) => ({
      ...state,
      currentStep: 1,
      currentTable: 0
  })
}

export default (state = INITIAL_VALUE, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}