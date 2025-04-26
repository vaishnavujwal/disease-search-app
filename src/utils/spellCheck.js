// src/utils/spellingCheck.js

// Calculate Levenshtein Distance between two strings
function levenshteinDistance(a, b) {
  const matrix = [];

  const lenA = a.length;
  const lenB = b.length;

  // Initialize the matrix
  for (let i = 0; i <= lenA; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= lenB; j++) {
    matrix[0][j] = j;
  }

  // Fill in the matrix
  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,     // Deletion
          matrix[i][j - 1] + 1,     // Insertion
          matrix[i - 1][j - 1] + 1  // Substitution
        );
      }
    }
  }

  return matrix[lenA][lenB];
}

// Find the closest matching word
export function findClosestMatch(query, options) {
  query = query.toLowerCase();
  let closestMatch = "";
  let smallestDistance = Infinity;

  options.forEach((option) => {
    const distance = levenshteinDistance(query, option.toLowerCase());
    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestMatch = option;
    }
  });

  // If the match is good enough (distance is less than 40% of word length), accept it
  if (smallestDistance <= Math.floor(query.length * 0.4)) {
    return closestMatch;
  }

  return "";
}
