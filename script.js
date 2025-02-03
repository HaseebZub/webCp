document.addEventListener("DOMContentLoaded", function () {

    const seeMoreBtn = document.getElementById("see-more");

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener("click", function () {
            window.location.href = "portfolio.html"; 
        });
    }
    const addWorkBtn = document.getElementById("add-work");
    const workContainer = document.getElementById("work-container");

    if (addWorkBtn && workContainer) {
        addWorkBtn.addEventListener("click", function () {
            const newWork = document.createElement("div");
            newWork.classList.add("work-item");
            newWork.innerHTML = `
                <img src="new-ui-project.png" alt="New Work">
                <p>New Project: A recently designed UI/UX project.</p>
            `;
            workContainer.appendChild(newWork);
        });
    }
});
