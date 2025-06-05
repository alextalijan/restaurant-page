import Papa from "papaparse";

export async function menuPageLoad() {
    // Loads meals into an array of meal objects
    async function loadCSV(url) {
        const text = await fetch(url).then(res => res.text());
        const { data } = Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
        });
        return data;
    }

    const meals = await loadCSV("../meals.csv");

    // Create a table
    const menuTable = document.createElement("table");
    const menuThead = document.createElement("thead");
    const menuTbody = document.createElement("tbody");

    // Initiate table columns
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
    for (const meal of meals) {
        const mealRow = document.createElement("tr");

        for (const key in meal) {
            const mealAttribute = document.createElement("td");
            mealAttribute.textContent = meal[key];
            mealRow.appendChild(mealAttribute);
        }

        menuTbody.appendChild(mealRow);
    }

    menuTable.appendChild(menuTbody);
    menuTable.className = "menu-table";

    // Add table to the content box
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(menuTable);
}