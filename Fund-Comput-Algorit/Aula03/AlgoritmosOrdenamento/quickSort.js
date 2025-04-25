function quickSort(array, level = 0) { // O(n log n)
    if (array.length <= 1) {
      return array;
    }
  
    // Escolhe o pivô (último elemento)
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];
  
    // Separa em menores e maiores que o pivô
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    console.log(`${"  ".repeat(level)}Pivô escolhido: ${pivot}`);
    console.log(`${"  ".repeat(level)}Left: [${left}] | Right: [${right}]`);
  
    // Recursivamente ordena esquerda e direita, e junta em um novo array com o pivo no meio
    return [
      ...quickSort(left, level + 1),
      pivot, 
      ...quickSort(right, level + 1)
    ];
  }

  const arr = [5, 2, 8, 4, 1];
  const sorted = quickSort(arr);
  console.log("Array ordenado:", sorted);