[![Build Status](https://travis-ci.org/jlumme/smile-parser.svg?branch=master)](https://travis-ci.org/jlumme/smile-parser)

## smile-parser

[![Greenkeeper badge](https://badges.greenkeeper.io/jlumme/smile-parser.svg)](https://greenkeeper.io/)
This is a small library which takes a string, parses emojis out and replaces them with html image tags and returns the string.

Parses emojis from given string with syntax:
* :emoji:
* :emoji::skin-tone-2:
* :) :/ :( :'( :| ;) :D :P :o <-- These emojis require a start or end of string or space before or after to work, this is to avoid messing up url's for example

Supports only apple emojis hosted separately.

## Usage

* Install and require the package
* Define options for the smile-parser
```
const emojiOpts = {
  url: https://demo.url/emojis/,
  styles: "height: 21px; position: relative;"
}
```
  * you need to host emojis somewhere and give the url to emoji folder in options

* Run smileParse to a string you wish to parse
```
smileParse(string, emojiOpts)
```

## Todo:
* Support more emojis
* Support sprites
* Create a demo page
* Support other emoji-libraries
* Finish this readme

## License
MIT see [LICENSE.md](https://github.com/jlumme/smile-parser/blob/master/LICENSE) for details.
