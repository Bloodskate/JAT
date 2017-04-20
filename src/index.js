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