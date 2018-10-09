const fs = require("fs");

fs.readFile("./emojidata/emoji.json", "utf8", (err, data) => {
  if (err) throw err;
  const emojiArray = [];
  const emojis = JSON.parse(data);
  for (const emoji of emojis) {
    const newEmoji = {
      short_name: emoji.short_name,
      image: emoji.image,
      text: emoji.text
    };
    emojiArray.push(newEmoji);
  }
  fs.writeFileSync(`./src/minifiedEmoji.json`, JSON.stringify(emojiArray), err => {
    if (err) throw err;
  });
});
