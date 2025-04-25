function insertionSort(array) { // O(n^2)
    const {length} = array;
    let temp;

    for(let i = 1; i < length; i++) { // [2,5,4,6,1,3] [2,4,5,6,1,3] O(n)
        let j = i; // 1 / 2 / 3 / 4
        temp = array[i]; // 2 / 4 / 6 / 1

        while(j > 0 && temp < array[j - 1]) { // 1 < 6 / 1 < 5 / 1 < 4 / 1 < 2 O(n)
            array[j] = array[j - 1]; // = 6 / = 5 / =4 / = 2
            j--; // 3 / 2 / 1 / 0
            console.log(array); // [2,5,5,6,1,3] / [2,4,5,6,1,3] / [2,4,4,6,1,3] / [2,2,4,6,1,3]x
            // [2,4,5,6,6,3] / [2,4,5,5,6,3] / [2,4,4,5,6,3] / [2,2,4,5,6,3]
        }

        array[j] = temp; // = 2 / = 4 / = 6 / = 1
    }

    return array;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));