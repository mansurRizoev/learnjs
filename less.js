let arr = [1, 2, 3]
console.log(typeof arr)
// let arr2 = [1, 2, 3]
// arr2.push([1, 2, 3, 4, 5])
// arr.push(arr2)
// [ 1, 2, 3, [ 1, 2, 3, [ 1, 2, 3, 4, 5 ] ] ]
// console.log(arr[3][3][3])
// Array.prototype.join()
arr.splice(2, 1,)
console.log(arr)
let students = ["Said", "Tom", "Bob", "John", "Alice", "Obama"];
// console.log(arr.join('-'))
console.log(students.slice(1));
console.log(students.slice(0));
console.log(students.includes('Tom', 3));
console.log(students);
// console.log(arr.at(2));
for (const value of students) {
    console.log(value);
}

