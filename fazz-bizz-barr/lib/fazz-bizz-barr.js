
// With strings is slightly faster

export function fazzBizzBarr(num) {

  let str;
  
  for (let i = 1; i <= num; i += 1) {
    str = '';
    if (i % 3 === 0) str += 'Fazz ';
    if (i % 5 === 0) str += 'Bizz ';
    if (i % 7 === 0) str += 'Barr';
    if (!str) str = String(i);

    console.log(str);
  }
  return str;
}

export function fazzBizzBarrWithArrays(num) {

  let arr;
  
  for (let i = 1; i <= num; i += 1) {
    arr = [];
    if (i % 3 === 0) arr.push('Fazz');
    if (i % 5 === 0) arr.push('Bizz');
    if (i % 7 === 0) arr.push('Barr');
    if (arr.length === 0) arr.push(String(i));

    console.log(arr.join(' '));
  }
  return arr;
}
