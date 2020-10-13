const { getFilterOptions } = require('./filterObject')

describe('Filter Options', () => {
  it('should return an object with every unique value', () => {
    const data = [
      {
        brand: 'ferrari',
        motor: 'v8',
      },
      {
        brand: 'audi',
        motor: 'v6',
      },
      {
        brand: 'tesla',
        battery: '12KVA',
      },
    ]
    expect(getFilterOptions(data)).toEqual({
      brand: ['ferrari', 'audi', 'tesla'],
      motor: ['v8', 'v6'],
      battery: ['12KVA'],
    })
  })
})
