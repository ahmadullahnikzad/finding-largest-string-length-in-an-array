// let names='my name is ahmad khan ok';
// names=names.split(' ');
// let other=[];
// for(let i=0;i<names.length;i++){
//   other.push(names[i].length)
// }
// other.sort((a,b)=>b-a);
// other[0]
function findLongestWordLength(str) {
  str=str.split(' ');
  let other=[];
  for(let i=0;i<str.length;i++){
    other.push(str[i].length);
  }
  other.sort((a,b)=>a-b);
  return other[other.length-1]
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");