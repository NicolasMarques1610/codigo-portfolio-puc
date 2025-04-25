function selectionSort(array) { // O(n^2)
    const {length} = array; // Desestruturação

    for(let i = 0; i < length - 1; i++) { // O(n)
        let minIndex = i;

        for(let j = i+1; j < length; j++) { // [2,3,8,4,5] [2,3,4,8,5] [2,3,4,5,8] O(n)
            if(array[j] < array[minIndex]) { // O(1)
                minIndex = j;
            }
        }

        if(minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
        // console.log(array);
    }
    return array;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]