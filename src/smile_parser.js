const emojis = require('./emoji.json')
const regex = new RegExp(/:([a-zA-Z1-9+_-]*?):/)
const toneRegex = new RegExp(/:(.*?)::(skin-tone-\d*):/)
const emojiRegex = new RegExp(/(\B|^)((:\)|:\/|:\(|:'\(|:\||;\))\B|(:D|:P|:o)\b)/)

export const smileParse = (str, options) => {
  let emoji

  // Figure-out :) :( etc emojis
  while((emoji = emojiRegex.exec(str)) !== null) {
    let emoticon = emojis.filter((emo) => emo.shortcode === `${emoji[0]}`)
    str = str.replace(emoji[0], `<img ${options.styles ? `style="${options.styles}"` : ''} src="${options.url}${emoticon[0].value}.png" alt="${emoticon[0].emoji.slice(1, -1)}" />`)
  }

  //  Figure out skin-tone emojis
  while ((emoji = toneRegex.exec(str)) !== null) {
    let firstPart = emojis.filter((emo) => emo.emoji === `:${emoji[1]}:`)
    let secondPart = emojis.filter((emo) => emo.emoji === `:${emoji[2]}:`)

    try {
      str = str.replace(emoji[0], `<img ${options.styles ? `style="${options.styles}"` : ''} src="${options.url}${firstPart[0].value}-${secondPart[0].value}.png" alt="${emoji[1]}-${emoji[2]}" />`)
    } catch (e) {
      str = str.replace(emoji[0], `<img ${options.styles ? `style="${options.styles}"` : ''} src="${options.url}${firstPart[0].value}.png" alt="${emoji[1]}" />`)
    }
  }

  //  Figure-out emojis
  while ((emoji = regex.exec(str)) !== null) {
    let emoticon = emojis.filter((emo) => emo.emoji === `${emoji[0]}`)
    try {
      str = str.replace(emoji[0], `<img ${options.styles ? `style="${options.styles}"` : ''} src="${options.url}${emoticon[0].value}.png" alt="${emoji[1]}" />`)
    } catch (e) {
      str = str.replace(emoji[0], emoji[1])
    }
  }
  return str
}

export default {
  smileParse
}
