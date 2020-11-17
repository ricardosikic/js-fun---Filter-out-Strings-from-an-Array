const filterArray = (arr) => {
  const newArr = [];
  arr.map(item => {
    if(typeof item === 'number') {
      newArr.push(item);
    }
  });
  return newArr;
  //console.log(newArr)
}
filterArray([1, "a", "b", 0, 15]);



/*********
filterArray([1, 2, "a", "b"]) ➞ [1, 2]
filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123] 
********/