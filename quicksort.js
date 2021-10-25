const quickSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  // this will not include last element of arr
  for (const el of arr.slice(0, arr.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
};

const arr = [1, 4, 2, 8, 10, 3, 6, 9];
console.log(quickSort(arr));
