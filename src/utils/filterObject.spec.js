const { getFilterOptions, filterByOptions } = require('./filterObject')
import assets from '../mocks/assets.json'

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
  {
    brand: 'tesla',
    battery: '11KVA',
  },
]

describe('getFilterOptions', () => {
  it('should return an object with every unique value', () => {
    const result = getFilterOptions(data)
    expect(result).toEqual({
      brand: ['ferrari', 'audi', 'tesla'],
      motor: ['v8', 'v6'],
      battery: ['12KVA', '11KVA'],
    })
  })

  it('should not add excluded fields', () => {
    expect(getFilterOptions(data, { exclude: ['battery'] })).toEqual({
      brand: ['ferrari', 'audi', 'tesla'],
      motor: ['v8', 'v6'],
    })
  })

  it('should only get one', () => {
    const result = getFilterOptions(assets).countries.filter(
      x => x === 'United States'
    ).length
    expect(result).toEqual(1)
  })

  it('should handle arrays', () => {
    const data = [
      {
        brand: 'ferrari',
        motor: 'v8',
        colors: ['red', 'green'],
      },
      {
        brand: 'audi',
        motor: 'v6',
        colors: ['black'],
      },
      {
        brand: 'tesla',
        battery: '12KVA',
        colors: ['yellow', 'gray', 'green'],
      },
      {
        brand: 'tesla',
        battery: '11KVA',
      },
    ]
    expect(getFilterOptions(data)).toEqual({
      brand: ['ferrari', 'audi', 'tesla'],
      motor: ['v8', 'v6'],
      battery: ['12KVA', '11KVA'],
      colors: ['red', 'green', 'black', 'yellow', 'gray'],
    })
  })

  it('should handle nested objects', () => {
    const data = [
      {
        brand: 'ferrari',
        motor: {
          hp: 100,
          type: 'v8',
          id: 3,
        },
        colors: ['red', 'green'],
      },
      {
        brand: 'audi',
        motor: {
          hp: 80,
          type: 'v6',
          id: 6,
        },
        colors: ['black'],
      },
      {
        brand: 'tesla',
        battery: '12KVA',
        colors: ['yellow', 'gray', 'green'],
      },
      {
        brand: 'tesla',
        battery: '11KVA',
      },
    ]

    const mapper = {
      motor: ({ id }) => id,
    }
    expect(getFilterOptions(data, { mapper })).toEqual({
      brand: ['ferrari', 'audi', 'tesla'],
      motor: [3, 6],
      battery: ['12KVA', '11KVA'],
      colors: ['red', 'green', 'black', 'yellow', 'gray'],
    })
  })

  it('should not include empty or null values', () => {
    const data = [
      {
        brand: null,
        motor: 'v8',
      },
      {
        brand: '',
        motor: 'v6',
      },
      {
        brand: 'tesla',
        battery: '12KVA',
      },
      {
        brand: 'tesla',
        battery: '11KVA',
      },
    ]
    expect(getFilterOptions(data)).toEqual({
      brand: ['tesla'],
      motor: ['v8', 'v6'],
      battery: ['12KVA', '11KVA'],
    })
  })
})

describe('filterByOptions', () => {
  it('should filter by options', () => {
    const filterOptions = {
      brand: ['tesla'],
    }
    expect(filterByOptions(filterOptions)(data)).toEqual([
      {
        brand: 'tesla',
        battery: '12KVA',
      },
      {
        brand: 'tesla',
        battery: '11KVA',
      },
    ])
  })

  it('should not filter if empty', () => {
    const filterOptions = {}
    expect(filterByOptions(filterOptions)(data)).toEqual(data)
  })
})
