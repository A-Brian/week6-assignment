function countCharacters(str) {
  const counts = {
    a: 0,
    b: 0,
    d: 0,
    y: 0,
  };

  for (let char of str) {
    if (char === 'a') counts.a++;
    else if (char === 'b') counts.b++;
    else if (char === 'd') counts.d++;
    else if (char === 'y') counts.y++;
  }

  return counts;
}

const inputString = "abdsgyhidsaadgbdaasbvcydsaabdgsaayre";
const characterCounts = countCharacters(inputString);

console.log(characterCounts);
