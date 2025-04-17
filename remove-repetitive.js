export function removerRepetitive(string) {
  let result = "";
  for (let item of string) {
    if (!result.includes(item)) result += item;
  }

  return result;
}

// console.log(removerRepetitive("aabbaa"))

// console.log(removerRepetitive("abcd#abcd#abcd@@%%$"));

// console.log(removerRepetitive("123asd123asdhhhlll"));

// console.log(removerRepetitive("wer]wer]sdf]sdf]xcv]xcv]//??"));
