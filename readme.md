# Emoji Trim

Input a string full of 😭😭😭😊😊, and Walla! No emoji anymore!

## Usage

```
const emojiTrim = require('emoji-trim')

let str = 'hello!😭😭😭😊😊'
str = emojiTrim(str)

console.log(str) // hello!

```