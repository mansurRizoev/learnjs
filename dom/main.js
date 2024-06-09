// let elH1 = document.createElement('h1');
/**
 * document.querySelector
 * document.querySelectorAll
 * document.getElementById
 * document.getElementByTagName
 */
// let body = document.querySelector('body');
// console.log(body)
// // let name = "Sanjar";
// // let age = "19"
// // setTimeout(() => {
// //     elH1.innerText = "message from setTimeout";
// //     body.appendChild(elH1);
// // }, 3000)
// // setInterval(() => { }, 3000)

// // for (let i = 0; name.length > i; i++) {

// //     setInterval(() => {
// //         let h1 = document.createElement('h1');
// //         h1.innerText = name[i]
// //         body.appendChild(h1);
// //     }, 3000)

// // }
// let inputRef = document.getElementById('inputRef');
// let text = document.getElementById('textareaRef');
// let buttonRef = document.getElementById('btn');
// let content = document.getElementById('content');
// let p = document.querySelector('p')
// let p1 = document.querySelector('.adiba')
// console.log(p1)
// console.log(inputRef);
// console.log(buttonRef);

// buttonRef.addEventListener('click', () => {
//     let date = new Date()
//     let div = document.createElement('div');
//     let data = `<h2>${inputRef.value}</h2><p>${text.value}</p>${date}<hr>`

//     //userName.value;
//     //text.value
//     div.innerHTML = data
//     body.appendChild(div);
//     // console.log(inputRef.value);
// })

let data = [
    { name: 'bmw m3', text: "lorem ipsum dolor sit amet, consectetur", img: "https://www.bmw.tj/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" },
    { name: 'bmw m4', text: "lorem ipsum dolor sit amet, consectetur", img: "https://www.bmw.tj/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" },
    { name: 'bmw x5', text: "lorem ipsum dolor sit amet, consectetur", img: "https://www.bmw.tj/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" },
    { name: 'bmw x6', text: "lorem ipsum dolor sit amet, consectetur", img: "https://www.bmw.tj/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" },
    { name: 'bmw x7', text: "lorem ipsum dolor sit amet, consectetur", img: "https://www.bmw.tj/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" },
    { name: 'bmw x3', text: "lorem ipsum dolor sit amet, consectetur", img: "https://www.bmw.tj/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg" },
];
let body = document.querySelector('body');
let content = document.getElementById('content');


data.forEach((el, index) => {
    let { name, text, img } = el
    let h1 = document.createElement('h1')
    h1.innerText = name;
    let p = document.createElement('p');
    p.innerText = text;
    let img1 = document.createElement('img');
    img1.src = img;
    content.appendChild(img1);
    content.appendChild(h1);
    content.appendChild(p);

    body.appendChild(content);


    console.log(name + " " + text)
})

// for (el in data) {
//     console.log(data[el].name)
// }



