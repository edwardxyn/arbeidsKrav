let boxContainerThree = document.getElementById("food-list3");
let foodListThree = document.getElementById("list-txt3");

arry = [];

function addFoodThree () {
    let foodNameInputThree = document.getElementById("food-name-input3").value;

    arry.push({
        groceries: foodNameInputThree
    });

    listFoodsThree();
} 

function listFoodsThree() {
    foodListThree.innerHTML="";
    for (let i = 0; i < arry.length; i++) {
        foodListThree.innerHTML += `<li><h1>${arry[i].groceries}</h1>
            <button id="delete-btn" onclick="deleteGroceries(${i})">Slett</button></li>`;
      }
}

function deleteGroceries(i) {
    var check = confirm("Er du sikker?");
    if (check == true) {
    arry.splice(i, 1);
    listFoodsThree();
  }
}