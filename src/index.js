export const insertionSort = (array) => {
  let len = array.length; // calculate length to reduce runtime in loop
  for(let i = 0; i < len; i++) {
    let current_item = array[i];  // get the current item
    let j; // initialized here to access below after the loop
    //comparing current item with items in the sorted part of array one by one right to left and switching if necessary
    for(j = i-1; j >= 0 && array[j] > current_item; j--) {  
      array[j + 1] = array[j];
    }
    array[j + 1] = current_item;
  }
  return array;
}


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


const merge = (array, low, mid, high) => {
  let l = low,
      m = low,
      k = mid + 1;
  let B = [];
  while(l <= mid && k <= high) {
    if(array[l] <= array[k]) {
      B[m] = array[l];
      l++;
    } else {
      B[m] = array[k];
      k++;
    }
    m++;
  }
  if(l > mid) {
    for(let i = k; i < high; i++) {
      B[m] = array[i];
      m++;
    }
  } else {
    for( let i = 1; i < mid; i++) {
      B[m] = array[i];
      m++;
    }
  }
  for(let i = low; i < high; i++) {
    array[i] = B[i];
  }
}

export const mergeSort = (array, low = 0, high = array.length) =>  {
  if(low < high) {
    let mid = Math.floor((low + high)/2);
    mergeSort(array, low, mid);
    mergeSort(array, mid + 1, high);
    merge(array, low, mid, high);
    return array;
  }
}