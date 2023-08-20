const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
   const item = {
    text : text,
    done: false
   }
   this.reset();
   items.push(item);
   populateList(items,itemsList);
   localStorage.setItem('items',JSON.stringify(items))
}
function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate,i) =>{
    return `
    <li>
    <input type='checkbox' data-index=${i} id="item${i}" ${plate.done ? "checked" : ""}"/>
            <label for="item${i}">${plate.text}</label>
        </li>
    `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    console.log(index);
    items[index].done = !items[index].done;

    localStorage.setItem('items',JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem)
itemsList.addEventListener("click", toggleDone)
populateList(items, itemsList)

// const checkboxes= document.querySelectorAll('input');
// checkboxes.forEach(input => {
//     input.addEventListener("click",()=> alert("hi"))
// });