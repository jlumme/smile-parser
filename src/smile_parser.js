const emojis = require('./emoji.json')
const regex = new RegExp(/:([a-zA-Z_-]*?):/)

export const smileParse = (str, options) => {
  let emoji
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
