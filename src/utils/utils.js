export const log = tag => value => {
  console.log({ tag, value })
  return value
}

export const mapTwoAtTime = (fn, xs) => {
  const [head, subHead, ...rest] = xs
  if (!head) {
    return []
  }
  const [first, second] = fn(head, subHead)
  return [first, ...mapTwoAtTime(fn, [second, ...rest])]
}
