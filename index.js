'use strict'

const emojiTrim = (content) => {
  return content.toString(16).replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDFFF])/g, '')
}

module.exports = emojiTrim
