import { isEmpty } from './utils'

const appendUnique = x => xs => (xs.includes(x) ? xs : xs.concat(x))

const handleConcat = x => _xs => {
  const xs = _xs || []
  if (Array.isArray(x)) {
    return x.reduce((acc, value) => appendUnique(value)(acc), xs)
  }
  return appendUnique(x)(xs)
}

const id = a => a

const mapValue = (fn = id) => x => fn(x)

export const getFilterOptions = (
  data = [],
  { exclude = [], mapper = {} } = {}
) =>
  data.reduce(
    (acc, x) =>
      Object.entries(x).reduce(
        (acc2, [key, value]) =>
          exclude.includes(key) || isEmpty(value)
            ? acc2
            : {
                ...acc2,
                [key]: handleConcat(mapValue(mapper[key])(value))(acc[key]),
              },
        acc
      ),
    {}
  )

const matchesOptions = options => item =>
  Object.entries(item).find(([key, value]) =>
    (options[key] || []).includes(value)
  )

export const filterByOptions = (options = {}) => (data = []) =>
  isEmpty(options) ? data : data.filter(matchesOptions(options))
