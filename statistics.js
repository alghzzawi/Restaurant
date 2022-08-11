

let allFood = [];

function Foods(foodId, foodName, type, price) {
  this.foodId = foodId;
  this.foodName = foodName;
  this.type = type;
  this.price = price;

  allFood.push(this);
}

let table = document.getElementById("table");

Foods.prototype.addToMenu = function () {
  let row = document.createElement("tr");
  table.appendChild(row);

  let id = document.createElement("td");
  id.textContent = this.foodId;
  row.appendChild(id);

  let name = document.createElement("td");
  name.textContent = this.foodName;
  row.appendChild(name);

  let type = document.createElement("td");
  type.textContent = this.type;
  row.appendChild(type);

  let price = document.createElement("td");
  price.textContent = this.price;
  row.appendChild(price);

  row.classList.add("row");
};

let form = document.getElementById("form");
let submit = document.getElementById("submit");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.FoodName.value;
  let type = event.target.foodType.value;
  let price = event.target.price.value;
  let id = FId();
  const newFood = new Foods(id, name, type, price);
  newFood.addToMenu();
  console.log(allFood);
  saveData(allFood);
}
var id = 0;
function FId() {
  return id++;
}

function saveData(data) {
  let stringObj = JSON.stringify(data);
  localStorage.setItem("foods", stringObj);
}

function getData() {
  let returnData = localStorage.getItem("foods");
  let arrayData = JSON.parse(returnData);
  for (let i = 0; i < arrayData.length; i++) {
    new Foods(
      arrayData[i].foodId,
      arrayData[i].foodName,
      arrayData[i].type,
      arrayData[i].price
    );
  }
  for (let i = 0; i < arrayData.length; i++) {
    allFood[i].addToMenu();
  }
}
getData();
