// 类型注解
let obj: string = 'xsj'
/**
 * 块级注释
 * @param x :参数x 数字类型或者字符串
 * @param y :参数y 对象
 * @returns
 */
function getTitle(x: number | string, y: { a: number; b: boolean }): number[] {
  return [3]
}

getTitle('xsj', {
  a: 123,
  b: true
})

// 类型别名，定义类型
type Person = {
  name: string
  age: number
}
// 类型别名扩展,使用&
type Person2 = Person & {
  obj: string
}

let xiaoming: Person2 = {
  name: 'xsj',
  age: 23,
  obj: '前端开发工程师'
}

// 使用接口定义类型
interface People {
  name: string
  age: number
}

// interface的接口扩展
interface People2 extends People {
  height: number
}

// 给interface接口类型添加字段
interface People {
  parent: string
}

let xsj: People2 = {
  name: 'xsj',
  age: 23,
  height: 188,
  parent: '父母'
}

/* 函数类型表达式 */
type greeterFunction = (s: string) => void

function greeter(fn: greeterFunction) {
  fn('Hello, world!')
}

function printToConsole(s: string) {
  console.log(s)
}

greeter(printToConsole)

/*  带签名的函数类型 */
/* 调用签名 */
type DescribableFunction = {
  description: string
  (someArg: number): boolean
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + 'returned' + fn(6))
}

function fn1(n: number) {
  console.log(n)
  return true
}
fn1.description = 'hello 带签名的函数类型'

doSomething(fn1)

/* 构造签名 */
class Ctor {
  s: string
  constructor(s: string) {
    this.s = s
  }
}

type SomeConstructor = {
  new (s: string): Ctor
}

function fn(ctor: SomeConstructor) {
  return new ctor('hello')
}

const f = fn(Ctor)
console.log(f.s)
