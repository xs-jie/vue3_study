// function cleanEmpty(obj: object): object {
//   return Object.keys(obj)
//     .filter((item: number): Array<number> => {
//       return obj[item] !== undefined && obj[item] !== null && obj[item] !== ''
//     })
//     .reduce((prev: object, curr: number): object => {
//       return { ...prev, [curr]: obj[curr] }
//     }, {})
// }

/* 对象去除空值的键值对 */
function cleanEmpty(obj: any): object {
  return Object.keys(obj)
    .filter(key => {
      return obj[key] !== undefined && obj[key] !== null && obj[key] !== ''
    })
    .reduce((prev, curr) => {
      return { ...prev, [curr]: obj[curr] }
    }, {})
}

type arr = number[] | string[]
let arr1: arr = ['1', '2']
let arr2: arr = [3, 4]

type newArr = Array<number | string>
let arr3: newArr = ['1', 8]

export const util = {
  cleanEmpty
}
