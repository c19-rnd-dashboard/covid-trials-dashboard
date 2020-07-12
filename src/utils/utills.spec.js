const { count, countBy } = require('./utils')

describe('count', () => {
  it('shoud count an array of items', () => {
    const list = ['USA', 'VEN', 'CHL', 'BRA', 'SWE', 'USA', 'BRA', 'USA', 'VEN']
    const result = {
      USA: 3,
      VEN: 2,
      CHL: 1,
      BRA: 2,
      SWE: 1,
    }
    expect(count(list)).toEqual(result)
  })
})

describe('countBy', () => {
  it('should count based on a map function', () => {
    const list = [
      {
        country: 'USA',
        label: 'United States',
        value: 1,
      },
      {
        country: 'VEN',
        label: 'Venezuela',
        value: 2,
      },
      {
        country: 'USA',
        label: 'United States',
        value: 3,
      },
    ]
    const result = {
      USA: 2,
      VEN: 1,
    }
    const mappingFunction = ({ country }) => country
    expect(countBy(mappingFunction)(list)).toEqual(result)
  })
})
