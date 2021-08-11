export function isExpired(date) {
  if (!date) {
    return true
  }
  if (new Date(date).getTime() < new Date().getTime()) {
    return true
  }

  return false
}

export function getRanHex(size) {
  const result = []
  const hexRef = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)])
  }
  return result.join('')
}
