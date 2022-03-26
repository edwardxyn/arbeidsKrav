alert("Hei og velkommen!! Dette er en handleliste der du kan legge til det du må kjøpe/snart trenger/allerede har.");

let boxContainer = document.getElementById ("food-list1")
let foodList = document.getElementById ("list-txt")
let sumPrice = document.getElementById ("sum")



listArray = [];

function addFood () {
    
    let foodNameInput = document.getElementById("food-name-input").value;
    let foodPriceInput = document.getElementById("food-price-input").value;

    listArray.push({
        name: foodNameInput,
        price: foodPriceInput,
    });
    if (foodPriceInput < 1) {
        listFoods == false
        alert("Prisen kan ikke være null!")
    }
    
    listFoods();
    sumPrice.innerHTML += `Sum = ${(listArray, foodPriceInput)}`
    console.log(listArray, foodPriceInput)

}

function listFoods() {
    foodList.innerHTML = "";
    for (let i = 0; i < listArray.length; i++){
        foodList.innerHTML += `<li><h1>${listArray[i].name}</h1>
        <h2>${listArray[i].price}</h2>
        <button id="delete-btn" onclick="deleteFood(${i})">Slett</button></li>`;
    }
}

function deleteFood (i) {
    var check = confirm("Er du sikker?")
    if (check == true) {
        listArray.splice(i, 1);
        listFoods();
    }
    
}












