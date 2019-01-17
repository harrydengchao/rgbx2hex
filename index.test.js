const rgbx2hex = require('./index')

test('rgba rgba(238,153,34,0.502) to hex #80EE9922', () => {
  expect(rgbx2hex('rgba(238,153,34,0.502)')).toBe('#80EE9922')
})

test('rgb rgb(255,100,97) to hex #FF6461', () => {
  expect(rgbx2hex('rgb(255,100,97)')).toBe('#FF6461');
})

