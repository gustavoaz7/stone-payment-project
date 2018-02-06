const INITIAL_STATE = {
  table: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TABLE_SELECTED':
      return { table: action.payload }
    default:
      return state
  }
}