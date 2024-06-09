// h1.textContent = 'Hello World';
let elH1 = document.createElement('h1');
let body = document.querySelector('body');
let name = "Sanjar";

// setTimeout(() => {
//     elH1.innerText = "message from setTimeout";
//     body.appendChild(elH1);
// }, 3000)
// setInterval(() => { }, 3000)

for (let i = 0; name.length > i; i++) {

    setInterval(() => {
        let h1 = document.createElement('h1');
        h1.innerText = name[i]
        body.appendChild(h1);
    }, 3000)

}

