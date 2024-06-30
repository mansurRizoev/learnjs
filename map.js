let map = new Map();
// console.log(typeof map);
map.set('name', "some data");
map.set('name', "some data");

map.set({ age: 18 }, "some data");
map.set([1, 2, 4], "some data");
map.set(null, "some data");
console.log(map.entries());
// console.log(map.get('name'))
// console.log(map.size)
// console.log(map.has('name'))
// console.log(map.keys())
// console.log(map.values())

// let obj = { city: "Dushanbe", country: "Tajikistan" }
// let map1 = new Map(Object.entries(obj));
// console.log(map1);
// console.log(map1.delete('city'));
// console.log(map1);

// let obj1 = Object.fromEntries(map1);
// console.log(obj1);
let st = new Set();
st.add(1);
st.add(2);
st.add(1);

console.log(st);




