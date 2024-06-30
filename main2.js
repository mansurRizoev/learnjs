let data = [
    {
        id: 1, name: "Mobile Phone",
        child_item: [
            {
                id: 1,
                cat_id: 1,
                name: "IPhone",
                child_item: [
                    { id: 1, cat_id: 1, name: "IPhoneX" }
                ]
            },
            { id: 2, cat_id: 1, name: "Xiaomi" }]
    }
]

let list = []

// data.forEach((el) => { list.push(el.name) })
console.log("LIST: ", list)
let menu = document.getElementById("app")
function createItem(text) {
    let div = document.createElement("div")
    div.innerText = text // <div>Mobile Phone</div>
    div.classList.add("block") // <div class="block">Mobile Phone</div>
    div.classList.add("inner")
    return div
}
function create_Menu(data) {
    menu.innerHTML = ""
    data.forEach((el, i) => {
        // create div element <div></div>
        let div = createItem(el.name)// <div class="block inner">Mobile Phone</div>
        div.onclick = function () {  // <div onclick='()=>{}' class="block inner">Mobile Phone</div>
            // let list2 = list.slice(i, -1)
            console.log("CLICKED")
            el.child_item.forEach((item) => { createItem(item.name) })
            // list.push(list2)
            create_Menu(el.child_item)
        }
        menu.appendChild(div)
    })
}

create_Menu(data)