'use strict';

/**
 * 17 の倍数である場合 true を返す
 * @param {number} num
 * @returns {boolean}
 */

function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen }
