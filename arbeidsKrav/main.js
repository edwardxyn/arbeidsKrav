let boxContainer = document.getElementById ("food-list1")
let foodList = document.getElementById ("list-txt")

listArray = [];

function addFood () {
    
    let foodNameInput = document.getElementById("food-name-input").value;
    let foodPriceInput = document.getElementById("food-price-input").value;

    listArray.push({
        name: foodNameInput,
        price: foodPriceInput,
    });

    listFoods();
}

function listFoods() {
    foodList.innerHTML = "";
    for (let i = 0; i < listArray.length; i++){
        foodList.innerHTML += `<li><h1>${listArray[i].name}</h1>
        <h2>${listArray[i].price}</h2>
        <button id="delete-btn" onclick=""></button></li>`;
    }
}

