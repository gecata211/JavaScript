function assignProperties(input){
let object = {
    [input[0]]: input[1],
    [input[2]]: input[3],
    [input[4]]: input[5]
  }
  console.log(object);
}
console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));
console.log(assignProperties(['10.5', '3']));
// console.log(binToDec(['11']));

