/* 什么时候使用泛型，参数和返回值有某种联系 */
/* 传入的神么类型的数组，就返回神么类型的 */

/**
 *
 *
 * @template Type
 * @param {Type[]} arr
 * @return {*}  {(Type | undefined)}
 */
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}

firstElement(['再见', '冲啊', '6'])
firstElement([1, 5, 9])
firstElement([])

/* 泛型不止可以定义一个 */
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func)
}

map(['1', '4'], (n) => parseInt(n))

/* 泛型限制条件extends */
function longest<T extends { length: number }>(a: T, b: T): T {
  if (a.length < b.length) return b
  else return a
}

const longString = longest('hdaj', 'dwehrf')
const longArray = longest(['1', '3', '5'], ['1', '5'])
// const notOk = longest(19,10)

console.log(longArray)
