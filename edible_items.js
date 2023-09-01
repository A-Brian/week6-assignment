function separateItems(itemString) {
  const items = itemString.split(',').map(item => item.trim());
  const edibleItems = [];
  const nonEdibleItems = [];

  for (let item of items) {
    if (item.includes('rice') || item.includes('yam') || item.includes('beans') || item.includes('cocoyam') || item.includes('banana') || item.includes('semo')) {
      edibleItems.push(item);
    } else {
      nonEdibleItems.push(item);
    }
  }

  return {
    edible: edibleItems.join(', '),
    nonEdible: nonEdibleItems.join(', '),
  };
}

const itemString = "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair";
const separatedItems = separateItems(itemString);

console.log("Edible Items:", separatedItems.edible);
console.log("Non-Edible Items:", separatedItems.nonEdible);
