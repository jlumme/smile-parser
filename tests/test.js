import { smileParse } from '../src/index.js'

describe('smileParse', () => {
  it('function should exist', () => {
    expect(smileParse).toBeDefined()
  })
})

describe('smileParse plain text', () => {
  it('should return original string', () => {
    expect(smileParse('asd')).toEqual('asd')
  })
})

describe('smileParse :emoji: parsing', () => {
  const mockOptions = {
    url: 'https://mock/'
  }
  it('should parse :smile: emoji', () => {
    expect(smileParse(':smile:', mockOptions)).toEqual('<img src="https://mock/1f604.png" alt="smile" />')
  })

  it('should return not found emojis without ::', () => {
    expect(smileParse(':asd:', mockOptions)).toEqual('asd')
  })

  it('should parse :smile: emoji in middle of text', () => {
    expect(smileParse('asd :smile: asd', mockOptions)).toEqual('asd <img src="https://mock/1f604.png" alt="smile" /> asd')
  })

  it('should parse two :smile: emojis in a row without a space', () => {
    expect(smileParse(':smile::smile:', mockOptions)).toEqual('<img src="https://mock/1f604.png" alt="smile" /><img src="https://mock/1f604.png" alt="smile" />')
  })

  it('should parse two :smile: emojis in a row with a space', () => {
    expect(smileParse(':smile: :smile:', mockOptions)).toEqual('<img src="https://mock/1f604.png" alt="smile" /> <img src="https://mock/1f604.png" alt="smile" />')
  })
})
