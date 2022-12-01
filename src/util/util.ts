// function cleanEmpty(obj: object): object {
//   return Object.keys(obj)
//     .filter((item: number): Array<number> => {
//       return obj[item] !== undefined && obj[item] !== null && obj[item] !== ''
//     })
//     .reduce((prev: object, curr: number): object => {
//       return { ...prev, [curr]: obj[curr] }
//     }, {})
// }

function cleanEmpty(obj) {
  return Object.keys(obj)
    .filter(key => {
      return obj[key] !== undefined && obj[key] !== null && obj[key] !== ''
    })
    .reduce((prev, curr) => {
      return { ...prev, [curr]: obj[curr] }
    }, {})
}
export const util = {
  cleanEmpty
}
