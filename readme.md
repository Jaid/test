# Test


A sandbox repository for experimenting.

## Installation
<a href='https://npmjs.com/package/test'><img alt='npm logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/npm.png'/></a>

```bash
npm install --save test@^0.1.27
```

<hr/>

<a href='https://yarnpkg.com/package/test'><img alt='Yarn logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/yarn.png'/></a>

```bash
yarn add test@^0.1.27
```


## Try it out
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/test@0.1.27");
document.querySelector("head").appendChild(scriptElement);
```

This module is now loaded in a variable that can be accessed in any scope.

```javascript
typeof test.default
```

## Documentation
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


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
