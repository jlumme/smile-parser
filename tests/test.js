import { smileParse } from '../index.js'

const mockOptions = {
  url: 'https://mock/',
  styles: 'height: 21px; position: relative; top: -3px;'
}

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
  it('should parse :smile: emoji', () => {
    expect(smileParse(':smile:', mockOptions)).toEqual('<img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f604.png" alt="smile" />')
  })

  it('should return not found emojis without ::', () => {
    expect(smileParse(':asd:', mockOptions)).toEqual('asd')
  })

  it('should parse :smile: emoji in middle of text', () => {
    expect(smileParse('asd :smile: asd', mockOptions)).toEqual('asd <img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f604.png" alt="smile" /> asd')
  })

  it('should parse two :smile: emojis in a row without a space', () => {
    expect(smileParse(':smile::smile:', mockOptions)).toEqual('<img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f604.png" alt="smile" /><img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f604.png" alt="smile" />')
  })

  it('should parse two :smile: emojis in a row with a space', () => {
    expect(smileParse(':smile: :smile:', mockOptions)).toEqual('<img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f604.png" alt="smile" /> <img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f604.png" alt="smile" />')
  })
})

describe('smileParse :+1::skin-tone-2: parsing', () => {
  it('should parse :+1::skin-tone-2: emojis', () => {
    expect(smileParse(':+1::skin-tone-2:', mockOptions)).toEqual('<img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f44d-1f3fb.png" alt="+1-skin-tone-2" />')
  })

  it('should catch bad skin-tone emojis and fallback to default color emoji', () => {
    expect(smileParse(':+1::skin-tone-12335:', mockOptions)).toEqual('<img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f44d.png" alt="+1" />')
  })
})

describe('smileParse :) :( etc parsing', () => {
  it('should parse :) emoji', () => {
    expect(smileParse(':)', mockOptions)).toEqual('<img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f642.png" alt="slightly_smiling_face" />')
  })
  it('should parse :) emoji from text with space', () => {
    expect(smileParse('How are we doing today? :)', mockOptions)).toEqual('How are we doing today? <img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f642.png" alt="slightly_smiling_face" />')
  })
  it('should parse :D emoji', () => {
    expect(smileParse(':D', mockOptions)).toEqual('<img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f604.png" alt="smile" />')
  })
  it('should parse crying  emoji', () => {
    expect(smileParse(":'(", mockOptions)).toEqual('<img style="height: 21px; position: relative; top: -3px;" src="https://mock/1f622.png" alt="cry" />')
  })
  it('should not parse :D emoji from middle of a word', () => {
    expect(smileParse(':Ddd', mockOptions)).toEqual(':Ddd')
  })
  it('should not parse :/ emoji from middle of text', () => {
    expect(smileParse('https://test.com', mockOptions)).toEqual('https://test.com')
  })
})
