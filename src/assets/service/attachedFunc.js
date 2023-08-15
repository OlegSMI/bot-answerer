export function hammingDistance(firstString, secondString) {
  let count = 0;
  firstString = firstString.toLowerCase();
  secondString = secondString.toLowerCase();
  for (let i = 0; i < firstString.length && i < secondString.length; i++) {
    if (firstString[i] != secondString[i]) {
      count++;
    }
  }
  return count;
}
