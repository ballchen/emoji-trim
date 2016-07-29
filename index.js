'use strict'

const emojiTrim = (content) => {
  return content.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '')
}

module.exports = emojiTrim
