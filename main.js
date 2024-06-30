let data = ["C#", "JavaScript", "C++", "Python", "Ruby", "PHP", "Perl"];

let menuEl = document.getElementById("app");

data.forEach((el, i) => {
    let div = document.createElement("div");
    div.innerText = el;
    div.classList.add("block");
    div.classList.add("inner");
    div.style.cursor = "pointer";
    menuEl.appendChild(div);
})
// // console.log(menuEl) //  <div id="app"></div>;

// let data = ["C++", "Python", "C#", "JS"]
// let el = "C#";
// console.log(data);
// data.splice(data.indexOf(el), 0)

// data.forEach((el, i) => {
//     if (el == 'C#') {
//         data.splice(i, 1);
//     }
// })
console.log(data);

// let menu = document.getElementById("app")
// let btn = document.getElementById("btn")

// function create_Menu() {

//     data.forEach((el, i) => {

//         let div = document.createElement("div")
//         div.innerText = el
//         div.classList.add("block")
//         div.classList.add("inner")
//         menu.appendChild(div)
//     })
// }

// create_Menu()

// btn.onclick = function () {
//     let el = prompt()
//     if (!el) return;
//     menu.innerHTML = '';
//     data.push(el)
//     create_Menu()
// }