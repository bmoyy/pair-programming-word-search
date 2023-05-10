const wordSearch = (letters, word) => {
  if (!letters.length) return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let verticalJoin = [];
  let letterToPrint = "";
  for (let j = 0; j < letters[0].length; j++) {
    for (let i = 0; i < letters.length; i++) {
      if (i === 0) letterToPrint = "";
      letterToPrint += letters[i][j];
      if (i === letters.length-1) verticalJoin.push(letterToPrint);
    }
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  
  return false;
};

module.exports = wordSearch;