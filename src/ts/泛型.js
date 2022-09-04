/* 什么时候使用泛型，参数和返回值有某种联系 */
/* 传入的神么类型的数组，就返回神么类型的 */
/**
 *
 *
 * @template Type
 * @param {Type[]} arr
 * @return {*}  {(Type | undefined)}
 */
function firstElement(arr) {
  return arr[0]
}
firstElement(['再见', '冲啊', '6'])
firstElement([1, 5, 9])
firstElement([])
/* 泛型不止可以定义一个 */
function map(arr, func) {
  return arr.map(func)
}
map(['1', '4'], function (n) {
  return parseInt(n)
})
/* 泛型限制条件extends */

function longest(a, b) {
  if (a.length < b.length) return b
  else return a
}
var longString = longest('hdaj', 'dwehrf')
var longArray = longest(['1', '3', '5'], ['1', '5'])
// const notOk = longest(19,10)
console.log(longArray)
