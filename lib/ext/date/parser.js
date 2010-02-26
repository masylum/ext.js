
// ext.js - Date - Parser - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Days.
 */
 
var days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
]

// --- Lexer

/**
 * Grammar tokens.
 */

var tokens = [
  ['space', /^[\n\t ]+/, false],
  ['next', /^next/],
  ['day', /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/],
]

/**
 * Tokenize the given _str_.
 *
 * @param  {string} str
 * @return {array}
 * @api private
 */

function tokenize(str) {
  var stack = []
  while (str.length)
    tokens.detect(function(token){
      if (str.match(token[1])) {
        if (token[2] !== false)
          stack.push({ type: token[0], val: RegExp.$1 })
        str = str.remove(token[1])
        return true
      }
    }) || Error.raise('SyntaxError', 'near "' + str + '"')
  return stack
}

// --- Parser

function Parser(str, date) {
  this.input = str
  this.tokens = tokenize(str)
  this.now = date || new Date
}

Parser.prototype.peek = function() {
  return this.tokens[0]
}

Parser.prototype.advance = function() {
  return this.tokens.shift()
}

Parser.prototype.parse = function() {
  switch (this.peek().type) {
    case 'day':
      this.now.setDate(1 + this.parseDay() + (this.now.date + (7 - this.now.day)))
      break
  }
  return this.now
}

/**
 * day
 */

Parser.prototype.parseDay = function() {
  return days.indexOf(this.advance().val)
}

exports.parse = function(str) {
  return (new Parser(str)).parse()
}