export const getEarliestDate = dates => {
  const [earliest] = dates
    .slice()
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
  return earliest
}

export const getLatestDate = dates => {
  const [latest] = dates
    .slice()
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .reverse()
  return latest
}
