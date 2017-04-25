
//INSERTION SORT
const insert = (array, index, value) => {
  //index is the index of last element of sorted part of the array
  let i;
  for(i = index; i >= 0 && array[i] > value; i-- ) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
}

export const insertionSort = (array) => {
  let len = array.length; // calculate length to reduce runtime in loop
  for(let i = 1; i < len; i++) {
    let current_item = array[i];  // get the current item (item to be inserted in sorted array)
    insert(array, i - 1, current_item); 
  }
  return array;
}

//BINARY SEARCH

export const binarySearch = (array, value) => {
  let min = 0;
  let max = array.length - 1;
  while(max >= min) {
    let guess = Math.floor((max - min)/2);
    if(array[guess] === value) {
      return guess;
    } else if (value < array[guess]) {
      max = guess - 1;
    } else {
      min = guess + 1;
    } 
  }
  return -1;    
}

//SELECTION SORT

const swap = (array, firstIndex, secondIndex) => {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

const indexOfMinimum = (array, startIndex) => {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

export const selectionSort = (array) => {
    var temp;
    for(var i = 0; i < array.length; i++) {
        temp = indexOfMinimum(array, i);
        swap(array, i, temp);
    }
    return array;
};

//MERGE SORT

const merge = (left, right) => {
  let sorted = [];
  let i = 0, j = 0;
  let l_len = left.length;
  let r_len = right.length;
  while(i < l_len || j < r_len) {
    if(i < l_len && j < r_len) {
      if (left[i] < right[j]) {
        sorted.push(left[i++]);
      } else {
        sorted.push(right[j++]);
      }
    } else if (i < l_len) {
      sorted.push(left[i++]);
    } else {
      sorted.push(right[j++]);
    }
  }
  return sorted;
}
export const mergeSort = (array) => {
  let len = array.length;
  if(len === 1) {
    return array;
  }
  let mid = Math.floor(len/2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, len);
  return merge(mergeSort(left), mergeSort(right)); 
}
