
# ext.js - JavaScript Extensions &amp; Utilities

High quality JavaScript extensions for various tasks such as
formatting dates, currency helpers, and more. This library targets node.js and
server-side frameworks such as [Express](http://github.com/visionmedia/express).

Ext.js uses the CommonJS module pattern when needed.
Additionally, **all** of the native object extensions are non-enumerable,
and you may create your own via Ext.extend(prototype, methods).

## Extensions

To use simply:
    require('ext')

### Array

  * Array#each
  * Array#flat
  * Array#includes(item, [item ...])
  * Array#first
  * Array#last
  * Array#compact([removableValues])
  * Array#at(index)

### Number

  * Number#ordinalize
  * Number#currency
  * Number#second     / Number#seconds
  * Number#minute     / Number#minutes
  * Number#hour       / Number#hours
  * Number#day        / Number#days
  * Number#week       / Number#weeks
  * Number#month      / Number#months
  * Number#year       / Number#years
  * Number#toMinutes
  * Number#toHours
  * Number#toDays
  * Number#toWeeks
  * Number#toMonths
  * Number#toYears
  * Number#ago
  * Number#times(fn[, scope])
  * Number#isFloat

### String

  * String#variable
  * String#uppercase
  * String#lowercase
  * String#camelcase
  * String#digitize
  * String#strip
  * String#before(str)
  * String#after(str)
  * String#padLeft(width[, char])
  * String#padRight(width[, char])
  * String#remove(pattern)
  * String#startsWith(str)
  * String#endsWith(str)
  * String#capitalize([all])
  * String#wrap(prefix[, suffix])

### Date

  * Date#year
  * Date#month
  * Date#date
  * Date#day
  * Date#hours
  * Date#minutes
  * Date#seconds
  * Date#milliseconds
  * Date#monthName
  * Date#shortMonthName
  * Date#dayName
  * Date#shortDayName
  * Date#format(str)
  * Date#inWordsSince(date)
  * Date#inWordsSinceNow

### RegExp

  * RegExp.escape(str)

### Base64

  * String#base64Encode / encode(str)
  * String#base64Decode / decode(str)

## MD5

  * String#md5 / hash(str)

### printf

  * sprintf(str[, arg[, ...]])
  * eprintf(str[, arg[, ...]])
  * printf(str[, arg[, ...]])

## Running Tests

    $ make test

## License

(The MIT License)

Copyright (c) 2009 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

