export function menuPageLoad() {
    const menuTable = document.createElement("table");
    const menuThead = document.createElement("thead");
    const menuTbody = document.createElement("tbody");

    const theadRow = document.createElement("tr");
    const thMeal = document.createElement("th");
    thMeal.textContent = "Meal";
    const thDescription = document.createElement("th");
    thDescription.textContent = "Description";
    const thPrice = document.createElement("th");
    thPrice.textContent = "Price in $";

    theadRow.appendChild(thMeal);
    theadRow.appendChild(thDescription);
    theadRow.appendChild(thPrice);
    menuThead.appendChild(theadRow);
    menuTable.appendChild(menuThead);

    // Add all meals as rows
    const mealOneRow = document.createElement("tr");
    
    const mealOneName = document.createElement("td");
    const mealOneDescription = document.createElement("td");
    const mealOnePrice = document.createElement("td");
    mealOneName.textContent = "Italian Pizza";
    mealOneDescription.textContent = "Homemade thin crust, sprankled with tomato sauce with our special italian recipe, that includes oregano and olives.";
    mealOnePrice.textContent = "13";
    mealOneRow.appendChild(mealOneName);
    mealOneRow.appendChild(mealOneDescription);
    mealOneRow.appendChild(mealOnePrice);


    const mealTwoRow = document.createElement("tr");
    
    const mealTwoName = document.createElement("td");
    const mealTwoDescription = document.createElement("td");
    const mealTwoPrice = document.createElement("td");
    mealTwoName.textContent = "Classic Meatballs";
    mealTwoDescription.textContent = "Delicious juicy meatballs prepared in the way of middle age - like Romans were eating. Comes with a side of potatoes.";
    mealTwoPrice.textContent = "16";
    mealTwoRow.appendChild(mealTwoName);
    mealTwoRow.appendChild(mealTwoDescription);
    mealTwoRow.appendChild(mealTwoPrice);


    const mealThreeRow = document.createElement("tr");
    
    const mealThreeName = document.createElement("td");
    const mealThreeDescription = document.createElement("td");
    const mealThreePrice = document.createElement("td");
    mealThreeName.textContent = "Pasta Carbonara";
    mealThreeDescription.textContent = "Nice juicy spaghetti filled with creamy carbonara sauce that contains sweet cream and mushrooms.";
    mealThreePrice.textContent = "12";
    mealThreeRow.appendChild(mealThreeName);
    mealThreeRow.appendChild(mealThreeDescription);
    mealThreeRow.appendChild(mealThreePrice);

    // Append every meal to the tbody, and then to the whole table
    menuTbody.appendChild(mealOneRow);
    menuTbody.appendChild(mealTwoRow);
    menuTbody.appendChild(mealThreeRow);
    menuTable.appendChild(menuTbody);

    // Add table to the content box
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(menuTable);
}