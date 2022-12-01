/* 元组：表示一个一直元素数量和类型的数据，如[string, number] : 表示一个只有两个元素的数组，且第一个元素是字符串，第二哥元素是数字 */
let yuanzu: [string, number]
yuanzu = ['abc', 1]

/* 枚举: enum (默认情况下从0开始时元素的编号,可以手动指定成员的编号)*/
enum Color {
  Red,
  Green,
  Blue,
  Alpha
}
let c1: Color = Color.Red
let c2: string = Color[0]
console.log(c1, c2)

enum Color2 {
  Red = 1,
  Green = 3,
  Blue = 4,
  Alpha
}
let c3: Color2 = Color2.Alpha
let c4: string = Color2[5]
console.log(c3, c4)

/* 类型断言（有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息） */
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length
console.log(strLength)

/* 泛型 */
function identity<T>(arg: T): T {
  return arg
}
