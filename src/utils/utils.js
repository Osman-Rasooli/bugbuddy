export function trimString(str, maxLength = 25) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
}
