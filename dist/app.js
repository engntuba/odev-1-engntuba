"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _servise = require('./lib/servise'); var _servise2 = _interopRequireDefault(_servise);
const data= _servise2.default.call(void 0, 1);
data.then((response)=>console.log(response))