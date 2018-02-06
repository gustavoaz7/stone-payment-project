import mockedData from '../../mockedData'

export function getTableOrders(n) {
  return {
    type: 'TABLE_SELECTED',
    payload: {
      n,
      orders: mockedData[n]
    }
  }
}