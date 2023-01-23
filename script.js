const groceryArray = [];

function initialize() {
  let inputContainer = document.getElementById("inputForm");
  let groceryLogo = document.getElementById("logo");

  inputContainer.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addToList();
    updateList();
  });
}

function addToList() {
  if (!checkDuplicates()) {
    let value = document.getElementById("inputForm").value;
    if (value === "") {
      alert(`Please type the item name in the box`);
    } else {
      groceryArray.push(value);
      console.log(groceryArray);

      document.getElementById("inputForm").value = "";
    }
  }
}

function removeFromList() {
  let value = document.getElementById("inputForm2").value;
  return (
    value > groceryArray.length,
    value < 1
      ? alert(`That item does not exist!`)
      : groceryArray.splice(value - 1, 1),
    console.log(groceryArray)
  );
}

function updateList() {
  let dispHTML = "<ul>";
  let dispElement = document.getElementById("grocery");
  for (let i = 0; i < groceryArray.length; i++) {
    dispHTML += "<ul><u>" + (i + 1) + ". " + groceryArray[i] + "</u></ul>";
  }
  dispHTML += "<ul>";
  dispElement.innerHTML = dispHTML;
}

function itemUp() {
  let value = document.getElementById("inputForm2").value - 1;
  if (value === 0) {
    alert(`This item cannot be moved up any further!`);
  } else if (value >= groceryArray.length) {
    alert(`This item is not on the list!`);
  } else {
    let pos = value - 1;
    let temp = groceryArray[value];
    groceryArray[value] = groceryArray[value - 1];
    groceryArray[pos] = temp;
    document.getElementById("inputForm2").value = pos + 1;
    console.log(groceryArray);
  }
}

function itemDown() {
  let value = document.getElementById("inputForm2").value;
  if (value == groceryArray.length) {
    alert(`This item cannot be moved down any further!`);
  } else if (value > groceryArray.length || value < 1) {
    alert(`This item is not on the list!`);
  } else {
    let pos = value;
    let temp = groceryArray[value - 1];
    groceryArray[value - 1] = groceryArray[value];
    groceryArray[pos] = temp;
    document.getElementById("inputForm2").value++;
    console.log(groceryArray);
  }
}

function checkDuplicates() {
  let value = document.getElementById("inputForm").value;
  for (let i = 0; i < groceryArray.length; i++) {
    if (groceryArray[i] === value) {
      alert(`You already have that grocery item on your list!`);
      return true;
    }
  }
}
