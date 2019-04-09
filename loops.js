// #1 - forLoop

function forLoop (arr) {
for (i = 0; i < 25; i++) {
  if (i === 1)
  {
    arr.push(`I am ${i} strange loop.`)
  } else {
    arr.push(`I am ${i} strange loops.`)
  }
  }
     return arr
}

// #2 whileLoop
function whileLoop (number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

var i = 0;

//#4 doWhileLoop
// let i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

// console.log(incrementVariable())

function doWhileLoop(number) {
  do {
    console.log('I run once regardless.')
  } while (incrementVariable() < number)
}
