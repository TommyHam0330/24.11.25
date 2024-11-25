let image = document.getElementById("followMouse");
document.onmousemove = updateImage;

function updateImage(event) {
    const X = event.clientX;
    const Y = event.clientY;
    image.style.transform = `translate(${X}px, ${Y}px)`;
}