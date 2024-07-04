function createSubset(arr, indexes, subsets) {
  const subset = [];
  for (let k = 0; k < indexes.length; k++) {
    subset.push(arr[indexes[k]]);
  }
  subsets.push(subset);
}

function recursiveLoop(indexes, index, start, end, callbacks) {
  const callback = callbacks[index];
  if (callback) {
    for (let i = start; i < end; i++) {
      indexes[index] = i;
      callback(i + 1);
    }
  }
}

function subsets(arr) {
  const subsets = [];
  for (let i = 0; i < arr.length; i++) {
    const dim = i + 1;
    const indexes = [];
    const callbacks = [];
    for (let j = 0; j < dim; j++) {
      indexes.push(j);
      callbacks.push((start = 0) => {
        recursiveLoop(indexes, j, start, arr.length - dim + j + 1, callbacks);
      });
    }
    callbacks.push(() => createSubset(arr, indexes, subsets));
    callbacks.shift()();
  }
  return subsets;
}

const arr = [1, 2, 3, 4, 5];
console.log(subsets(arr));

/* ------------------------------------------------------ */

function createSubset(arr, indexes, subsets) {
  const subset = [];
  /* 2.[2] */ 
  for (let k = 0; k < indexes.length; k++) {
                /* arr[1] */
    subset.push(arr[indexes[k]]);
  }
  subsets.push(subset);
}
                      /* [2]  ,   1  ,   0  ,(4 - 1 + 0 + 1 ), [] */
function recursiveLoop(indexes, index, start, end, callbacks) {
  const callback = callbacks[index];
  /* se non undefined? */
  if (callback) {
            /* i = 0,   i < 4   */
    for (let i = start; i < end; i++) {
      /*indexes[0](1) = i */
      indexes[index] = i;
      callback(i + 1);
    }
  }
}

function subsets(arr) {
  const subsets = [];
  /* 3.[2]*/
  for (let i = 0; i < arr.length; i++) {
    const dim = i + 1;
    const indexes = []; 
    /* 1.[1] - 4.[2]*/
    const callbacks = [];
    for (let j = 0; j < dim; j++) {
      indexes.push(j);
      callbacks.push((start = 0) => {
        recursiveLoop(indexes, j, start, arr.length - dim + j + 1, callbacks);
      });
    }
                                        /*    [1],     [] */
    callbacks.push(() => createSubset(arr, indexes, subsets));
    callbacks.shift()();
  }
  return subsets;
}