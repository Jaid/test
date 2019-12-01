# Test


A sandbox repository for experimenting.

## Installation
<a href='https://npmjs.com/package/test'><img alt='npm logo' src='https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png' height=16/></a>
```bash
npm install --save test
```
<a href='https://yarnpkg.com/package/test'><img alt='Yarn logo' src='https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png' height=24/></a>
```bash
yarn add test
```

## Example
```javascript
import test from "test"

// Call it
test()
```

## API Reference
<a name="module_test"></a>

## test
<a name="exp_module_test--module.exports"></a>

### module.exports(firstNumber, [secondNumber]) ⇒ <code>number</code> ⏏
Adds second argument to first argument

**Kind**: Exported function  
**Returns**: <code>number</code> - The sum of both arguments  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| firstNumber | <code>number</code> |  | First number |
| [secondNumber] | <code>number</code> | <code>1</code> | Second number |

**Example**  
```javascript
import test from "test"
const firstNumber = 5
const secondNumber = 7
const result = test(firstNumber, secondNumber)
result === 12
```
**Example**  
```javascript
import test from "test"
const number = 5
const result = test(number)
result === 6
```

