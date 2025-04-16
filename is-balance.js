export function isBalance(input) {
  const array = [];
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let item of input) {
    if ("({[".includes(item)) {
      array.push(item);
    } else if (")}]".includes(item)) {
      if (array.pop() !== pair[item]) {
        return false;
      }
    }
  }

  return array.length === 0;
}

// console.log(`The balancing result for HDfsf[[{9() is:`, isBalance("HDfsf[[{9()"));

// console.log(`The balancing result for HDfsf[[{}]]9() is:`, isBalance("HDfsf[[{}]]9()"));

// console.log(`The balancing result for HDfsf[[{9(@#)]] is:`, isBalance("HDfsf[[{9(@#)]]"));

// console.log(`The balancing result for abcs[12*{x+(y)}] is:`, isBalance("abcs[12*{x+(y)}]"));
