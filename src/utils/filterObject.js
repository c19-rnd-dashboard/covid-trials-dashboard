export const getFilterOptions = (data = []) =>
  data.reduce(
    (acc, x) =>
      Object.entries(x).reduce(
        (acc2, [key, value]) => ({
          ...acc2,
          [key]: (acc[key] || []).concat(value),
        }),
        acc
      ),
    {}
  )
