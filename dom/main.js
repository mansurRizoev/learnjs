// let elH1 = document.createElement('h1');
/**
 * document.querySelector
 * document.querySelectorAll
 * document.getElementById
 * document.getElementByTagName
 */
let body = document.querySelector('body');
console.log(body)
// let name = "Sanjar";
// let age = "19"
// setTimeout(() => {
//     elH1.innerText = "message from setTimeout";
//     body.appendChild(elH1);
// }, 3000)
// setInterval(() => { }, 3000)

// for (let i = 0; name.length > i; i++) {

//     setInterval(() => {
//         let h1 = document.createElement('h1');
//         h1.innerText = name[i]
//         body.appendChild(h1);
//     }, 3000)

// }
let inputRef = document.getElementById('inputRef');
let inputRef2 = document.getElementById('inputRef2');
let buttonRef = document.getElementById('btn');
console.log(inputRef);
console.log(buttonRef);
buttonRef.addEventListener('click', () => {
    let el = document.createElement(inputRef.value);
    el.innerText = inputRef2.value;
    body.appendChild(el)
    console.log(inputRef.value);
})
