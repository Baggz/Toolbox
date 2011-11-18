# JavaScript Toolbox

A collection of useful JavaScript utilities.

### Features

* Can be used with **Node.js** and **in the browser**
* **AMD compatible**, you can load it via [RequireJS](https://github.com/jrburke/requirejs)
* Lightweight
* Fully **documented**
* Tested

## Example

```javascript
Toolbox.getRandomNum(0, 100); // => 51
Toolbox.getRandomNums(0, 100, 3); // => [10, 54, 12]
Toolbox.getUid(); // => e80Ewq08td3QurK
Toolbox.detectMimeType('json'); // => application/json
```

## Download

To install **Toolbox**, use [NPM](http://npmjs.org/).

```
$ npm install toolbox
```

Releases are available for download from GitHub.

| **Version** | **Description** | **Size** | **Action** |
|:------------|:----------------|:---------|:-----------|
| `toolbox.js` | *uncompressed, with comments* | 18.49 KB (5.21 KB gzipped) | [Download](https://raw.github.com/Baggz/Toolbox/master/src/toolbox.js) |
| `toolbox.min.js` | *compressed, without comments* | 12.95 KB (4.19 KB gzipped) | [Download](https://raw.github.com/Baggz/Toolbox/master/dist/toolbox.min.js) |

# Documentation

**Methods**

* [getRandomNum](#getRandomNum)
* [getRandomNums](#getRandomNums)
* [getUid](#getUid)
* [getAvg](#getAvg)
* [getMax](#getMax)
* [getMin](#getMin)
* [getSum](#getSum)
* [detectMimeType](#detectMimeType)
* [removeDuplicates](#removeDuplicates)
* [shuffle](#shuffle)
* [rgbToHex](#rgbToHex)
* [hexToRgb](#hexToRgb)

<a name="getRandomNum">
## GetRandomNum

### getRandomNum(min, max[, except])

**Examples**

```javascript
Toolbox.getRandomNum(0, 5); // => 2
Toolbox.getRandomNum(0, 5, 3); // => 2
Toolbox.getRandomNum(0, 5, [0, 1, 2, 3, 4]); // => 5
```

<a name="getRandomNums">
## GetRandomNums

### getRandomNums(min, max, count[, except])

**Examples**

```javascript
Toolbox.getRandomNums(0, 5, 3); // => [4, 1, 2]
Toolbox.getRandomNums(0, 5, 3, 4); // => [3, 2, 0]
Toolbox.getRandomNums(0, 5, 3, [0, 1, 2]); // => [4, 5, 3]
```

<a name="getUid">
## GetUid

### getUid(length[, resources])

**Examples**

```javascript
Toolbox.getUid(); // => I1pRhV31R1x5iAY
Toolbox.getUid(25); // => N9JydVi0A2zot9wg8413QGV3j
```

```javascript
var collections = { 
  numbers: false
};

Toolbox.getUid(25, collections); // => ConnMxWPZcvZwxvNoMAQpJHUr
```

```javascript
var collections = { 
  numbers: false,
  lowercase: false
};

Toolbox.getUid(25, collections); // => HGXWGZFIQBBWTIRZPGYXELPMP
```

```javascript
var collections = { 
  numbers: false,
  lowercase: false,
  myCollection: '@#${}<>()'
};

Toolbox.getUid(25, collections); // => Z@}LI(Q<}U}#Q(K$S}L}CC<@Z
```

<a name="getAvg">
## GetAvg

### getAvg(numbers)

**Examples**

```javascript
Toolbox.getAvg([1, 2, 3, 4, 5]); // => 2
```

<a name="getMax">
## GetMax

### getMax(numbers)

**Examples**

```javascript
Toolbox.getMax([1, 2, 3, 4, 5]); // => 5
```

<a name="getMin">
## GetMin

### getMin(numbers)

**Examples**

```javascript
Toolbox.getMin([1, 2, 3, 4, 5]); // => 1
```

<a name="getSum">
## GetSum

### getMin(numbers)

**Examples**

```javascript
Toolbox.getSum([1, 2, 3, 4, 5]); // => 15
```

<a name="detectMimeType">
## DetectMimeType

### detectMimeType(input)

**Examples**

```javascript
Toolbox.detectMimeType('json'); // => application/json
Toolbox.detectMimeType('application/json'); // => json
```

<a name="removeDuplicates">
## RemoveDuplicates

### removeDuplicates(input)

**Examples**

```javascript
Toolbox.removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]); // => [1, 2, 3, 4, 5]
```

<a name="shuffle">
## Shuffle

### shuffle(input)

**Examples**

```javascript
Toolbox.shuffle([1, 2, 3, 4, 5]); // => [2, 1, 4, 3, 5]
```

<a name="rgbToHex">
## RgbToHex

### rgbToHex(input)

**Examples**

```javascript
Toolbox.rgbToHex([255, 255, 255]); // => #ffffff
```

<a name="hexToRgb">
## HexToRgb

### hexToRgb(input)

**Examples**

```javascript
Toolbox.hexToRgb('#ffffff'); // => [255, 255, 255]
```

# Running Tests

```
$ npm tests/
```

# License

(The MIT License)

Copyright (c) 2011 František Hába &lt;hello@frantisekhaba.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.