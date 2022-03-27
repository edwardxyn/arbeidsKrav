let boxContainerTwo = document.getElementById("food-list2");
let foodListTwo = document.getElementById("list-txt2");

arr = [];

function addFoodTwo () {
    let foodNameInputTwo = document.getElementById("food-name-input2").value;

    arr.push({
        food: foodNameInputTwo
    });

    listFoodsTwo();
} 

function listFoodsTwo() {
    foodListTwo.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
        foodListTwo.innerHTML += `<li><h1>${arr[i].food}</h1>
            <button id="delete-btn" onclick="deleteObject(${i})">Slett</button></li>`;
      }
}

function deleteObject(i) {
    var check = confirm("Er du sikker?");
    if (check == true) {
    arr.splice(i, 1);
    listFoodsTwo();
  }
}