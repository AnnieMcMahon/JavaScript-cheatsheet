//Named export
const firstFunction = () => { }
const secondFunction = () => { }
export { firstFunction, secondFunction };

// inline named export
export const myFirst = () => { }
export const mySecond = () => { }

// default export
const firstFunct = () => { }
const secondFunct = () => { }
const resources = {
  firstFunct,
  secondFunct
}
export default resources;