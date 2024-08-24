document.addEventListener("DOMContentLoaded", function () {
    var resourcesList = document.getElementById("resourcesList");
    var lgmSlidesContainer = document.getElementById("lgmSlides");

    // Check if the "LGM Slides" container already exists
    if (!lgmSlidesContainer) {
        lgmSlidesContainer = document.createElement("div");
        lgmSlidesContainer.id = "lgmSlides";
        resourcesList.parentNode.insertBefore(lgmSlidesContainer, resourcesList.nextSibling);

        var lgmSlidesTitle = document.createElement("h2");
        lgmSlidesTitle.textContent = "LGM Slides";
        lgmSlidesContainer.appendChild(lgmSlidesTitle);
    }

    var existingResources = JSON.parse(localStorage.getItem("resources")) || [];
    existingResources.forEach(function (resource) {
        var linkContainer = createLinkContainer(resource.title, resource.description, resource.link);
        resourcesList.appendChild(linkContainer);
    });

    var existingSlides = JSON.parse(localStorage.getItem("lgmSlides")) || [];
    existingSlides.forEach(function (slide) {
        var slideContainer = createLinkContainer(slide.title, slide.description, slide.link);
        lgmSlidesContainer.appendChild(slideContainer);
    });
});

function createLinkContainer(title, description, link) {
    var linkContainer = document.createElement("div");
    linkContainer.classList.add("resource-item"); // Add a CSS class for styling

    var titleElement = document.createElement("h3");
    titleElement.textContent = title;

    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;

    var dashElement = document.createTextNode(" -- "); // Create a dash text node

    var linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.textContent = link; // Set link text content to the actual link value
    linkElement.target = "_blank"; // Open link in new tab
    linkElement.style.color = "blue"; // Set link color to blue

    linkContainer.appendChild(titleElement);
    linkContainer.appendChild(dashElement); // Append dash between title and description
    linkContainer.appendChild(descriptionElement);
    linkContainer.appendChild(linkElement);

    return linkContainer;
}
