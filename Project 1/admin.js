document.addEventListener("DOMContentLoaded", function () {
    var addResourceButton = document.getElementById("addResourceButton");
    var removeResourceButton = document.getElementById("removeResourceButton");
    var addSlidesButton = document.getElementById("addSlidesButton");
    var removeSlidesButton = document.getElementById("removeSlidesButton");

    // Add event listeners for adding and removing resources
    addResourceButton.addEventListener("click", function () {
        var title = prompt("Enter the title:");
        var description = prompt("Enter the description:");
        var link = prompt("Enter the link:");

        if (link) {
            var existingResources = JSON.parse(localStorage.getItem("resources")) || [];
            var newResource = {
                title: title,
                description: description,
                link: link
            };
            existingResources.push(newResource);
            localStorage.setItem("resources", JSON.stringify(existingResources));
            alert("Resource added successfully!");
        }
    });

    removeResourceButton.addEventListener("click", function () {
        var existingResources = JSON.parse(localStorage.getItem("resources")) || [];
        if (existingResources.length === 0) {
            alert("No resources to remove.");
            return;
        }
        var resourceToRemove = prompt("Select a resource to remove:\n" + existingResources.map(resource => resource.title).join("\n"));
        if (!resourceToRemove) {
            alert("Operation canceled.");
            return;
        }
        existingResources = existingResources.filter(function (resource) {
            return resource.title !== resourceToRemove;
        });
        localStorage.setItem("resources", JSON.stringify(existingResources));
        alert("Resource removed successfully!");
    });

    // Add event listeners for adding and removing LGM slides
    addSlidesButton.addEventListener("click", function () {
        var title = prompt("Enter the title:");
        var description = prompt("Enter the description:");
        var link = prompt("Enter the link:");

        if (link) {
            var existingSlides = JSON.parse(localStorage.getItem("lgmSlides")) || [];
            var newSlide = {
                title: title,
                description: description,
                link: link
            };
            existingSlides.push(newSlide);
            localStorage.setItem("lgmSlides", JSON.stringify(existingSlides));
            alert("Slide added successfully!");
        }
    });

    removeSlidesButton.addEventListener("click", function () {
        var existingSlides = JSON.parse(localStorage.getItem("lgmSlides")) || [];
        if (existingSlides.length === 0) {
            alert("No slides to remove.");
            return;
        }
        var slideToRemove = prompt("Select a slide to remove:\n" + existingSlides.map(slide => slide.title).join("\n"));
        if (!slideToRemove) {
            alert("Operation canceled.");
            return;
        }
        existingSlides = existingSlides.filter(function (slide) {
            return slide.title !== slideToRemove;
        });
        localStorage.setItem("lgmSlides", JSON.stringify(existingSlides));
        alert("Slide removed successfully!");
    });
});
