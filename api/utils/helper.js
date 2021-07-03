export function isExpired(date) {
  if (!date) {
    return true
  }
  if (new Date(date).getTime() < new Date().getTime()) {
    return true
  }

  return false
}
