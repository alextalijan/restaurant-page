import myRestaurantImage from "./img/my-restaurant.jpg";

export function homePageLoad() {
    const heading = document.createElement("h1");
    const image = document.createElement("img");
    const paragraphsDiv = document.createElement("div");

    // Add content to every element
    heading.textContent = "Welcome To My Restaurant!";
    image.src = myRestaurantImage;
    image.width = "500";

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.textContent = "Our restaurant has been consistently rated 5 stars by the worlds best food raters, such as Leopold Tartellini, Maxim Kreier...";
    p2.textContent = "We're located in downtown Paris, on the interesection of Sacre-Blue and Jeux Fromage.";
    p3.textContent = "Reserve a table at our place by calling the manager Tom, +1 722 800 9139.";

    paragraphsDiv.appendChild(p1);
    paragraphsDiv.appendChild(p2);
    paragraphsDiv.appendChild(p3);

    // Attach everything to the content div, after emptying it
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(heading);
    contentDiv.appendChild(image);
    contentDiv.appendChild(paragraphsDiv);
}