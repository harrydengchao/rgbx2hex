// 将 rgba/rgb色值 转换为 十六进制色值。若传入十六进制色值，则直接返回
function rgbx2hex(rgbx) {
  function transform(color) {
    let hex = Math.round(color).toString(16);
    return hex.length > 1 ? hex : '0' + hex;
  }
  function rgbaTransform(rgba) {
    let tokens = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(rgba)
    return `#${transform(tokens[4] * 255)}${transform(tokens[1])}${transform(tokens[2])}${transform(tokens[3])}`
  }
  function rgbTransform(rgb) {
    let tokens = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(rgb)
    return `#${transform(tokens[1])}${transform(tokens[2])}${transform(tokens[3])}`
  }
  return (
    /^rgba/.test(rgbx) 
      ? rgbaTransform(rgbx).toUpperCase()
      : /^rgb/.test(rgbx)
        ? rgbTransform(rgbx).toUpperCase()
        : rgbx
  )
}

module.exports = rgbx2hex
