export const findExtraElement = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] | null => {
  // Combine both arrays into one large array
  const combinedArray = [...arr1, ...arr2];
  let result: (string | number)[] = [];
  // Create a Map object to count the number of each element in the array
  const elementCountMap = new Map();

  // Go through all the elements of the large array and count their number
  for (const element of combinedArray) {
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }
  }

  // Find the element whose number is not even
  for (const [element, count] of elementCountMap) {
    if (count % 2 !== 0) {
      result.push(element);
    }
  }

  if (result.length > 0) return result;

  // If no extra element is found, return null or the appropriate default value
  return null;
}