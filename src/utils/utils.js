export const log = tag => value => {
  console.log({ tag, value })
  return value
}
