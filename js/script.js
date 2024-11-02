document.addEventListener("DOMContentLoaded", (e) => {
    const projectorWrapper = document.querySelector(".projector-wrapper");
    const projector = document.querySelector(".projector");
    const background = document.querySelector(".background");
    const logo = document.querySelector(".logo");
    const button = document.querySelector("button");

    projectorWrapper.style.display = "block";

    const projectorRadius = projector.clientWidth / 2;
    const moveHandler = (e) => move(e);

    function move(e){
        projector.style.transform = "translate(0, 0)";
        projector.style.top = `${e.clientY - projectorRadius}px`;
        projector.style.left = `${e.clientX - projectorRadius}px`;
    }

    document.addEventListener("mousemove", moveHandler);

    document.addEventListener("click", () => {
        document.removeEventListener("mousemove", moveHandler);

        projector.style.transform = "translate(-50%, -50%)";
        projector.style.top = "50%";
        projector.style.left = "50%";

        projector.classList.add("animate");
        setTimeout(() => {
            projectorWrapper.style.display = "none";
        }, 1000);

        background.classList.add("animate");
        logo.classList.add("animate");
        button.classList.add("animate");
    });
});