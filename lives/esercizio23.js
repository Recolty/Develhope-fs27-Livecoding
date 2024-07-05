function inception(array) {
  const inceptedArray = [];
  const rotation = 1;

  for (let i = 0; i < array.length; i++) {
    const toBePushedArray = [[array[i]]];
    repetition1(rotation, toBePushedArray, i);
  }

  function repetition1(rotation, toBePushedArray, i) {
    for (let n = 0; n < array.length; n++) {
      if (array[n] !== array[i] && !toBePushedArray.includes(array[n])) {
        toBePushedArray.push([array[n]]);
        const copyToBePushedArray = [...toBePushedArray];
        inceptedArray.push(copyToBePushedArray);
      }

      const newRotation = rotation + 1;
      if (newRotation < array.length - 1) {
        repetition2(newRotation, toBePushedArray, i);
      }
    }
  }

  function repetition2(rotation, toBePushedArray, i) {
    for (let n = 0; n < array.length; n++) {
      if (array[n] !== array[i] && !toBePushedArray.includes(array[n])) {
        toBePushedArray.push([array[n]]);
        const copyToBePushedArray = [...toBePushedArray];
        inceptedArray.push(copyToBePushedArray);
      }

      const newRotation = rotation + 1;
      if (newRotation < array.length - 1) {
        repetition1(newRotation, toBePushedArray, i);
      }
    }
  }

  // Sorting the inceptedArray and removing duplicates
  const sortedInception = inceptedArray.map(subarray =>
    subarray.sort((a, b) => a - b).join(',')
  );

  const uniqueSortedInception = [...new Set(sortedInception)];

  const finalInceptedArray = uniqueSortedInception.map(subarray =>
    subarray.split(',').map(Number)
  );

  console.log(finalInceptedArray);
}

const toBeInceptedArray = [1, 2, 3, 4];
inception(toBeInceptedArray);