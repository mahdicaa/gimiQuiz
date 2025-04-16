export function getRepeatedInfo(num) {
  let result = {};
  str = num.toString();

  let counts = {};
  for (let char of str) {
    if (!counts[char]) counts[char] = 1;
    else counts[char]++;
  }

  for (char of str) {
    ax_srt = "";
    repeated = char.repeat(Number(char) * Number(counts[char]));
    result[Number(char)] = repeated;
  }

  return result;
}

// console.log(getRepeatedInfo(12234539));

// console.log(getRepeatedInfo(112258863));

// console.log(getRepeatedInfo(17882233));
