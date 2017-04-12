# harvard-houses
[![travis build](https://img.shields.io/travis/tobiasbueschel/harvard-houses.svg?style=flat-square)](https://travis-ci.org/tobiasbueschel/harvard-houses)
[![codecov coverage](https://img.shields.io/codecov/c/github/tobiasbueschel/harvard-houses.svg?style=flat-square)](https://codecov.io/gh/tobiasbueschel/harvard-houses)
[![version](https://img.shields.io/npm/v/harvard-houses.svg?style=flat-square)](http://npm.im/harvard-houses)
[![downloads](https://img.shields.io/npm/dm/harvard-houses.svg?style=flat-square)](http://npm-stat.com/charts.html?package=harvard-houses)
[![MIT License](https://img.shields.io/npm/l/harvard-houses.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## Installation
This package is distributed via [npm](https://www.npmjs.com/package/harvard-houses):
```bash
$ npm install --save harvard-houses
```

## Usage
#### Node.js
```javascript
const houses = require('harvard-houses');
const allHouses = houses.all;
const randomHouse = houses.random();
const threeRandomHouses = houses.random(3);
```

**Response:**
```json
{
  "Kirkland": {
    "url": "http://kirkland.harvard.edu/",
    "icon": "http://static.hwpi.harvard.edu/files/styles/os_files_small/public/osl/files/kirkland-shield.png"
  }
}
```

#### Browser
```html
<script src="https://unpkg.com/harvard-houses/dist/index.umd.min.js"></script>
```
