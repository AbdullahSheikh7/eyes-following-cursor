const eyesFollowCursor = (containerId) => {
    let container = document.querySelector(containerId);
    let eyes = container.children;

    for (let i = 0; i < eyes.length; i++) {
        document.addEventListener("mousemove", (e) => {
            let ex = eyes[i].offsetLeft + (eyes[i].clientWidth / 2);
            let ey = eyes[i].offsetTop + (eyes[i].clientHeight / 2);

            let cx = e.clientX;
            let cy = e.clientY;

            let rotation = Math.atan2(ey - cy, ex - cx);

            eyes[i].style.transform = `rotate(${ rotation * (180 / Math.PI) }deg)`;
        });
    }
}

eyesFollowCursor("#container");
