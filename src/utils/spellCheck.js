export function findClosestMatch(query, options) {
    query = query.toLowerCase();
    let closestMatch = "";
    let highestMatch = 0;
  
    options.forEach((option) => {
      let matchCount = 0;
      let minLength = Math.min(option.length, query.length);
  
      for (let i = 0; i < minLength; i++) {
        if (option[i] === query[i]) {
          matchCount++;
        }
      }
  
      let similarity = matchCount / option.length;
      if (similarity > highestMatch) {
        highestMatch = similarity;
        closestMatch = option;
      }
    });
  
    return highestMatch > 0.5 ? closestMatch : "";
  }
  