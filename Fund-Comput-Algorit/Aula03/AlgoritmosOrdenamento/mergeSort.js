function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }


    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid)); // [5,2] / [5] / [4] / [1]
    const right = mergeSort(array.slice(mid)); // [4,1,3] / [2] / [1,3] / [3]
  
    return merge(left, right); // [5] [2] / [2,5] / [1] [3] / [1,3] / [4] [1,3] / [1,3,4]
}
  
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    // Junta comparando elementos
    while (i < left.length && j < right.length) { // [2,5] [1,3,4]
      if (left[i] < right[j]) { // 5 < 2 / 1 < 3 / 4 < 1 / 4 < 3 / 2 < 1 / 2 < 3 / 5 < 3 / 5 < 4
        result.push(left[i]); // [1]
        i++;
      } else {
        result.push(right[j]); // [2] / [1] / [3] / [1] / [1,2] / [1,2,3] / [1,2,3,4]
        console.log(result);
        j++;
      }
    }
  
    // Se ainda sobrarem elementos em algum dos dois, adiciona
    return result.concat(left.slice(i)).concat(right.slice(j)); // [2,5] / concat([5]).concat([]) / [1,3] / [1,3,4] / [1,2,3,4,5]
}

console.log(mergeSort([5, 2, 4, 1, 3]));