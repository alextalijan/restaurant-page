import chefThumbsUp from "./img/chef-thumbs-up.jpg";

export function aboutPageLoad() {
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const paragraphsDiv = document.createElement("div");
    const p1 = document.createElement("p");
    p1.textContent = "We have opened our restaurant in early 2009, and since then, we've been making people's bellies happy for 15 years.";
    const p2 = document.createElement("p");
    p2.textContent = "Our restaurant thrives on keeping the old Italian Roman history through taste.";
    const p3 = document.createElement("p");
    p3.textContent = "If you are interested in booking the whole restaurant for an event, feel free to contact the manager Tom whose number you can find on the home page.";

    paragraphsDiv.appendChild(p1);
    paragraphsDiv.appendChild(p2);
    paragraphsDiv.appendChild(p3);

    const image = document.createElement("img");
    image.src = chefThumbsUp;
    image.width = "500";

    // Clear the content div and add elements from this page to the DOM
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraphsDiv);
    contentDiv.appendChild(image);
}