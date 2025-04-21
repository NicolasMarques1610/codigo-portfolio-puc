function bubbleSort(array) { // O(n^2)
    const {length} = array; // Desestruturação

    for(let i = 0; i < length; i++) { // O(n)
        for(let j = 0; j < length -1; j++) { // [3,5,4,2,8] [3,4,2,5,8] [3,2,4,5,8] [2,3,4,5,8] O(n)
            if(array[j] > array[j + 1]) { // O(1)
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]