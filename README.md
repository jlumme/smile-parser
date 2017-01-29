[![Build Status](https://travis-ci.org/jlumme/smile-parser.svg?branch=master)](https://travis-ci.org/jlumme/smile-parser)
## smile-parser
This is a small library which takes a string, parses emojis out and replaces them with html image tags and returns the string.

Currently supports only apple emojis hosted separately

## Usage

* Install and require the package
* Define options for the smile-parser
```
const emojiOpts = {
  url: https://demo.url/emojis/
}
```
  * you need to host emojis somewhere and give the url to emoji folder in options

* Run smileParse to a string
```
smileParse(string, emojiOpts)
```

## Todo:
* Support :) :-) type emojis
* Support skin-color in emojis
* Support sprites
* Create a demo page
* Support other emoji-libraries

## License
MIT see [LICENSE.md](https://github.com/jlumme/smile-parser/blob/master/LICENSE) for details.
